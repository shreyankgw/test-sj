import Link from "next/link";
import { Slide } from "../../ui/animation/Slide";
import Image from "next/image";

export default async function Home() {   
    return (
      <main className="flex flex-col min-h-screen">
         <Slide>
         <section>
            <div className=" max-w-7xl xl:max-w-screen-2xl mx-auto px-4 py-28 gap-12 md:px-8">
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
                <div className="mt-14">
                    <Image src="https://dummyimage.com/1280x784.png" className="w-full shadow-lg rounded-lg border" alt="Shopify store in browser screenshot" width={1280} height={784} />
                </div>
            </div>
        </section>
         </Slide>
      </main>
    );
  }
  