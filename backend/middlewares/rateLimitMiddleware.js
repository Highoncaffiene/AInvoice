import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getAuth } from "@clerk/express";

// Initialize Ratelimit using sliding window strategy (50 requests per day)
// Redis.fromEnv() automatically pulls UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from process.env
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(50, "1 d"),
  analytics: true,
  prefix: "ai_ratelimit",
});

export const aiRateLimiter = async (req, res, next) => {
  try {
    // Attempt to get user ID from Clerk
    const { userId } = getAuth(req) || {};
    
    // Fallback to IP address if unauthenticated
    const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "127.0.0.1";
    
    const identifier = userId || ipAddress;

    const { success, limit, reset, remaining } = await ratelimit.limit(identifier);

    // Set standard rate limit headers
    res.setHeader("X-RateLimit-Limit", String(limit));
    res.setHeader("X-RateLimit-Remaining", String(remaining));
    res.setHeader("X-RateLimit-Reset", String(reset));

    if (!success) {
      console.warn(`[Rate Limit Exceeded] Identifier: ${identifier}`);
      
      // Calculate Retry-After in seconds
      const retryAfterSeconds = Math.ceil((reset - Date.now()) / 1000);
      
      return res.status(429).set({
        "Retry-After": String(retryAfterSeconds > 0 ? retryAfterSeconds : 0)
      }).json({
        success: false,
        message: "Rate limit exceeded. You have reached your daily limit for AI generations."
      });
    }

    next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    // In case of Redis failure, we fail open (allow request) to prevent blocking the app
    next();
  }
};
