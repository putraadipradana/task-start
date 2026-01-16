export const POST_QUERY_KEYS = {
    all: ['posts'],
    byId: (id: string) => [...POST_QUERY_KEYS.all, id]
} as const