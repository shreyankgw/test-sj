import { Slide } from "../../ui/animation/Slide";
import Link from "next/link";
import PageHeading from "../../ui/components/common/PageHeading";
import GetInTouch from "../../ui/components/common/GetInTouch";

const iconRender = (val: string) => {
  switch (val) {
    case "default-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "problem-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="128"
          height="128"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M13.25 0H2.75C1.23 0 0 1.23 0 2.75v15.5C0 19.77 1.23 21 2.75 21h7.56a7.931 7.931 0 0 1-.81-3.5c0-.87.14-1.72.41-2.5H2.75a.75.75 0 0 1 0-1.5h7.83c.204-.354.444-.683.699-1H9V5.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v5.15c.89-.61 1.9-1.05 3-1.26V2.75C16 1.23 14.77 0 13.25 0zM7 12.5H3V9.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v2.75z" />
          <path d="M17.5 11c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm.53 10.78a.776.776 0 0 1-.53.22.75.75 0 1 1 .53-.22zm.961-4.122c-.277.212-.741.67-.741 1.352v.241a.75.75 0 0 1-1.5 0v-.241c0-.968.484-1.894 1.327-2.542.265-.203.423-.534.423-.884 0-.598-.449-1.083-1-1.083s-1 .486-1 1.083a.75.75 0 1 1-1.5-.001C15 14.159 16.122 13 17.5 13s2.5 1.159 2.5 2.583c0 .814-.377 1.589-1.009 2.075z" />
        </svg>
      );
    case "ownership-ico":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10 10-4.58 10-10S17.421 2 12 2zm0 13c.992 0 1.85-.265 2.293-.708l1.414 1.415C14.581 16.832 12.901 17 12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5c.901 0 2.582.168 3.707 1.293l-1.414 1.414C13.851 9.264 12.993 9 12 9c-1.626 0-3 1.374-3 3s1.374 3 3 3z"></path>
        </svg>
      );
    case "scalability":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="128"
          height="128"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M5.88 11.1a.752.752 0 0 1-.493-1.316l4.24-3.699a.752.752 0 0 1 1.059.072.752.752 0 0 1-.072 1.059l-4.24 3.699a.754.754 0 0 1-.494.185zM14.419 5.14a.75.75 0 0 1-.179-1.478l3.16-.779a.751.751 0 0 1 .359 1.457l-3.159.778a.753.753 0 0 1-.181.022z" />
          <circle cx="4" cy="12" r="3" />
          <circle cx="12" cy="5" r="3" />
          <circle cx="20" cy="3" r="3" />
          <path d="M23 23H1a1 1 0 1 1 0-2h22a1 1 0 1 1 0 2z" />
          <path d="M20 23a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1zM12 23a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1zM4 23a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z" />
        </svg>
      );
    case "support":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <g fillRule="evenodd">
            <path d="M1.916 21.035A5.75 5.75 0 0 1 7.32 17.25h9.36a5.75 5.75 0 0 1 5.404 3.785l.133.367a1.75 1.75 0 0 1-1.645 2.348H3.428a1.75 1.75 0 0 1-1.645-2.348l.134-.367ZM7.32 18.75a4.25 4.25 0 0 0-3.994 2.798l-.133.367a.25.25 0 0 0 .235.335h17.144a.25.25 0 0 0 .235-.335l-.133-.367a4.25 4.25 0 0 0-3.994-2.798H7.32Z" />
            <path d="M10.5 21.25A3.25 3.25 0 0 1 7.25 18h1.5c0 .967.783 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 18h1.5a3.25 3.25 0 0 1-3.25 3.25h-3ZM12 2.25c-3.687 0-6.209 2.743-6.209 6.106 0 .23.012.469.035.712.014.152.033.306.055.46-.324.335-.54.783-.54 1.3 0 .944.69 1.624 1.501 1.877.476 1.027 1.112 2.01 1.895 2.77.876.85 1.979 1.459 3.263 1.459 1.284 0 2.387-.61 3.263-1.46.783-.76 1.419-1.742 1.895-2.77.812-.252 1.501-.932 1.501-1.876 0-.517-.216-.965-.54-1.3.023-.154.041-.308.055-.46a7.63 7.63 0 0 0 .035-.712c0-3.363-2.522-6.106-6.209-6.106ZM9.364 8.065l-1.99 1.306c.016.105.035.212.055.32a.75.75 0 0 1-.343.78c-.188.115-.245.257-.245.357 0 .14.156.43.615.48a.75.75 0 0 1 .608.453c.435 1.026 1.025 1.965 1.718 2.637.69.67 1.438 1.036 2.218 1.036s1.529-.366 2.219-1.036c.692-.672 1.282-1.611 1.717-2.638a.75.75 0 0 1 .608-.452c.459-.05.615-.34.615-.48 0-.1-.057-.241-.245-.357a.75.75 0 0 1-.343-.78c.02-.108.039-.215.055-.32l-1.99-1.306a.765.765 0 0 1-.057-.041 1.25 1.25 0 0 0-.78-.274h-3.597c-.284 0-.56.097-.781.274a.745.745 0 0 1-.057.041Z" />
            <path d="M12 1.75A7.25 7.25 0 0 0 4.75 9v2a.75.75 0 0 1-1.5 0V9a8.75 8.75 0 0 1 17.5 0v2a.75.75 0 0 1-1.5 0V9A7.25 7.25 0 0 0 12 1.75Z" />
            <path d="M3.25 11A2.25 2.25 0 0 1 5.5 8.75H6a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.5A2.25 2.25 0 0 1 3.25 11Zm2-.707a.75.75 0 0 0 0 1.414v-1.414ZM20.66 11a2.25 2.25 0 0 0-2.25-2.25h-.5a.75.75 0 0 0-.75.75v3c0 .414.335.75.75.75h.5A2.25 2.25 0 0 0 20.66 11Zm-2-.707a.75.75 0 0 1 0 1.414v-1.414Z" />
            <path d="M18 11.75a.75.75 0 0 1 .75.75v.5A1.75 1.75 0 0 1 17 14.75h-4.5a.75.75 0 0 1 0-1.5H17a.25.25 0 0 0 .25-.25v-.5a.75.75 0 0 1 .75-.75Z" />
          </g>
        </svg>
      );
    case "customization":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="128"
          height="128"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M9.25 0h-7.5C.785 0 0 .785 0 1.75v4.5C0 7.215.785 8 1.75 8h7.5C10.215 8 11 7.215 11 6.25v-4.5C11 .785 10.215 0 9.25 0zM9.25 10h-7.5C.785 10 0 10.785 0 11.75v10.5C0 23.215.785 24 1.75 24h7.5c.965 0 1.75-.785 1.75-1.75v-10.5c0-.965-.785-1.75-1.75-1.75zM22.25 16h-7.5c-.965 0-1.75.785-1.75 1.75v4.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75v-4.5c0-.965-.785-1.75-1.75-1.75zM22.25 0h-7.5C13.785 0 13 .785 13 1.75v10.5c0 .965.785 1.75 1.75 1.75h7.5c.965 0 1.75-.785 1.75-1.75V1.75C24 .785 23.215 0 22.25 0z" />
        </svg>
      );
    case "performance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <g fillRule="evenodd">
            <path d="M12.631 3.095a.75.75 0 0 0-1.262 0l-1.206 1.877-2.158.567a.75.75 0 0 0-.39 1.2l1.413 1.727-.128 2.227a.75.75 0 0 0 1.021.742l2.079-.81 2.079.81a.75.75 0 0 0 1.02-.742l-.127-2.227 1.413-1.727a.75.75 0 0 0-.39-1.2l-2.158-.567-1.206-1.877ZM6 11.75a.75.75 0 0 1 .631.345l1.206 1.877 2.158.567a.75.75 0 0 1 .39 1.2l-1.413 1.727.128 2.227a.75.75 0 0 1-1.021.742L6 19.625l-2.079.81a.75.75 0 0 1-1.02-.742l.127-2.227-1.413-1.727a.75.75 0 0 1 .39-1.2l2.158-.567 1.206-1.877A.75.75 0 0 1 6 11.75Zm0 2.138-.733 1.14a.75.75 0 0 1-.44.32l-1.311.345.858 1.049a.75.75 0 0 1 .168.518l-.077 1.353 1.263-.492a.75.75 0 0 1 .544 0l1.263.492-.077-1.353a.75.75 0 0 1 .168-.518l.858-1.05-1.31-.343a.75.75 0 0 1-.441-.32L6 13.887ZM18 11.75a.75.75 0 0 1 .631.345l1.206 1.877 2.158.567a.75.75 0 0 1 .39 1.2l-1.413 1.727.128 2.227a.75.75 0 0 1-1.021.742L18 19.625l-2.079.81a.75.75 0 0 1-1.02-.742l.127-2.227-1.413-1.727a.75.75 0 0 1 .39-1.2l2.158-.567 1.206-1.877A.75.75 0 0 1 18 11.75Zm0 2.138-.733 1.14a.75.75 0 0 1-.44.32l-1.311.345.858 1.049a.75.75 0 0 1 .168.518l-.077 1.353 1.263-.492a.75.75 0 0 1 .544 0l1.263.492-.077-1.353a.75.75 0 0 1 .168-.518l.858-1.05-1.31-.343a.75.75 0 0 1-.441-.32L18 13.887Z" />
          </g>
        </svg>
      );
    default:
      return <>No Icon</>;
  }
};

