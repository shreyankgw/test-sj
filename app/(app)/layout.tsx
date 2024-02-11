import type { Metadata } from "next";
import {  lexend } from "@/app/(app)/ui/fonts";
import "@/app/(app)/ui/globals.css";
import  Header  from "@/app/(app)/ui/components/header";
import  Footer  from "@/app/(app)/ui/components/footer";
import Banner from "@/app/(app)/ui/components/banner";

export const metadata: Metadata = {
  title: "Shopify Expert Developers | The SJ Development",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialised`}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Banner/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}