import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import type { Post } from "@/app/(app)/lib/definitions";
import { notFound } from "next/navigation";
import { Slide } from "../../ui/animation/Slide";
import { formatDate } from "../../utils/date";

type Props = {
  params: {
    post: string;
  };
};

async function fetchPost(slug: string): Promise<Post> {
  const query = `*[_type == 'post' && slug.current == $slug][0]`;
  const params = { slug };
  const post = await client.fetch(query, params);
  return post;
}

export default async function Article({ params }: Props) {
  const slug = params.post;
  const post: Post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen lg:max-w-7xl xl:max-w-screen-2xl mx-auto">
      <header className="my-10">
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
          <div className="min-h-full lg:border-r border-r-0 border-zinc-800 basis-3/4 pt-10 pb-4 lg:pr-6 px-0">
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
                <time dateTime={post._updatedAt ? post._updatedAt : post._createdAt} className="text-textSecondary">
                  {post._updatedAt
                    ? formatDate(post._updatedAt)
                    : formatDate(post._createdAt!)}
                </time>
              </div>
            </div>
          </div>
        </Slide>
      </article>
    </main>
  );
}
