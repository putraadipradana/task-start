import type { post } from '@/lib/db/schema'

export type Post = typeof post.$inferSelect
