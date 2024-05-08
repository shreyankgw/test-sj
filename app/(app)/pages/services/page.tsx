import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Services | The SJ Development",
  metadataBase: new URL("https://thesjdevelopment.com/pages/services"),
  description:
    "",
  openGraph: {
    title: "Shopify Custom App Development | The SJ Development",
    url: "https://thesjdevelopment.com/pages/services",
    description:
      "",
    images:
      "",
  },
};
export default async function Home() {
    
    return (
      <main className="flex flex-col min-h-screen">
         This is sERVICES Route.
      </main>
    );
  }
  