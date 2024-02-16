import Hero from "@/app/(app)/ui/components/hero";
import FeaturedBlogs from "./ui/components/FeaturedBlogs";
import { Slide } from "./ui/animation/Slide";

export default async function Home() {
    
  return (
    <main className="flex flex-col min-h-screen">
      <Slide>
         <Hero />
      </Slide>
      <Slide delay={0.1}>
        <FeaturedBlogs categoryName="Featured" />
      </Slide>     
    </main>
  );
}
