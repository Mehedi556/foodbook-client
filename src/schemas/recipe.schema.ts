import { z } from "zod";

export const recipeSchema = z.object({
    title: z.string().min(1, "Recipe title is required."),
    description: z.string().min(1, "Description is required."),
    ingredients: z.array(z.string()).min(1, "Ingredients are required."),
    image: z.any().refine((file) => file && file.length > 0, {
        message: "Recipe image is required.",
    }),
    instructions: z.string().min(1, "Instruction is required."),
    tags: z.array(z.string()).min(1, "Tags are required."),
    postStatus: z.enum(["premium", "non-premium"]),
    isDeleted: z.boolean().optional(),
    isPublished: z.boolean().optional(),
    rating: z.any().optional(),
    comments: z.any().optional(),
    upvotes: z.array(z.any()).optional(),
    downvotes: z.array(z.any()).optional(),
});