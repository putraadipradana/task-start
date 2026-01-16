import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getPostByIdQueryOptions } from '@/features/posts/hooks/query-options'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  loader: async ({ context, params }) => {
    const { postId } = params
    await context.queryClient.ensureQueryData(getPostByIdQueryOptions(postId))
  },
})

function RouteComponent() {
  const { postId } = Route.useParams()
  const { data: post } = useSuspenseQuery(getPostByIdQueryOptions(postId))
  return <div>{post?.title}</div>
}
