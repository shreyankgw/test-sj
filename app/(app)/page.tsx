import Hero from "@/app/(app)/ui/components/hero";
import FeaturedBlogs from "./ui/components/FeaturedBlogs";
import { Slide } from "./ui/animation/Slide";
import { InfiniteMovingCards } from "./ui/components/infinite-moving-cards";
import  Slider  from "./ui/components/slider";
import TrustedBy from "./ui/components/TrustedBy";
import MainFeatures from "./ui/components/MainFeatures";
import GetInTouch from "./ui/components/common/GetInTouch";
import HomepageFeatures from "./ui/components/HomepageFeatures";
import BackgroundVideoWithText from "./ui/components/common/BackgroundVideo";

export default async function Home() {
    
  return (
    <main className="flex flex-col min-h-screen">    
        <BackgroundVideoWithText videoSources={{ small: "/video/small_video.mp4", large: "/video/homepage_video.mp4" }} posters={{ small: "/video/thumbnails/hero_desktop.png", large: "/video/thumbnails/hero_mobile.png" }} videoDescription="Shopify Mastery Fueled By Passion" /> 
      <Slide delay={0.07}>
        <TrustedBy />
      </Slide>
      <Slide delay={0.14}>
        <MainFeatures />
      </Slide>
      <Slide delay={0.21}>
        <HomepageFeatures />
      </Slide>
      <Slide delay={0.28}>
        <InfiniteMovingCards direction="right" speed="slow" pauseOnHover={true} className="xl:max-w-screen-2xl w-full mx-auto my-10" />
      </Slide>
      <Slide delay={0.35}>
        <FeaturedBlogs categoryName="Featured" />
      </Slide>
      <Slide delay={0.42}>
        <GetInTouch />
      </Slide>
    </main>
  );
}
