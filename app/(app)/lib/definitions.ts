import { PortableTextBlock } from "sanity";

export type PrimaryButtonProps = {
    title: string;
    url: string;
};

export type Post = {
    _id: string;
    title?: string;
    slug?: {
        current: string;
    };
    body?: PortableTextBlock[];
}