import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Plus Checkout Customization | The SJ Development",
  metadataBase: new URL("https://thesjdevelopment.com/pages/shopify-checkout-customization"),
  description:
    "",
  openGraph: {
    title: "Shopify Plus Checkout Customization | The SJ Development",
    url: "https://thesjdevelopment.com/pages/shopify-checkout-customization",
    description:
      "",
    images:
      "",
  },
};
export default async function Home() {
    
    return (
      <main className="flex flex-col min-h-screen">
         This is Shopify Checkout Customization Route.
      </main>
    );
  }
  