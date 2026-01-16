import { createServerFn } from "@tanstack/react-start"
import z from "zod"
import { eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { post } from "@/lib/db/schema"

const PostSchema = z.object({
    title: z.string().min(1),
    body: z.string().min(1)
})

export const getPostsFn = createServerFn({ method: 'GET' }).handler(async () => {
    const response = await db.query.post.findMany({
        // eslint-disable-next-line no-shadow
        orderBy: (post, { desc }) => [desc(post.createdAt)]
    })
    return response
})

export const getPostFn = createServerFn({ method: 'GET' }).inputValidator((d: string) => d).handler(async ({ data }) => {
    const response = await db.query.post.findFirst({
        where: eq(post.id, data)
    })
    return response
})

export const createPostFn = createServerFn({ method: 'POST' }).inputValidator(PostSchema).handler(async ({ data }) => {
    await db.insert(post).values(data)
})