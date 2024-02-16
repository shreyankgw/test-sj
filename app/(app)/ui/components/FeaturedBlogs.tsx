"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import type { Post } from "@/app/(app)/lib/definitions";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";

async function fetchFeaturedPosts(categoryName: string): Promise<Post[]> {
  const query = `*[_type == 'post' && $categoryName in categories[]->title]{title, _id, slug, body, "categoryNames": categories[]->title, "mainImage": mainImage.asset->url}`;
  const params = { categoryName };
  const posts = await client.fetch(query, params);
  return posts;
}

export default function FeaturedBlogs({
  categoryName,
}: {
  categoryName: string;
}) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchFeaturedPosts(categoryName).then(setPosts);

    // The listen method returns a subscription
    const query = `*[_type == 'post' && $categoryName in categories[]->title]`;
    const subscription = client
      .listen(query, { categoryName })
      .subscribe((update) => {
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
        <h2 className="text-2xl lg:text-4xl font-bold text-center my-8">
          Latest Articles
        </h2>
        <p className="text-textSecondary mx-auto max-w-2xl lg:max-w-3xl text-center text-lg">
          Featured tips and tricks for everything related to Shopify and Shopify Plus Storefronts to help you succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mx-auto lg:max-w-7xl xl:max-w-screen-2xl">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              {post.mainImage && (
                <div className="shrink-0">
                  <Image
                    className="h-72 w-full object-cover"
                    src={post.mainImage}
                    alt={post.title!}
                    width={1280}
                    height={720}
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href={`/posts/${post.slug?.current}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <div className="mt-3 text-base text-gray-500 line-clamp-3">
                      <PortableText value={post.body!} />
                    </div>
                  </Link>
                  <div className="pt-4 pb-2">
                    {post.categoryNames?.map((name, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        #{name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center my-8">
          <Link
            href="/posts"
            className="block inline-flex items-center px-4 h-12 border border-transparent shadow-sm text-base font-semibold rounded-full text-textPrimary bg-bgSecondaryInteractive hover:bg-bgSecondaryInteractiveHover"
          >
            Read More
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 font-bold"
            >
              <path
                d="M17.0306 12.5306L9.53062 20.0306C9.46093 20.1003 9.37821 20.1556 9.28716 20.1933C9.19612 20.231 9.09854 20.2504 8.99999 20.2504C8.90144 20.2504 8.80386 20.231 8.71282 20.1933C8.62177 20.1556 8.53905 20.1003 8.46936 20.0306C8.39968 19.9609 8.34441 19.8782 8.30669 19.7872C8.26898 19.6961 8.24957 19.5986 8.24957 19.5C8.24957 19.4015 8.26898 19.3039 8.30669 19.2128C8.34441 19.1218 8.39968 19.0391 8.46936 18.9694L15.4397 12L8.46936 5.03063C8.32863 4.8899 8.24957 4.69903 8.24957 4.50001C8.24957 4.30098 8.32863 4.11011 8.46936 3.96938C8.61009 3.82865 8.80097 3.74959 8.99999 3.74959C9.19901 3.74959 9.38988 3.82865 9.53062 3.96938L17.0306 11.4694C17.1003 11.539 17.1557 11.6218 17.1934 11.7128C17.2312 11.8038 17.2506 11.9014 17.2506 12C17.2506 12.0986 17.2312 12.1962 17.1934 12.2872C17.1557 12.3783 17.1003 12.461 17.0306 12.5306Z"
                fill="#1A212B"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
