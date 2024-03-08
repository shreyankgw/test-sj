import type { Metadata } from "next";
import {  lexend } from "@/app/(app)/ui/fonts";
import "@/app/(app)/ui/globals.css";
import  NewHeader  from "@/app/(app)/ui/components/common/new-header";
import  FooterBlock  from "@/app/(app)/ui/components/common/footer";
import Banner from "@/app/(app)/ui/components/common/banner";
import Script from "next/script";
import LiveChat from "./ui/components/common/LiveChat";


const options = {
  title: "Shopify Expert Developers | The SJ Development",
  description:
    "",
  url: "https://www.thesjdevelopment.com",
  ogImage:
    "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "thesjdevelopment.com",
    locale: "en-US",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    "google-site-verification": ""
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.className} antialised`}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Banner/>
        <NewHeader />
        {children}
        <FooterBlock />
        <LiveChat />
      </body>
      <Script
        async
        src="https://us.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ""}
      />
    </html>
  );
}
