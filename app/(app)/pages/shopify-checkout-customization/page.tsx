import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Plus Checkout Customization | The SJ Development",
  metadataBase: new URL(
    "https://thesjdevelopment.com/pages/shopify-checkout-customization"
  ),
  description: "",
  openGraph: {
    title: "Shopify Plus Checkout Customization | The SJ Development",
    url: "https://thesjdevelopment.com/pages/shopify-checkout-customization",
    description: "",
    images: "",
  },
};
export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative pt-32 lg:pt-36">
        <div className="mx-auto lg:max-w-7xl xl:max-w-screen-2xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-brandTertiary blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
          </div>

          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
   font-bold text-textPrimary"
            >
              Convert More With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brandPrimary from-25%  via-brandSecondary via-60% to-brandTeritary inline-block">
                Checkout
              </span>
              <br /> using checkout extensibility.
            </h1>
            <p className="mt-8 text-textSecondary text-base md:text-xl">
              Elevate your shopify plus checkout process with our comprehensive checkout
              extensibility experts. Customize every
              aspect of your information, shipping, and payment pages for a
              seamless user experience.Shopify Checkout is easier than ever to customize 
              with checkout extensibility.
            </p>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="/images/shopify-plus-checkout-customization.png"
              alt="Hero image"
              width={1236}
              height={927}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