const features = [
  {
    id: 1,
    title: "Problem Solving",
    description:
      "Custom apps are designed to solve your specific problems. Our app developers will collaborate with you to understand and address your main challenges with tailored solutions.",
    icon: "problem-ico",
    color: "bg-sky-600",
  },
  {
    id: 2,
    title: "Sole Ownership",
    description:
      "You have complete ownership. All critical data, source code, and images within the app are exclusively yours.",
    icon: "ownership-ico",
    color: "bg-indigo-600",
  },
  {
    id: 3,
    title: "Scalability",
    description:
      "Unlike ready-made apps, which may eventually become inadequate, custom apps can evolve with your business needs. Our Developers can easily add new features or integrations as your requirements grow.",
    icon: "scalability",
    color: "bg-orange-600",
  },
  {
    id: 4,
    title: "Priority Support",
    description:
      "Our Developers prioritize their custom app clients, so any issues or requests for modifications are handled promptly and efficiently.",
    icon: "support",
    color: "bg-rose-600",
  },
  {
    id: 5,
    title: "Customization",
    description:
      "Every aspect, from design to functionality, can be tailored to meet your business needs, and adjustments can be made to include new features or alter the user interface.",
    icon: "customization",
    color: "bg-emerald-600",
  },
  {
    id: 6,
    title: "Performance",
    description:
      "Our custom apps generally perform better. They are rigorously tested with your existing website and tech stack before launch to ensure compatibility and enhance performance, potentially making your site run faster and more smoothly than before.",
    icon: "performance",
    color: "bg-pink-600",
  },
];

