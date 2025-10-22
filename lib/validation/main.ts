import { z } from 'zod'

export const ServiceValidation = z.object({
    name : z
        .string()
        .min(4,"Name must be at least 4 characters")
        .regex(/^[A-Za-z\s]+$/, "Name must contain only letters"),
    description: z
        .string()
        .min(15, "Description must be at least 15 characters"),
})