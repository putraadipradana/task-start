import { queryOptions } from '@tanstack/react-query'
import { POST_QUERY_KEYS } from '../constant'
import { getPostFn, getPostsFn } from '../server/functions'

export const getPostsQueryOptions = () =>
  queryOptions({
    queryKey: POST_QUERY_KEYS.all,
    queryFn: getPostsFn,
  })

export const getPostByIdQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: POST_QUERY_KEYS.byId(postId),
    queryFn: () => getPostFn({ data: postId }),
  })
