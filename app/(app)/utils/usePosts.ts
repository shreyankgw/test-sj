import { useState, useEffect } from "react";
import { fetchAllPosts } from "./dataFetcher";
import { Post } from "@/app/(app)/lib/definitions";

export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const posts = await fetchAllPosts();
            setPosts(posts);
            setLoading(false);
        };
        getPosts();
    }, []);

    return { posts, loading };
}