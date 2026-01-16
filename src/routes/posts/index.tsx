import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getPostsQueryOptions } from '@/features/posts/hooks/query-options'
import { PostList } from '@/features/posts/components/posts-list'

export const Route = createFileRoute('/posts/')({
  component: RouteComponent,
  pendingComponent: Loading,
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(getPostsQueryOptions())
  },
})

function RouteComponent() {
  const { data: posts } = useSuspenseQuery(getPostsQueryOptions())

  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

function Loading() {
  return <div>Loading...</div>
}
