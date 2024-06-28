import { PostCreateSchema } from "@zenstackhq/runtime/zod/models"

export default defineEventHandler(() => {
  const schema = PostCreateSchema.parse({
    title: "Hello, World!",
  })

  console.log(schema)
})
