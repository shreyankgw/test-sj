import Hero from "@/app/ui/components/hero";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/lib/definitions";

export default async function Home() {
    const posts = await client.fetch<Post[]>(`*[_type == "post"]`);
  return (
    <main className="flex flex-col min-h-screen text-brandPrimary">
      <Hero />
      {posts && <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>}
    </main>
  );
}
