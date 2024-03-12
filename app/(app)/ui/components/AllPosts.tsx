"use client";
import Image from "next/image";
import Link from "next/link";
import { usePosts } from "../../utils/usePosts";
import { PortableText } from "@portabletext/react";

export default function AllPosts() {
  const { posts, loading } = usePosts();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <li
              key={post._id}
              className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 "
            >
              <Link href={`/posts/${post.slug?.current}`}>
                <div className="aspect-w-16 aspect-h-11">
                  <Image
                    className="w-full object-cover rounded-xl"
                    src={
                      (post.mainImage && post.mainImage) ||
                      "https://dummyimage.com/500x500"
                    }
                    alt={(post.title && post.title) || "image"}
                    width={500}
                    height={500}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${post.mainImage}&w=16&q=1`}
                  />
                </div>
                <div className="my-6">
                    <h3 className="text-xl font-semibold text-textPrimary">
                      {post.title}
                    </h3>
                    <p className="mt-5 text-textSecondary line-clamp-3">
                        <PortableText value={post.body!} />
                    </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                    <Image
                      className="rounded-full size-8"
                      src={
                        (post.author?.imageUrl && post.author.imageUrl) ||
                        "https://dummyimage.com/64x64"
                      }
                      alt={(post.author?.name && post.author.name) || "Anoynomous Member"}
                      width={80}
                      height={80}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={`/_next/image?url=${post.author?.imageUrl}&w=16&q=1`}
                    />
                    <div>
                        <h5 className="text-sm text-textPrimary">
                            By {post.author?.name && post.author.name || "Anoynomous Member"}
                        </h5>
                    </div>
                  
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
