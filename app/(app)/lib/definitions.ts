import { PortableTextBlock } from "sanity";

export type PrimaryButtonProps = {
    title: string;
    url: string;
};

export type Post = {
    _id?: string;
    title?: string;
    slug?: {
        current: string;
    };
    body?: PortableTextBlock[];
    categoryNames?: string[];
    mainImage?: string;
    _updatedAt?: string;
    _createdAt?: string;
    author?: {
        name?: string;
        image?: string;
        imageUrl?: string;
    };
    categories?: string[];
};

export interface RealTimePostProps {
    postId: string;
  }

export interface FeaturedCategoryProps{
    posts: Post[]
  }