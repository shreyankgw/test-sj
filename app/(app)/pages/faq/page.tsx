import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify FAQ's | The SJ Development",
  metadataBase: new URL("https://thesjdevelopment.com/pages/faq"),
  description:
    "",
  openGraph: {
    title: "Shopify FAQ's | The SJ Development",
    url: "https://thesjdevelopment.com/pages/faq",
    description:
      "",
    images:
      "",
  },
};

export default async function Home() {
    
    return (
      <main className="flex flex-col min-h-screen">
         This is FAQ Route.
      </main>
    );
  }
  