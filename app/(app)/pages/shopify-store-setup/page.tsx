import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Store Setup | The SJ Development",
  metadataBase: new URL("https://thesjdevelopment.com/pages/shopify-store-setup"),
  description:
    "",
  openGraph: {
    title: "Shopify Store Setup | The SJ Development",
    url: "https://thesjdevelopment.com/pages/shopify-store-setup",
    description:
      "",
    images:
      "",
  },
};
export default async function Home() {
    
    return (
      <main className="flex flex-col min-h-screen">
         This is Shopify Store Setup Route.
      </main>
    );
  }
  