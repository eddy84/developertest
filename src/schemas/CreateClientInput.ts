import {z} from "zod";

export const createClientInputSchema = z.object({
    name: z.string().min(6),
    email: z.string().email(),
    street: z.string().min(3),
    postcode: z.string().min(4),
    city: z.string().min(3),
    notes: z.string(),
});

export type CreateClientInput = z.infer<typeof createClientInputSchema>;
