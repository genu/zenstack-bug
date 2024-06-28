import z from "zod"

import { PostCreateSchema } from "@zenstackhq/runtime/zod/models"

export const SpecialPostCreateSchema = PostCreateSchema.extend({
  special: z.string().optional(),
})
