import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Pricing | The SJ Development",
  metadataBase: new URL("https://thesjdevelopment.com/pages/pricing"),
  description:
    "",
  openGraph: {
    title: "Shopify Development Pricing | The SJ Development",
    url: "https://thesjdevelopment.com/pages/pricing",
    description:
      "",
    images:
      "",
  },
};
export default async function Home() {
    
    return (
      <main className="flex flex-col min-h-screen">
         This is pRICING Route.
      </main>
    );
  }
  