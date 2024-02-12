"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import type { Post, FeaturedCategoryProps } from "@/app/(app)/lib/definitions";
import { PortableText } from "@portabletext/react";
import SanityImageComponent from "@/app/(app)/ui/components/SanityImageComponent";

async function fetchFeaturedPosts(categoryName: string): Promise<Post[]>{
  const query = `*[_type == 'post' && $categoryName in categories[]->title]{title, slug}`;
  const params = { categoryName };
  const posts = await client.fetch(query, params);
  return posts;
}

export default function FeaturedBlogs({categoryName}: {categoryName: string}) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchFeaturedPosts(categoryName).then(setPosts);

    // The listen method returns a subscription
    const query = `*[_type == 'post' && $categoryName in categories[]->title]{title, slug}`;
    const subscription = client.listen(query, {categoryName}).subscribe((update) => {
      fetchFeaturedPosts(categoryName).then(setPosts);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [categoryName]);


  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center my-8">Featured Category Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              <div className="text-gray-700 text-base">
                <PortableText value={post.body!} />
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              {post.categoryNames?.map((name, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