const FeatureItem = ({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg space-y-3 flex flex-col h-full">
      <span className={`p-3 flex w-max rounded-full text-white ${color}`}>
        {iconRender(icon)}
      </span>
      <h1 className="flex text-lg font-semibold capitalize text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-sm font-light text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Slide>
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/images/shopify-apps-bg.png')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 before:opacity-30 min-h-[720px]">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center min-h-[720px] space-y-8">
            <div className="flex justify-center items-center">
              <span className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-textPrimary py-2 px-4 rounded-full transition hover:border-gray-300">
                Boost Your Store with a Custom Shopify App
              </span>
            </div>

            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-textPrimary text-4xl md:text-5xl lg:text-6xl">
                Custom Shopify App{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-brandPrimary to-brandSecondary text-transparent">
                  Development
                </span>
              </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-textSecondary">
                Supercharge Your Shopify Store and Expand Your Horizons! Elevate
                your business with our Custom Shopify App Development Service.
                Seamlessly integrate and automate your processes for smoother
                operations and greater success.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <Link
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-brandPrimary to-brandSecondary hover:from-brandSecondary hover:to-brandPrimary border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4"
                href="/pages/contact"
              >
                Contact Us
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <button
                type="button"
                className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-textPrimary shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                $ let's begin
                <span className="flex justify-center items-center bg-gray-200 rounded-md size-7">
                  <svg
                    className="flex-shrink-0 size-4 group-hover:rotate-6 transition"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Slide>

      <Slide delay={0.07}>
        <section className="py-20">
          <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10 xl:gap-14">
              <div className="lg:w-[55%] xl:w-3/5 lg:items-center grid sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-start">
                {features.map((feature) => (
                  <FeatureItem key={feature.id} {...feature} />
                ))}
              </div>
              <div className="flex-1 py-10 lg:py-8 space-y-8 max-w-2xl">
                <h2 className="text-4xl font-semibold text-textPrimary">
                  Stay focused to your business strategy !
                </h2>
                <p className="text-textSecondary max-w-md">
                  Let us do all the heavy lifting of developing an app that will
                  help you achieve your goals while you can sit back and focus
                  on your business process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Slide>

      <Slide delay={0.14}>
        <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6xl:max-w-screen-2xl">
          <div>
            <div className="mx-auto">
              <PageHeading title="Why Choose Custom Shopify App Development?">
                <p className="text-textSecondary mx-auto max-w-5xl text-lg">
                  Ever wondered how a custom shopify app can help you scale in
                  your business without going through the complex hassle of
                  managing your shopify store and other systems ? We have
                  created a list of pros & cons to help you understand this
                  better.
                </p>

                <p className="text-textSecondary mx-auto max-w-5xl text-lg mt-4">
                  Shopify offers a plethora of tools across various categories
                  that merchants can install quickly, making it easy to find and
                  use the available public apps. These apps are tailored to
                  solve common issues faced by Shopify store owners, providing a
                  convenient starting point. However, you might find that these
                  apps don't fully meet your needs, or you may need to use
                  multiple apps to manage your store effectively.
                </p>
                <p className="text-textSecondary mx-auto max-w-5xl text-lg mt-4">
                  In such cases, it might be wise to hire a custom Shopify app
                  development company to create a tailor-made application. A
                  bespoke app is built from scratch, giving you complete control
                  over its features, integrations, and workflow, all customized
                  to fit your specific business needs.
                </p>
                <p className="text-textSecondary mx-auto max-w-5xl text-lg mt-4">
                  A custom application can integrate smoothly with specific
                  systems like a dedicated CRM or ERP, solve persistent issues,
                  or even help you sell on other e-commerce platforms. Moreover,
                  a bespoke app consolidates all the features and
                  functionalities into one platform, allowing you to manage your
                  store more efficiently without the need to switch between
                  multiple apps. This not only simplifies store management but
                  also helps avoid the slowdowns associated with running
                  multiple programs.
                </p>
                <p className="text-textSecondary mx-auto max-w-5xl text-lg mt-4">
                  We have summarized the advantages and disadvantages of custom
                  shopify app to help you imagine in a better way.
                </p>
              </PageHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-bgPositive p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-bold text-textPositive mb-4">
                    Benefits of Custom Shopify App
                  </h2>
                  <ul className="list-none list-inside">
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Tailored
                      just to your specific needs
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>
                      Flexibility to customize
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Automate
                      with different business flows
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Connect
                      different Systems i.e. POS, CRM, ERP
                    </li>
                    <li className="py-1">
                      <span className="text-textPositive mr-2">✓</span>Combine
                      different apps into one app with all functionality
                    </li>
                  </ul>
                </div>

                <div className="bg-bgNegative p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg font-bold text-textNegative mb-4">
                    Disadvantages of Custom Shopify App
                  </h2>
                  <ul className="list-none list-inside">
                    <li className="py-1">
                      <span className="text-textNegative mr-2">✗</span>High Cost
                      and Development time
                    </li>
                    <li className="py-1">
                      <span className="text-textNegative mr-2">✗</span>
                      Maintainance required time to time
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide delay={0.21}>
        <GetInTouch />
      </Slide>
    </main>
  );
}
