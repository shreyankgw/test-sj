import Hero from "@/app/(app)/ui/components/hero";
import FeaturedBlogs from "./ui/components/FeaturedBlogs";
import { Slide } from "./ui/animation/Slide";
import { InfiniteMovingCards } from "./ui/components/infinite-moving-cards";
import  Slider  from "./ui/components/slider";

export default async function Home() {
    
  return (
    <main className="flex flex-col min-h-screen">
      <Slide>
         <Hero />
      </Slide>
      <Slide delay={0.1}>
        <FeaturedBlogs categoryName="Featured" />
      </Slide>
      <Slide delay={0.2}>
        <InfiniteMovingCards direction="right" speed="slow" pauseOnHover={true} className="xl:max-w-screen-2xl w-full mx-auto my-10" />
      </Slide>
      <Slide delay={0.3}>
        <Slider />
      </Slide>
    </main>
  );
}
