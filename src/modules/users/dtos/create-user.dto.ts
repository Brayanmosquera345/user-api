import { z } from "zod";

export const CreateUserSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must have at least 2 characters" })
        .max(50, { message: "Name must have at most 50 characters" }),

    email: z.email(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
