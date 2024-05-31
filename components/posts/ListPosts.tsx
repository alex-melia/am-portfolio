import { Post } from "@/types/post"

interface ListPostsProps {
  posts: Post[]
}

export default function ListPosts({ posts }: ListPostsProps) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  )
}
