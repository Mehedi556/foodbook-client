import { z } from "zod";

const loginValidationSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z
    .string()
    .trim()
    .min(3, "Password needs to be at lest 3 character"),
});

export default loginValidationSchema;