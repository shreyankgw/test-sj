"use client";

import { PortableTextBlock } from "sanity";

type props = {
  title: string;
  slug: string;
  body: string | PortableTextBlock[];
};

const twitterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
};

const linkedinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 11l0 5" />
      <path d="M8 8l0 .01" />
      <path d="M12 16l0 -5" />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  );
};

const whatsappIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
};

const facebookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  );
};

export default function SharePost({ title, slug, body }: props) {
  const url = `http://localhost:3000/posts/`;

  const options = [
    {
      icon: twitterIcon,
      name: "Twitter",
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        "Read this amazing article by The SJ Development"
      )}.%0A%0A${title}%0A%0A${url}${slug}`,
    },
    {
      icon: linkedinIcon,
      name: "LinkedIn",
      shareUrl: `https://linkedin.com/sharing/share-offsite/?url=${url}${slug}&title=${title}&summary=${body}`,
    },
    {
      icon: facebookIcon,
      name: "Facebook",
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${url}${slug}`,
    },
    {
      icon: whatsappIcon,
      name: "WhatsApp",
      shareUrl: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        "Read this amazing article by The SJ Development"
      )}.%0A%0A${title}%0A%0A${url}${slug}`,
    },
  ];

  const openPopup = (url: string) => {
    window.open(
      url,
      "Social Share",
      "width=600,height=600,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  return (
    <section className="border-b border-zinc-200 pb-10">
      <h3 className="text-xl font-semibold tracking-tight mb-4 text-textSecondary">Share Post</h3>

      <div className="flex flex-wrap items-center gap-2 tracking-tight">
        {options.map((data, id) => (
          <button
            key={id}
            onClick={() => openPopup(data.shareUrl)}
            title={`Share to ${data.name}`}
            aria-label={`Share to ${data.name}`}
            className="w-12 h-12 p-2 grid place-content-center text-2xl bg-gray-200 rounded-xl"
          >
            <data.icon />
          </button>
        ))}
      </div>
    </section>
  );
}
