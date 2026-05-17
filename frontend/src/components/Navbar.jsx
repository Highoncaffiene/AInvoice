import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedOut,
  SignedIn,
  UserButton,
  useClerk,
} from "@clerk/clerk-react";
import { navbarStyles } from "../assets/dummystyle";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 10) {
        // Back on top of the page
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setVisible(false);
      }
      // If scrolling up but not at top, it stays hidden as per instructions
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ❌ Hide navbar inside app
  if (location.pathname.startsWith("/app")) return null;

  const openSignInWithRedirect = () => {
    setOpen(false); // Close mobile menu when signing in
    openSignIn({
      afterSignInUrl: "/app/dashboard",
    });
  };

  // Close mobile menu when clicking links
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className={`${navbarStyles.header} transition-transform duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className={navbarStyles.container}>
        <nav className={navbarStyles.nav}>
          {/* LEFT - Logo and Desktop Navigation */}
          <div className={navbarStyles.logoSection}>
            <Link to="/" className={navbarStyles.logoLink}>
              <img src={logo} alt="Logo" className={navbarStyles.logoImage} />
              <span className={navbarStyles.logoText}>InvoiceAI</span>
            </Link>

            <div className={navbarStyles.desktopNav}>
              <a href="#features" className={navbarStyles.navLink} onClick={handleLinkClick}>
                Features
              </a>
              <a href="#pricing" className={navbarStyles.navLinkInactive} onClick={handleLinkClick}>
                Pricing
              </a>
            </div>
          </div>

          {/* RIGHT - Auth Buttons and Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
            <SignedOut>
              <div className={navbarStyles.authSection}>
                <button 
                  onClick={openSignInWithRedirect} 
                  className={navbarStyles.signInButton}
                >
                  Sign In
                </button>
                <button 
                  onClick={openSignInWithRedirect} 
                  className={navbarStyles.signUpButton}
                >
                  <span className={navbarStyles.signUpOverlay}></span>
                  <span className={navbarStyles.signUpText}>Get Started</span>
                  <svg 
                    className={navbarStyles.signUpIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setOpen(!open)} 
              className={navbarStyles.mobileMenuButton}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className={navbarStyles.mobileMenuIcon}>
                <span className={`${navbarStyles.mobileMenuLine1} ${open ? navbarStyles.mobileMenuLine1Open : navbarStyles.mobileMenuLine1Closed}`}></span>
                <span className={`${navbarStyles.mobileMenuLine2} ${open ? navbarStyles.mobileMenuLine2Open : navbarStyles.mobileMenuLine2Closed}`}></span>
                <span className={`${navbarStyles.mobileMenuLine3} ${open ? navbarStyles.mobileMenuLine3Open : navbarStyles.mobileMenuLine3Closed}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={navbarStyles.mobileMenu}>
          <div className={navbarStyles.mobileMenuContainer}>
            <a 
              href="#features" 
              className={navbarStyles.mobileNavLink}
              onClick={handleLinkClick}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className={navbarStyles.mobileNavLink}
              onClick={handleLinkClick}
            >
              Pricing
            </a>

            <div className={navbarStyles.mobileAuthSection}>
              <SignedOut>
                <button 
                  onClick={openSignInWithRedirect}
                  className={navbarStyles.mobileSignIn}
                >
                  Sign In
                </button>
                <button 
                  onClick={openSignInWithRedirect}
                  className={navbarStyles.mobileSignUp}
                >
                  Get Started
                </button>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
