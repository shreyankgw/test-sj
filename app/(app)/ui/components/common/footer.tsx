import Link from "next/link";
import Image from "next/image";

const FooterItem = ({ text, link }: { text: string; link: string }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-brandPrimary"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({
  title,
  items,
}: {
  title: string;
  items: { id: number; text: string; link: string }[];
}) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-textPrimary">{title}</h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Company",
    items: [
      {
        id: 1,
        text: "About",
        link: "/pages/about-us",
      },
      {
        id: 2,
        text: "Services",
        link: "/pages/services",
      },
      {
        id: 3,
        text: "Work",
        link: "/pages/our-work",
      },
      {
        id: 5,
        text: "Contact",
        link: "/pages/contact",
      },
    ],
  },
  {
    id: 2,
    title: "Ressources",
    items: [
      {
        id: 1,
        text: "Blogs",
        link: "/posts",
      },
      {
        id: 2,
        text: "Privacy",
        link: "/pages/privacy-policy",
      },
      {
        id: 3,
        text: "Terms",
        link: "/pages/terms-of-service",
      },
      {
        id: 4,
        text: "FAQ",
        link: "/pages/faq",
      },
    ],
  },
];

const FooterBlock = () => {
  return (
    <footer className="bg-bgSecondary text-textSecondary">
      <div className="lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 py-20">
        <div className="space-y-6 col-span-2">
          <Link
            href="/"
            className="flex items-center gap-x-2 text-3xl font-semibold text-textPrimary"
          >
            <div className="flex items-center -space-x-3 font-semibold">
              <Image
                src={"/logo.png"}
                alt="logo"
                width={256}
                height={256}
                className="h-10 w-full"
              />
            </div>
            EssDeeJay
          </Link>
          <p className="max-w-lg">
            We are a nimble team of designers and developers based in canada
            that offers the web development services in Shopify, Wordpress and
            Static pages.
          </p>
        </div>

        {footerBlocks.map((footerBlock) => (
          <FooterBlockItem key={footerBlock.id} {...footerBlock} />
        ))}

        <div className="space-y-6 col-span-2">
          <h1 className="text-lg font-semibold text-textPrimary">
            Receive Shopify Tips & Tricks. No spam !
          </h1>
          <form className="w-full max-w-2xl flex flex-col xl:flex-row gap-3">
            <input
              type="email"
              placeholder="hello@gmail.com"
              className="w-full sm:w-max px-5 py-2.5 rounded-full outline-none flex-1 bg-bgOverlay bg-opacity-40 focus:ring-1 focus:ring-textPrimary focus:text-textPrimary"
            />
            <button className="outline-none w-full py-2.5 px-5 sm:w-max bg-brandPrimary text-white rounded-full flex items-center justify-center">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700 dark:text-gray-300">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p> ©2024 The SJ Development Inc. All rights reserved.</p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3">
            <a href="https://www.facebook.com/profile.php?id=100092344295733" aria-label="social link" rel="noreferer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/thesjdevelopment/" aria-label="social link" rel="noreferer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
