import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import { CreatePostForm } from './forms/create-post-form'
import type { Post } from '../types'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type PostListProps = {
  posts: Array<Post>
}

function PostList({ posts }: PostListProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between pb-16">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg/8 text-muted-foreground">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div>
            <CreatePostForm />
          </div>
        </div>
        <Separator />
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-16 mt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => {
            const dateTime = format(new Date(post.createdAt), 'MMMM dd, yyyy')

            return (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={dateTime} className="text-muted-foreground">
                    {dateTime}
                  </time>
                  <Badge render={<Link to={'/'} />} variant={'secondary'}>
                    Computer
                  </Badge>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold group-hover:opacity-70">
                    <Link to={'/posts/$postId'} params={{ postId: post.id }}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-muted-foreground">
                    {post.body}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <Avatar className="size-10! bg-neutral-200">
                    <AvatarImage
                      src={`https://robohash.org/${post.id}`}
                      alt="Putra Adi Pradana"
                    />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div className="text-sm/6">
                    <p className="font-semibold">
                      <Link to={'/'}>
                        <span className="absolute inset-0" />
                        Putra Adi Pradana
                      </Link>
                    </p>
                    <p className="text-gray-400">Owner</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { PostList }
