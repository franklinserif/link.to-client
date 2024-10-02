import { z } from "zod";
import { linkShortenerFormSchema } from "@schemas/linkShortenerForm";

export type TLinkShortenerForm = z.infer<typeof linkShortenerFormSchema>;
