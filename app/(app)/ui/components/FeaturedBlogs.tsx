import type { Post } from "@/app/(app)/lib/definitions";
import { getPost } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import SanityImageComponent from "@/app/(app)/ui/components/SanityImageComponent";

export default async function FeaturedBlogs(){
    const posts: Post[] = await getPost();
    return(
        <>
         {posts && <ul>
            {posts.map((post) => (
              <li key={post._id}>
                {post.title}
                <PortableText value={post.body!} components={{ types: {image: SanityImageComponent}}}/>
              </li>
            ))}
          </ul>}
        </>  
    )
}