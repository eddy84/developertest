import {z} from "zod";

export const updateClientInputSchema = z.object({
    userId:z.string().uuid(),
    name: z.string().min(6),
    email: z.string().email(),
    street: z.string().min(3),
    postcode: z.string().min(4),
    city: z.string().min(3),
    notes: z.string()
});

export type UpdateClientInput = z.infer<typeof updateClientInputSchema>;
