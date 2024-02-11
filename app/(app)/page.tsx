import Hero from "@/app/(app)/ui/components/hero";
import FeaturedBlogs from "./ui/components/FeaturedBlogs";

export default async function Home() {
    
  return (
    <main className="flex flex-col min-h-screen text-brandPrimary">
      <Hero />
      <FeaturedBlogs />
    </main>
  );
}
