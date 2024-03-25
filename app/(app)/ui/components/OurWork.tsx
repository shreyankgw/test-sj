import Image from "next/image";
import Link from "next/link";

interface OurWorkProps {
  title: string;
  description: string;
  description2?: string;
  image: string;
  url: string;
}
const projects: OurWorkProps[] = [
  {
    title: "Vraj & Co. - Shopify Website + Store Setups",
    description: "We have successfully onboarded new zealand's authentic spices retailer to the shopify and helped them make their website , shopify store set ups, shopify product inventory management to their full shopify store consulation and set ups. All of these without compromising website performance with their custom design and fonts. Click on the link below to see live preview of how they look.",
    description2: "e have helped them set up their store on social media platforms for better visibility to the customers and have made sure their website is compatible with every device. This helped them to get the most out of their Shopify store.",
    image: "https://dummyimage.com/500x500",
    url: "https://vraj-co.myshopify.com/"
  },
  {
    title: "DYNA - Shopify Migration + Shopify Support",
    description: "DYNA had very old website and they were looking to refresh their look and feel with ecommerce. Just like cherry on top. We recommended Shopify. Their construction company is now offering ecommerce on their site. We developed custom shopify theme with in built features like store locator, custom calculator logics to help them stand out in the market.",
    description2: "e have helped them set up their store on social media platforms for better visibility to the customers and have made sure their website is compatible with every device. This helped them to get the most out of their Shopify store.",
    image: "https://dummyimage.com/500x500",
    url: "https://vraj-co.myshopify.com/"
  },
  {
    title: "Village Juicery - Website Design + Development",
    description: "Village Juicery sells plant based nutrition products, Located in toronto, we worked for village juicery to design their website and customize their shopify theme with some advanced features like shop all products under one page with add to cart and delivery zone detector. We further helped them lower their page speed loads and increase the site performance.",
    description2: "e have helped them set up their store on social media platforms for better visibility to the customers and have made sure their website is compatible with every device. This helped them to get the most out of their Shopify store.",
    image: "https://dummyimage.com/500x500",
    url: "https://vraj-co.myshopify.com/"
  },
  {
    title: "GTA Vapes - Shopify Tasks",
    description: "GTA Vapes is a famous chain of smoking products including cannabis and they were looking to implement custom adult verification popup on their website and also changing the look of their menus. Our team has helped them to integrate this with their current theme and made sure their requirements are satisfied with the follw ups.",
    description2: "e have helped them set up their store on social media platforms for better visibility to the customers and have made sure their website is compatible with every device. This helped them to get the most out of their Shopify store.",
    image: "https://dummyimage.com/500x500",
    url: "https://vraj-co.myshopify.com/"
  },
  {
    title: "SupportiveLiving.ca - Static Website",
    description: "Supportive Living is a website that provides support to ontario community by helping them maintaining their permanent housing. They were looking to build the website and reached out with the design. We have implemented their design in a static website and made sure their design is fully responsive and works across all major devices.",
    description2: "e have helped them set up their store on social media platforms for better visibility to the customers and have made sure their website is compatible with every device. This helped them to get the most out of their Shopify store.",
    image: "https://dummyimage.com/500x500",
    url: "https://vraj-co.myshopify.com/"
  }
]
export default function OurWork() {
  return (
    <div>
      <div className="container mx-auto px-4">

        {projects.map((project, index) => (
           <article key={index} className="mx-auto my-10 flex max-w-7xl xl:max-w-screen-2xl flex-col rounded-2xl bg-gray-50 p-4 md:p-6 lg:p-8 lg:flex-row lg:items-center hover:shadow-lg transition-all duration-300">
                <div className={`shrink-0  max-w-full lg:max-w-md xl:max-w-lg ${index % 2 === 0 ? "order-first lg:mr-8" : "lg:ml-8 lg:order-last" } flex items-center justify-center`}>
            <Image
              className="rounded-2xl"
              src={project.image}
              alt="article image"
              width={500}
              height={500}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </div>
          <div className="py-4 sm:py-8">
            <Link
              href={project.url}
              className="mb-6 block text-3xl font-medium text-textPrimary"
            >
             {project.title}
            </Link>
            <p className="mb-6 text-textSecondary">
              {project.description}
            </p>
            <p className="mb-6 text-textSecondary">
             {project.description2}
            </p>
            <div className="flex items-center">
              <Link
                href={project.url}
                className="text-brandPrimary outline-none w-full py-2.5 px-5 sm:w-max rounded-full flex items-center justify-center border border-brandPrimary hover:bg-brandPrimary hover:text-white"
              >
                View Website
                <svg
                  fill="currentColor"
                  width="52"
                  height="52"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  className="ml-2 w-5 h-5 hover:text-white"
                >
                  <g>
                    <path
                      d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
           </article>
        ))}
      </div>
    </div>
  );
}
