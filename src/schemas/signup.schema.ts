import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(1, "User name is required."),
    email: z.string().min(1, "User email is required."),
    password: z.string().min(1, "Password is required."),
    profilePicture: z.any()
    .refine((file) => file && file.length > 0, {
        message: "Profile photo is required.",
    }),
    bio : z.string().optional(),
    memberStatus: z.object({
        status: z.string().optional(),
        expiresIn: z.date().optional()
    }).optional(),
    followers: z.number().optional(),
    following: z.number().optional(),
    role: z.string().optional(),
    userStatus: z.string().optional(),
    isDeleted: z.boolean().optional()
    
})