import { z } from 'zod';

export const itemSchema = z.object({
  description: z.string().min(1, "Description is required").optional(),
  qty: z.coerce.number().min(0).default(1),
  unitPrice: z.coerce.number().min(0).default(0),
});

export const clientSchema = z.object({
  name: z.string().optional().or(z.literal("")),
  email: z.string().email("Invalid client email").optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
});

export const invoiceValidationSchema = z.object({
  invoiceNumber: z.string().optional(),
  issueDate: z.string().optional(),
  dueDate: z.string().optional(),
  fromBusinessName: z.string().optional(),
  fromEmail: z.string().email("Invalid business email").optional().or(z.literal("")),
  fromAddress: z.string().optional(),
  fromPhone: z.string().optional(),
  fromGst: z.string().optional(),
  client: z.union([z.string(), clientSchema]).optional(),
  items: z.union([z.string(), z.array(itemSchema), z.any()]).optional(),
  currency: z.string().optional(),
  status: z.enum(["draft", "unpaid", "paid", "overdue"]).optional().or(z.literal("")),
  taxPercent: z.coerce.number().min(0).max(100).optional(),
  tax: z.coerce.number().min(0).max(100).optional(),
  defaultTaxPercent: z.coerce.number().min(0).max(100).optional(),
  signatureName: z.string().optional(),
  signatureTitle: z.string().optional(),
  notes: z.string().optional(),
  aiSource: z.string().optional(),
  logo: z.string().optional(),
  stamp: z.string().optional(),
  signature: z.string().optional(),
  logoDataUrl: z.string().optional(),
  stampDataUrl: z.string().optional(),
  signatureDataUrl: z.string().optional()
}).catchall(z.any());

export const businessProfileValidationSchema = z.object({
  businessName: z.string().optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  address: z.string().optional(),
  phone: z.string().optional(),
  gstNumber: z.string().optional(),
  defaultTaxPercent: z.coerce.number().min(0).max(100).optional(),
  signatureOwnerName: z.string().optional(),
  signatureOwnerTitle: z.string().optional()
}).catchall(z.any());

export const validateData = (schema, data) => {
  try {
    return { success: true, data: schema.parse(data) };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        errors: error.errors.map(err => ({ field: err.path.join('.'), message: err.message }))
      };
    }
    return { success: false, errors: [{ field: "unknown", message: "Validation failed" }] };
  }
};
