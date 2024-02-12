import Hero from "@/app/(app)/ui/components/hero";
import FeaturedBlogs from "./ui/components/FeaturedBlogs";
import LivePreview from "./ui/components/LivePreview";

export default async function Home() {
    
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedBlogs categoryName="Featured" />
    </main>
  );
}
