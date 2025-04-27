import { z } from "zod";

export const jobSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be at most 50 characters"),
  
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be at most 100 characters"),
  
  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location must be at most 100 characters"),
  
  type: z
    .string(),
  
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be at most 1000 characters"),
});
