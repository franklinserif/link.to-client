import { z } from "zod";

export const linkShortenerFormSchema = z.object({
  linkInput: z.string().min(1, "must contain a valid url").url(),
});
