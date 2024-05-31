import { getAllPosts } from "@/lib/api"
import ListPosts from "@/components/posts/ListPosts"
import HeroPost from "@/components/posts/HeroPost"

export default function BlogPage() {
  const allPosts = getAllPosts()

  const heroPost = allPosts[0]

  const morePosts = allPosts.slice(1)

  console.log(allPosts)

  return (
    <main className="container min-h-screen">
      <h1 className="text-center text-4xl font-semibold my-12">Blog</h1>
      <div className="flex flex-col gap-4">
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <ListPosts posts={morePosts} />}
      </div>
    </main>
  )
}
