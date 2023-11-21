import { z } from "zod";

export const contactFormValidation = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string().min(6).max(16),
});

export type IContactForm = z.infer<typeof contactFormValidation>;
