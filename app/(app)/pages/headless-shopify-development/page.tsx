import { Metadata } from "next";
import Slider from "../../ui/components/slider";
import { Slide } from "../../ui/animation/Slide";

export const metadata: Metadata = {
  title: "Shopify Headless Development | The SJ Development",
  metadataBase: new URL("https://thesjdevelopment.com/pages/headless-shopify-development"),
  description:
    "",
  openGraph: {
    title: "Shopify Headless Development | The SJ Development",
    url: "https://thesjdevelopment.com/pages/headless-shopify-development",
    description:
      "",
    images:
      "",
  },
};

export default async function Home() {
    
    return (
      <main className="flex flex-col min-h-screen">
        <Slider />
      </main>
    );
  }
  