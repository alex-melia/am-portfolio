import { getAllPosts } from "@/lib/api"
import ListPosts from "@/components/posts/ListPosts"
import HeroPost from "@/components/posts/HeroPost"

export default function BlogPage() {
  const allPosts = getAllPosts()

  const heroPost = allPosts[0]

  const morePosts = allPosts.slice(1)

  console.log(allPosts)

  return (
    <main className="container min-h-screen mb-24">
      <h1 className="text-center text-4xl font-semibold mt-24 mb-12">
        I also write stuff.
      </h1>
      <div className="flex flex-col gap-12">
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
