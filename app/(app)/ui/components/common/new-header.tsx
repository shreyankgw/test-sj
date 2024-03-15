"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";

const products = [
  {
    name: "Shopify Theme Development",
    description: "Build Themes that will convert",
    href: "/pages/shopify-theme-development",
    icon: "/images/icons/shopify_theme.svg",
  },
  {
    name: "Shopify Store Setup",
    description: "A to Z Setups Including Integrations with third-party tools",
    href: "/pages/shopify-store-setup",
    icon: '/images/icons/shopify_store.svg'
  },
  {
    name: "Shopify Checkout Customization",
    description: "Unlock new checkout features with checkout extensibility",
    href: "/pages/shopify-checkout-customization",
    icon: '/images/icons/shopify_checkout.svg'
  },
  {
    name: "Headless Shopify Development",
    description: "Blazing Fast Storefront with Fastest Technology",
    href: "/pages/headless-shopify-development",
    icon: '/images/icons/shopify_headless.svg'
  },
  {
    name: "Custom Shopify Apps",
    description: "Tailored Apps specific to your needs",
    href: "/pages/custom-shopify-apps",
    icon: '/images/icons/shopify_custom.svg'
  },
  {
    name: "Performance Optimization / Accessibility",
    description: "Rank Higher with Performance, SEO and Accessibility",
    href: "/pages/performance-optimization",
    icon: '/images/icons/shopify_performance.svg'
  },
];
const callsToAction = [
  { name: "Our Process", href: "/pages/our-process" },
  { name: "Get Free Consultation", href: "/pages/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NewHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > scrollY || window.scrollY < 100) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header className={`${isSticky ? "fixed top-0 inset-0" : "relative"} z-50  w-full border-b border-b-gray-100 bg-bgPrimary bg-opacity-80 backdrop-filter backdrop-blur-xl h-20`}>
      <nav
        className="mx-auto flex lg:max-w-7xl xl:max-w-screen-2xl items-center justify-between p-6 lg:px-8 w-full h-full"
        aria-label="Global"
      >
        <div className="flex min-w-max items-center lg:flex-1">
          <Link
            href="/"
            className="flex items-center gap-x-2 text-3xl font-semibold text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-center -space-x-1 font-bold">
              <span className="sr-only">The SJ Development Logo</span>
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
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex flex-col aspect-square items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM3.75 6.75H20.25C20.4489 6.75 20.6397 6.67098 20.7803 6.53033C20.921 6.38968 21 6.19891 21 6C21 5.80109 20.921 5.61032 20.7803 5.46967C20.6397 5.32902 20.4489 5.25 20.25 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6C3 6.19891 3.07902 6.38968 3.21967 6.53033C3.36032 6.67098 3.55109 6.75 3.75 6.75ZM20.25 17.25H3.75C3.55109 17.25 3.36032 17.329 3.21967 17.4697C3.07902 17.6103 3 17.8011 3 18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18C21 17.8011 20.921 17.6103 20.7803 17.4697C20.6397 17.329 20.4489 17.25 20.25 17.25Z"
                fill="#1A212B"
              />
            </svg>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 text-lg">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-lg leading-6 text-textPrimary font-semibold">
              Services
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-4 h-4 ml-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0306 9.53062L12.5306 17.0306C12.461 17.1004 12.3782 17.1557 12.2872 17.1934C12.1961 17.2312 12.0986 17.2506 12 17.2506C11.9014 17.2506 11.8038 17.2312 11.7128 17.1934C11.6217 17.1557 11.539 17.1004 11.4694 17.0306L3.96936 9.53062C3.82863 9.38989 3.74957 9.19902 3.74957 9C3.74957 8.80097 3.82863 8.6101 3.96936 8.46937C4.1101 8.32864 4.30097 8.24958 4.49999 8.24958C4.69901 8.24958 4.88988 8.32864 5.03061 8.46937L12 15.4397L18.9694 8.46937C19.039 8.39969 19.1218 8.34441 19.2128 8.3067C19.3039 8.26899 19.4014 8.24958 19.5 8.24958C19.5985 8.24958 19.6961 8.26899 19.7872 8.3067C19.8782 8.34441 19.9609 8.39969 20.0306 8.46937C20.1003 8.53905 20.1556 8.62178 20.1933 8.71283C20.231 8.80387 20.2504 8.90145 20.2504 9C20.2504 9.09854 20.231 9.19612 20.1933 9.28717C20.1556 9.37821 20.1003 9.46094 20.0306 9.53062Z"
                  fill="#1A212B"
                />
              </svg>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 -translate-x-1/2 z-10 mt-6 w-screen max-w-md xl:max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="p-4 grid grid-cols-1 xl:grid-cols-2 gap-2">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                       <Image
                          src={item.icon ? item.icon : ""}
                          className="h-6 w-6"
                          alt={item.name}
                          width={64}
                          height={64}
                        />
                        <span className="sr-only">{item.name}</span>
                      </div>
                      <div className="flex-auto">
                        <Popover.Button
                          as={Link}
                          href={item.href}
                          className="block text-textPrimary font-semibold"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Popover.Button>
                        <p className="mt-1 text-textSecondary">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Popover.Button
                      as={Link}
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </Popover.Button>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="/pages/our-work" className="text-lg leading-6 text-textPrimary font-semibold">
            Work
          </Link>
          <Link href="/pages/about-us" className="text-lg leading-6 text-textPrimary font-semibold">
            About
          </Link>
          <Link href="/posts" className="text-lg leading-6 text-textPrimary font-semibold">
            Blogs
          </Link>
          <Link href="/pages/contact" className="text-lg leading-6 text-textPrimary font-semibold">
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ButtonPrimary title="Get Started" url="/" />
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu open state. Below add the transition and some framer motion magic for animated mobile menu */}
 
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-[60]" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-x-2 text-3xl font-semibold text-gray-700 dark:text-gray-300"
            >
              <div className="flex items-center -space-x-1 font-bold">
                <span className="sr-only">The SJ Development Logo</span>
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
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2806 18.2194C19.3503 18.2891 19.4056 18.3718 19.4433 18.4628C19.481 18.5539 19.5004 18.6515 19.5004 18.75C19.5004 18.8486 19.481 18.9461 19.4433 19.0372C19.4056 19.1282 19.3503 19.2109 19.2806 19.2806C19.2109 19.3503 19.1282 19.4056 19.0372 19.4433C18.9461 19.481 18.8485 19.5004 18.75 19.5004C18.6514 19.5004 18.5539 19.481 18.4628 19.4433C18.3718 19.4056 18.289 19.3503 18.2194 19.2806L12 13.0603L5.78061 19.2806C5.63988 19.4214 5.44901 19.5004 5.24999 19.5004C5.05097 19.5004 4.8601 19.4214 4.71936 19.2806C4.57863 19.1399 4.49957 18.949 4.49957 18.75C4.49957 18.551 4.57863 18.3601 4.71936 18.2194L10.9397 12L4.71936 5.78063C4.57863 5.6399 4.49957 5.44903 4.49957 5.25C4.49957 5.05098 4.57863 4.86011 4.71936 4.71938C4.8601 4.57865 5.05097 4.49959 5.24999 4.49959C5.44901 4.49959 5.63988 4.57865 5.78061 4.71938L12 10.9397L18.2194 4.71938C18.3601 4.57865 18.551 4.49959 18.75 4.49959C18.949 4.49959 19.1399 4.57865 19.2806 4.71938C19.4213 4.86011 19.5004 5.05098 19.5004 5.25C19.5004 5.44903 19.4213 5.6399 19.2806 5.78063L13.0603 12L19.2806 18.2194Z" fill="#1A212B" />
              </svg>

            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-textprimary hover:bg-gray-50">
                        Services
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="w-4 h-4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.0306 9.53062L12.5306 17.0306C12.461 17.1004 12.3782 17.1557 12.2872 17.1934C12.1961 17.2312 12.0986 17.2506 12 17.2506C11.9014 17.2506 11.8038 17.2312 11.7128 17.1934C11.6217 17.1557 11.539 17.1004 11.4694 17.0306L3.96936 9.53062C3.82863 9.38989 3.74957 9.19902 3.74957 9C3.74957 8.80097 3.82863 8.6101 3.96936 8.46937C4.1101 8.32864 4.30097 8.24958 4.49999 8.24958C4.69901 8.24958 4.88988 8.32864 5.03061 8.46937L12 15.4397L18.9694 8.46937C19.039 8.39969 19.1218 8.34441 19.2128 8.3067C19.3039 8.26899 19.4014 8.24958 19.5 8.24958C19.5985 8.24958 19.6961 8.26899 19.7872 8.3067C19.8782 8.34441 19.9609 8.39969 20.0306 8.46937C20.1003 8.53905 20.1556 8.62178 20.1933 8.71283C20.231 8.80387 20.2504 8.90145 20.2504 9C20.2504 9.09854 20.231 9.19612 20.1933 9.28717C20.1556 9.37821 20.1003 9.46094 20.0306 9.53062Z"
                            fill="#1A212B"
                          />
                        </svg>

                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as={Link}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-textprimary hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/pages/our-work"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-textprimary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </Link>
                <Link
                  href="/pages/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-textprimary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/posts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-textprimary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  href="/pages/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-textprimary hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6" onClick={() => setMobileMenuOpen(false)}>
                <ButtonPrimary title="Get Started" url="/pages/contact" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      
    </header>
  );
}
