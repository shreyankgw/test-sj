import { Slide } from "../../ui/animation/Slide";
import { HeroProjects } from "../../ui/components/HeroParallax";
import PageHeading from "../../ui/components/common/PageHeading";
import OurWork from "../../ui/components/OurWork";
import GetInTouch from "../../ui/components/common/GetInTouch";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Slide>
        <HeroProjects />
      </Slide>
      <Slide delay={0.1}>
        <PageHeading
          title="Discover Our Latest Projects"
          description="Welcome to The SJ Development, where creativity and functionality redefine digital excellence. Our portfolio showcases our commitment to enhancing online presence through breathtaking designs and groundbreaking solutions. Explore the digital transformation we deliver to our esteemed clients."
        />
      </Slide>
      <Slide delay={0.2}>
        <OurWork />
      </Slide>
      <Slide delay={0.3}>
        <GetInTouch />
      </Slide>
    </main>
  );
}
