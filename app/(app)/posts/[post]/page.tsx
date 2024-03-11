"use client";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import type { Post } from "@/app/(app)/lib/definitions";
import { Slide } from "../../ui/animation/Slide";
import { formatDate } from "../../utils/date";
import { readTime } from "../../utils/readTime";
import { PortableText,toPlainText } from "@portabletext/react";
import PageHeading from "../../ui/components/common/PageHeading";
import urlBuilder from "@sanity/image-url";
import { CustomPortableText } from "../../ui/components/common/CustomPortableText";
import { useEffect, useState } from "react";
import { fetchPostData } from "../../utils/dataFetcher";
import { urlFor } from "../../utils/urlFor";

type Props = {
  params: {
    post: string;
  };
};

export default function Article({ params }: Props) {
 
   const [post, setPost] = useState<Post | null>(null);
   
   useEffect(() => {
       if(!params?.post) return;

      const fetchAndSetPost = async () => {
        const postData = await fetchPostData(params.post);
        setPost(postData);
        console.log(postData.categories);
      }
      fetchAndSetPost().catch(console.error);
   }, [params.post]);

   if(!post){
     return <div>Loading...</div>
   }

  const words = toPlainText(post.body!);
  const mainImage = post.mainImage && urlBuilder(client).image(post.mainImage).url();

  return (
    <main className="flex flex-col min-h-screen lg:max-w-7xl xl:max-w-screen-2xl mx-auto p-6 lg:px-8">
      <header>
        <Slide className="relative flex items-center gap-x-2 border-b border-zinc-200 pb-8">
          <Link
            href="/posts"
            className="whitespace-nowrap dark:text-zinc-400 text-zinc-400 hover:dark:text-white hover:text-zinc-700 text-sm border-b dark:border-zinc-700 border-zinc-200"
          >
            Back to Blog
          </Link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-zinc-400"
          >
            <path
              d="M17.0306 12.5306L9.53062 20.0306C9.46093 20.1003 9.37821 20.1556 9.28716 20.1933C9.19612 20.231 9.09854 20.2504 8.99999 20.2504C8.90144 20.2504 8.80386 20.231 8.71282 20.1933C8.62177 20.1556 8.53905 20.1003 8.46936 20.0306C8.39968 19.9609 8.34441 19.8782 8.30669 19.7872C8.26898 19.6961 8.24957 19.5986 8.24957 19.5C8.24957 19.4015 8.26898 19.3039 8.30669 19.2128C8.34441 19.1218 8.39968 19.0391 8.46936 18.9694L15.4397 12L8.46936 5.03063C8.32863 4.8899 8.24957 4.69903 8.24957 4.50001C8.24957 4.30098 8.32863 4.11011 8.46936 3.96938C8.61009 3.82865 8.80097 3.74959 8.99999 3.74959C9.19901 3.74959 9.38988 3.82865 9.53062 3.96938L17.0306 11.4694C17.1003 11.539 17.1557 11.6218 17.1934 11.7128C17.2312 11.8038 17.2506 11.9014 17.2506 12C17.2506 12.0986 17.2312 12.1962 17.1934 12.2872C17.1557 12.3783 17.1003 12.461 17.0306 12.5306Z"
              fill="#1A212B"
            />
          </svg>

          <p className="text-zinc-400 text-sm truncate">{post.title}</p>
        </Slide>
      </header>

      <article>
        <Slide className="flex lg:flex-row flex-col relative" delay={0.1}>
          <div className="min-h-full lg:border-r border-r-0 border-zinc-200 basis-3/4 pt-10 pb-4 lg:pr-6 px-0">
            <div className="flex items-center flex-wrap gap-4 text-md mb-8 text-zinc-600">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={"#728197"}
                  className="text-textSecondary"
                >
                  <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"></path>
                  <path d="m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z"></path>
                </svg>
                <time
                  dateTime={post._updatedAt ? post._updatedAt : post._createdAt}
                  className="text-textSecondary"
                >
                  {post._updatedAt
                    ? formatDate(post._updatedAt)
                    : formatDate(post._createdAt!)}
                </time>
              </div>
              <div className="flex items-center gap-x-2 text-md text-textSecondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={"#728197"}
                  className="text-textSecondary"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                  <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                </svg>
                <div>{readTime(words)}</div>
              </div>
            </div>

            <PageHeading title={post.title!} />

            <div className="relative w-full h-40 pt-[52.5%]">
               <Image 
                   className="rounded-xl border border-zinc-800 object-cover"
                   layout="fill"
                   src={mainImage && mainImage || ''}
                   alt={post.title && post.title || ''}
                   quality={100}
                   priority
                   placeholder="blur"
                   blurDataURL={`/_next/image?url=${mainImage}&w=16&q=1`}
                />
            </div>

            <div className="mt-8 text-zinc-600 leading-relaxed tracking-tight text-lg">
              <PortableText value={post.body!} components={CustomPortableText} />
            </div>
          </div>

          <aside className="flex flex-col lg:max-h-full h-max gap-y-8 sticky top-2 bottom-auto right-0 basis-1/4 py-10 lg:px-6 px-0">
              <section className="border-b border-zinc-200 pb-10">
                 <p className="text-textSecondary text-sm">Written By</p>
                 <address className="flex items-center gap-x-3 mt-4 not-italic">
                   <div className="relative w-12 h-12">
                     <Image   
                       src={post.author?.imageUrl && post.author.imageUrl || ''}
                       alt={post.author?.name && post.author.name || 'empty image'}
                       className="rounded-full bg-zinc-300 object-cover"
                       height={80}
                       width={80}
                       loading="lazy"
                       placeholder="blur"
                       blurDataURL={`/_next/image?url=${post.author?.imageUrl}&w=16&q=1`}
                     />
                   </div>
                   <div rel="author">
                     <h3 className="font-semibold text-lg tracking-tight">
                       {post.author?.name && post.author.name || 'Anoynomous Member'}
                     </h3>
                   </div>
                 </address>
              </section>

              <section className="border-b border-zinc-200 pb-10">
                <p className="text-textSecondary text-xl font-semibold mb-4 tracking-tight">Categories</p>
                <ul className="flex flex-wrap gap-2 items-center tracking-tight">
                  {post.categories && post.categories.map((category: string) => (
                    <li key={category} className=" bg-zinc-100 border border-zinc-200 rounded-md px-2 py-1 text-sm">
                      {category}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border-b border-zinc-200 pb-10">
                 <h3 className="text-xl font-semibold mb-4 tracking-tight text-textSecondary">Share</h3>
                 
              </section>
          </aside>
        </Slide>
      </article>
    </main>
  );
}
