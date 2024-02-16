import { Metadata } from "next";
import PageHeading from "../ui/components/common/PageHeading";

export const metadata: Metadata = {
  title: "Blog | The SJ Development - Shopify Expert Developers",
  metadataBase: new URL("https://www.thesjdevelopment.com/blog"),
  description:
    "Read latest articles related to shopify and shopify plus store development and optimization.",
  openGraph: {
    title: "Blog | The SJ Development - Shopify Expert Developers",
    url: "https://www.thesjdevelopment.com/blog",
    description:
      "Read latest articles related to shopify and shopify plus store development and optimization.",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692636087/victoreke/blog.png",
  },
};

export default async function Posts() {
  return (
    <main className="flex flex-col min-h-screen lg:max-w-7xl xl:max-w-screen-2xl mx-auto">
      <PageHeading
        title="Blog"
        description="Read latest articles related to shopify and shopify plus store development and optimization."
      />
    </main>
  );
}