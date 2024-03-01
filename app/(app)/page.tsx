import Hero from "@/app/(app)/ui/components/hero";
import FeaturedBlogs from "./ui/components/FeaturedBlogs";
import { Slide } from "./ui/animation/Slide";
import { InfiniteMovingCards } from "./ui/components/infinite-moving-cards";
import  Slider  from "./ui/components/slider";

const cardItems = [
  {
    quote: "We have worked with them in the past and we are continuing as they are doing the Fabulous Job that makes us satisfied. They are time managing, understands the priorities and replies very quickly to your question. I will recommend them on any of your website projects.",
    name: "Mark Calvert",
    title: "Owner at supportiveLiving.ca",
  },
  {
    quote: "They did a very good job on our Shopify Store to make it look more lively and that helped us bring good sale and our conversion went way above then the before. Also, need to mention, their work on site speed was flawless as they eliminated the bugs that was crashing our site.",
    name: "Karmen Salim",
    title: "Manager at Village Juicery",
  },
  {
    quote: "They are quick and reliable as they work on their timelines and deliver the best of your project. We feel like we have our own the employees working with us on the project. They gave good ideas and their research is also excellent.",
    name: "Daniel Eidan",
    title: "Manager at GTA Vapes",
  },
  {
    quote: "We have worked with them in the past and we are continuing as they are doing the Fabulous Job that makes us satisfied. They are time managing, understands the priorities and replies very quickly to your question. I will recommend them on any of your website projects.",
    name: "Another Review",
    title: "Owner at supportiveLiving.ca",
  },
]



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
        <InfiniteMovingCards direction="right" speed="slow" pauseOnHover={true} className="xl:max-w-screen-2xl w-full mx-auto my-10" items={cardItems} />
      </Slide>
      <Slide delay={0.3}>
        <Slider />
      </Slide>
    </main>
  );
}
