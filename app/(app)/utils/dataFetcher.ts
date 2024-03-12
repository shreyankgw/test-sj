import { client } from "@/sanity/lib/client";

export async function fetchPostData(slug: string) {
  const query = `*[_type == 'post' && slug.current == $slug]{
    _id,
    _createdAt,
    _publishedAt,
    _updatedAt,
    title,
    slug,
    mainImage,
    body,
    "author": author->{
        name,
        "imageUrl": image.asset->url
    },
    "categories": categories[]->title
  }[0]`;
  const params = { slug };
  return await client.fetch(query, params);
}

export async function fetchAllPosts() {
  const query = `*[_type == 'post'] | order(_updatedAt desc){
    _id,
    _createdAt,
    _publishedAt,
    _updatedAt,
    title,
    slug,
    "mainImage": mainImage.asset->url,
    body,
    "author": author->{
        name,
        "imageUrl": image.asset->url
    },
    "categories": categories[]->title
  }`;
  return await client.fetch(query);
}