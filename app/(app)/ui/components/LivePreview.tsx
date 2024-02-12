"use client";
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { Post, RealTimePostProps } from '@/app/(app)/lib/definitions'; 
import { PortableText } from '@portabletext/react';
import SanityImageComponent from "@/app/(app)/ui/components/SanityImageComponent";

export default function LivePreview({ postId }: RealTimePostProps){
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    const query = `*[_type == "post" && _id == $postId]{title, slug, body}`;
    const params = { postId };

    client.fetch(query, params).then((data) => {
      setPostData(data[0] as Post);
    }).catch((error) => {
      console.error("Error fetching post:", error);
      setPostData(null);
    });

    // The listen method returns a subscription
    const subscription = client.listen(query, params).subscribe({
      next: (update) => {
        // Update your component's state with the new post data
        setPostData(update.result as Post);
      },
      error: (error) => {
        console.error("Subscription error:", error);
        setPostData(null);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [postId]);

  console.log(postData);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      {/* Render more post details here */}
      <PortableText value={postData.body!} components={{ types: {image: SanityImageComponent}}}/>
    </div>
  );
};
