import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "../../ui/animation/Slide";
import GetInTouch from "../../ui/components/common/GetInTouch";
import FeaturedBlogs from "../../ui/components/FeaturedBlogs";

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
              Elevate your shopify plus checkout process with our comprehensive
              checkout extensibility experts. Customize every aspect of your
              information, shipping, and payment pages for a seamless user
              experience.Shopify Checkout is easier than ever to customize with
              checkout extensibility.
            </p>

            <Link
              className="mt-8 block inline-flex items-center px-4 h-12 border border-transparent shadow-sm text-base font-semibold rounded-full text-white bg-brandPrimary hover:bg-brandSecondary"
              href="/pages/contact"
            >
              Upgrade Now
            </Link>
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

    <Slide>
      <section>
        <div className="max-w-[85rem] xl:max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24 mx-auto flex flex-col">
          <div className="aspect-w-16 aspect-h-7 order-2 lg:order-1 mt-8 lg:mt-0">
            <Image
              className="w-full object-cover rounded-xl"
              src="/images/checkout-extensibility.png"
              alt="Shopify Checkout Extensibility"
              loading="lazy"
              width={1999}
              height={1244}
              placeholder="blur"
              blurDataURL="/images/checkout-extensibility.png"
            />
          </div>
          {/* Grid */}
          <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12 order-1 lg:order-2">
            <div className="lg:col-span-1">
              <h2 className="font-bold text-2xl md:text-3xl text-textPrimary">
                What is Checkout Extensibility &amp; how does it work ?
              </h2>
              <p className="mt-2 md:mt-4 text-textSecondary">
                Checkout extensibility is a powerful feature that allows you to
                customize your checkout experience. It allows you to add new
                features and features to your checkout process, such as adding
                new payment options, shipping options, and more. If you have
                already updated your checkout process, checkout extensibility
                can help you streamline your checkout process.
              </p>
            </div>
            {/* End Col */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-brandPrimary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width={18} height={10} x={3} y={11} rx={2} />
                    <circle cx={12} cy={5} r={2} />
                    <path d="M12 7v4" />
                    <line x1={8} x2={8} y1={16} y2={16} />
                    <line x1={16} x2={16} y1={16} y2={16} />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-textPrimary">
                      Creative Design
                    </h3>
                    <p className="mt-1 text-textSecondary">
                      Enhance Design Experience with custom branding and custom
                      UI components along with your own web pixels using the new
                      checkout extensibility. With this new update, it offers
                      the best checkout experience across the entire buying
                      journey.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-brandPrimary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-textPrimary">
                      Easy to Customize
                    </h3>
                    <p className="mt-1 text-textSecondary">
                      With number of built by shopify solutions available, you
                      will need zero coding knowledge to add simple features to
                      your high converting checkout. Whether you need to edit
                      your branding or just looking to{" "}
                      <address>
                        extra blocks, it is easier to customize with checkout
                        extensibility.
                      </address>
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-brandPrimary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-textPrimary">
                      14 Brand New Shopify API's
                    </h3>
                    <p className="mt-1 text-textSecondary">
                      With the new API's like cart and checkout validation, you
                      can create your own checkout validation rules or with the
                      help of custom fields UI extensions, you can grab extra
                      information from customers at checkout very easily.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
                {/* Icon Block */}
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 size-6 text-brandPrimary"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-textPrimary">
                      Convert More Visitors to Buyers
                    </h3>
                    <p className="mt-1 text-textSecondary">
                      With enhanced checkout customization, supercharge your
                      checkout and increase your conversion rate. New One Page
                      checkout makes checkout process easier and your checkout
                      will feel more aligned with your brand, so you can convert
                      more visitors to buyers.
                    </p>
                  </div>
                </div>
                {/* End Icon Block */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </section>
      </Slide>

      <Slide delay={0.07}>
      <section>
        <div className="bg-neutral-900">
          {/* Approach */}
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            {/* Title */}
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                Our Approach to Supercharge Your Checkout
              </h2>
              <p className="mt-1 text-neutral-400">
                We help you end to end to upgrade your checkout with your existing customizations
                along with the custom analytics pixels you may have in the checkout. Outlined are the steps we take
                to onboard you to the new checkout.
              </p>
            </div>
            {/* End Title */}
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <Image
                  className="w-full object-cover rounded-xl"
                  src="/images/checkout-deadline.png"
                  alt="Checkout Extensibility Deadline"
                  width={998}
                  height={636}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/checkout-deadline.png"
                />
              </div>
              {/* End Col */}
              {/* Timeline */}
              <div>
                {/* Heading */}
                <div className="mb-4">
                  <h3 className="text-white text-xs font-medium uppercase">
                    Steps
                  </h3>
                </div>
                {/* End Heading */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-brandPrimary">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-brandPrimary text-white font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white mr-2">
                        Understanding your business:
                      </span>
                      Identify your target audience and understand their needs,
                      preferences, and behaviors along with your business processes and systems.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-brandPrimary">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-brandPrimary text-white font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white mr-2">
                        Development plan:
                      </span>
                       Review the changes needed and plan on how to support this in 
                       a better way on new checkout.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-brandPrimary">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-brandPrimary text-white font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white mr-2">
                        Development and Testing:
                      </span>
                      We will develop the custom solutions including migrating your custom pixels. Our Experts
                      will test and validate the changes as per requirements.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="flex gap-x-5 ms-1">
                  {/* Icon */}
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-brandPrimary">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex flex-shrink-0 justify-center items-center size-8 border border-brandPrimary text-white font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>
                  {/* End Icon */}
                  {/* Right Content */}
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span className="text-white mr-2">
                        Launch and Optimization:
                      </span>
                      Launch your newly customized checkout to the market,
                      closely monitoring their performance and fix any issues if encountered.
                    </p>
                  </div>
                  {/* End Right Content */}
                </div>
                {/* End Item */}
                <Link
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-brandPrimary font-medium text-sm text-white rounded-full focus:outline-none"
                  href="/pages/contact"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                      d="M14.05 2a9 9 0 0 1 8 7.94"
                    />
                    <path
                      className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                      d="M14.05 6A5 5 0 0 1 18 10"
                    />
                  </svg>
                  Schedule a call
                </Link>
              </div>
              {/* End Timeline */}
            </div>
            {/* End Grid */}
          </div>
        </div>
      </section>
      </Slide>

      <Slide delay={0.14}>
         <FeaturedBlogs categoryName="Featured" />
      </Slide>

      <Slide delay={0.21}>
        <GetInTouch />
      </Slide>
    </main>
  );
}
