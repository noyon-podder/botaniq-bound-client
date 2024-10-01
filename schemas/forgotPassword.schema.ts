import { z } from "zod";

const forgotPasswordValidationSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
});

export default forgotPasswordValidationSchema;
