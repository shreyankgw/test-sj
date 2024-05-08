import Link from "next/link";
import { Slide } from "../../ui/animation/Slide";
import Image from "next/image";
import PageHeading from "../../ui/components/common/PageHeading";
import FeaturedBlogs from "../../ui/components/FeaturedBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shopify Speed Optimization | The SJ Development",
    metadataBase: new URL("https://thesjdevelopment.com/pages/performance-optimization"),
    description:
      "",
    openGraph: {
      title: "Shopify Speed Optimization | The SJ Development",
      url: "https://thesjdevelopment.com/pages/performance-optimization",
      description:
        "",
      images:
        "",
    },
};

export default async function Home() {   
    return (
      <main className="flex flex-col min-h-screen">
         <Slide>
         <section>
            <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 pt-28 gap-12 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-md text-textInformative font-medium">
                        Shopify Performance Optimization 🚀
                    </h1>
                    <h2 className="text-3xl/snug font-bold text-textPrimary sm:text-4xl/tight lg:text-6xl/tight mx-auto">
                        Optimize faster with  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandSecondary">Speed & User Experience</span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-textSecondary max-w-3xl mx-auto">
                      Online shopping is experiencing remarkable growth. It's estimated that by 2025, the United States only will have 400 million online shoppers. Moreover, global e-commerce sales are projected to reach $15 trillion in revenue in 2024.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <Link href="/pages/contact" className="block py-4 px-6 text-white font-bold bg-brandPrimary duration-150 hover:bg-brandSecondary active:bg-brandPrimary rounded-full shadow-lg hover:shadow-none">
                            Get Started
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src="/images/speed_optimization.png" className="w-full" alt="Shopify store in browser screenshot" width={1280} height={960} />
                </div>
            </div>
        </section>
         </Slide>

         <Slide delay={0.07}>
            <PageHeading title="What makes Shopify Speed Optimization so Important ?">
                <p className="text-lg text-textSecondary leading-relaxed max-w-7xl">
                 Optimizing the speed of a Shopify store is essential for improving user experience and search engine ranking. Slow-loading websites can drive potential customers away, particularly on mobile devices where users expect quick interactions. 
                 To determine how well your Shopify store is performing, it's useful to reference Shopify’s Online Store Speed report which compares your site's speed against other similar stores using metrics like Google Lighthouse performance scores.
                </p>
                <p className="text-lg text-textSecondary leading-relaxed max-w-7xl my-6 w-full flex items-start">
                  A good starting point for Shopify speed optimization includes several strategies:
                </p>
                <ul className="list-inside list-decimal text-lg text-textSecondary leading-relaxed max-w-7xl">
                    <li className="my-2"><strong>Image Optimization:</strong> Since images can significantly impact page load times, compressing them without sacrificing quality is crucial. Using Shopify apps that optimize images can help reduce their file sizes, maintaining visual quality while improving load times.</li>
                    <li className="my-2"><strong>Theme Selection and Customization:</strong> Choosing the right Shopify theme is pivotal as some themes, especially those with heavy features and animations, can slow down your site. It’s advisable to check the theme’s speed using tools like Google Page Speed Insights before applying it to your store​.</li>
                    <li className="my-2"><strong>Mobile Optimization:</strong> Considering the significant percentage of users shopping on mobile devices, ensuring your Shopify store performs well on these devices is vital. Techniques like using Accelerated Mobile Pages (AMP) can enhance mobile load times​.</li>
                </ul>
                <p className="text-lg text-textSecondary leading-relaxed max-w-7xl">
                Furthermore, leveraging Shopify's built-in advantages, such as its optimized server response times and lightweight theme designs, can also contribute to faster site performance. However, if your store is heavily customized or uses numerous apps, these factors can slow down your site. 
                In such cases, conducting a detailed performance audit or consulting with a Shopify speed optimization expert might be necessary to identify and mitigate specific issues
                </p>
                <p className="text-lg text-textSecondary leading-relaxed max-w-7xl w-full flex items-start my-4">
                  These steps not only enhance the user experience but also improve your site's SEO, potentially leading to increased traffic and sales.We have summarized the benefits of improving the performance of your shopify store in this article.
                </p>
            </PageHeading>

             
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto pb-24">
                <div className="bg-bgPositive p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-bold text-textPositive mb-4">
                    Results of Speed Optimization
                  </h2>
                  <ul className="list-none list-inside">
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Google/Search Engine Raking Improvement
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>
                        SEO Improvement
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Enhanced User Experience
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Increase in Conversion/Sales
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Mobile Load times improvement
                    </li>
                  </ul>
                </div>

                <div className="bg-bgNegative p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-bold text-textNegative mb-4">
                    Not Optimized Site
                  </h2>
                  <ul className="list-none list-inside">
                    <li className="py-1">
                      <span className="text-textNegative mr-2">✗</span>Slow Loading Times
                    </li>
                    <li className="py-1">
                      <span className="text-textNegative mr-2">✗</span>
                        High Abandoned Checkouts
                    </li>
                    <li className="py-1">
                      <span className="text-textNegative mr-2">✗</span>
                        Decrease in Sales
                    </li>
                    <li className="py-1">
                      <span className="text-textNegative mr-2">✗</span>
                        More Error Prone on slpw connections
                    </li>
                    <li className="py-1">
                      <span className="text-textNegative mr-2">✗</span>
                        Low Search Engine Ranking
                    </li>
                  </ul>
                </div>
              </div>
         </Slide>

         <Slide delay={0.14}>
             <FeaturedBlogs categoryName="Featured" />
         </Slide>
      </main>
    );
  }
  