import { Metadata } from "next";
import Link from "next/link";
import { Slide } from "../../ui/animation/Slide";

export const metadata: Metadata = {
  title: "Shopify FAQ's | The SJ Development",
  metadataBase: new URL("https://thesjdevelopment.com/pages/faq"),
  description: "",
  openGraph: {
    title: "Shopify FAQ's | The SJ Development",
    url: "https://thesjdevelopment.com/pages/faq",
    description: "",
    images: "",
  },
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* FAQ's - page for all questions on Shopify Development services */}

      <div className="max-w-7xl xl:max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="mx-auto mb-10 lg:mb-14 w-full text-center">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-textSecondary my-6 max-w-3xl mx-auto">
            Questions ? We know you do. We have prepared a list of questions that clients normally asks us overall. Please go through the list to find out suitable answer. If not, you can
            always reach us out through chat window or email and we will be in touch within next 24 hours.
          </p>
        </div>
        {/* End Title */}
        <div className="mx-auto divide-y divide-gray-200">
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  Do you offer revisions on the work done ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  Yes, We believe in client satisfaction and hence we offer
                  unlimited revisions to make you satisfied with your project.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  Do you offer web design services ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  Yes, we have in house team of designers who design the best
                  wireframes and UI for your websites. We also help in branding.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  Do you work on websites apart from Shopify ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  Yes, we are web designers and developers and work across all
                  the website technologies that are there in the market. If you
                  have a question about your development needs, please contact
                  us at hello@thesjdevelopment.com and someone will be with you
                  soon.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  What are the pricing for your services ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  We offer web design and web development services at a very
                  competitive price that you can ever find in the market,
                  without compromising the qualtiy of our work. Our prices defer
                  from project to project and hence we can not generalise our
                  pricing. Please reach out to get a quote on your development
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  What is your refund policy ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  We do not offer refunds on any of our services. However, If
                  you are unhappy with our work for any reason, email us to
                  discuss what went wrong and we will go above and beyond to fix
                  your projects. Note that this is limited to 30 days after the
                  project is completed and the error is not caused by any other
                  reason.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  Do you offer hourly or fixed price services ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  Yes, we are your business employees, we offer hourly services,
                  we assign one of our developers to your project and only
                  charge you for the amount of work done. Please contact us to
                  learn more.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  Do you have expedite services plan ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  Yes, for clients that are having issues or want to have their
                  project speed up without being waiting, we offer expedite
                  services at a slightly higher price.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  How many clients do you take it at a time ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  We are small team with less than 10 members and hence we
                  understand that quality of work does matter to our clients.
                  Hence, we do not take more than 3 clients at a time to avoid
                  potential issues /delays in project delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  How can we pay you for our services ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  We offer all major payment gateways option to our clients, we
                  will soon be launching our payment page online where you can
                  purchase our services. But for now, we take all direct
                  deposits to our bank account and any other methods such as
                  paypal. Note that we do not accept crypto currencies at this
                  time.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  Do you offer discounts for repeated clients ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  Yes, we have a special discount for repeated clients that have
                  been with us for more than 2 times. Contact us to know what
                  best offer we can give you.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-textSecondary"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <h3 className="md:text-lg font-semibold text-textPrimary">
                  I have done a project with you, but now since shopify released
                  new features, my old project is not working. Can you help me ?
                </h3>
                <p className="mt-1 text-textSecondary">
                  Yes, we can definitely help. However this will include
                  additional charges due to the new features or upgraded support
                  from shopify. If you want to know more, please contact us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slide delay={0.07}>
        <section className="py-20 lg:py-[120px]">
          <div className="max-w-7xl xl:max-w-screen-2xl mx-auto">
            <div className="relative z-10 overflow-hidden rounded bg-brandPrimary py-12 px-8 md:p-[70px]">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 lg:w-1/2">
                  <span className="block mb-4 text-base font-medium text-white">
                    Build Your Next Dream Website 🔥
                  </span>
                  <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                    <span className="xs:block"> Get started with our free </span>
                    <span>consultation</span>
                  </h2>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="flex flex-wrap lg:justify-end">
                    <a
                      href="/pages/our-work"
                      className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-bgInformative rounded-md hover:bg-shadow-1 text-textPrimary px-7"
                    >
                      Our Projects
                    </a>
                    <a
                      href="/pages/contact"
                      className="inline-flex py-3 my-1 text-base font-medium text-brandPrimary transition rounded-md bg-secondary px-7 hover:bg-bgSecondary bg-bgPrimary"
                    >
                      Start Free Consultation
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <span className="absolute top-0 left-0 z-[-1]">
                  <svg
                    width={189}
                    height={162}
                    viewBox="0 0 189 162"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx={16}
                      cy="-16.5"
                      rx={173}
                      ry="178.5"
                      transform="rotate(180 16 -16.5)"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1={-157}
                        y1="-107.754"
                        x2="98.5011"
                        y2="-106.425"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.07" />
                        <stop offset={1} stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width={191}
                    height={208}
                    viewBox="0 0 191 208"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx={173}
                      cy="178.5"
                      rx={173}
                      ry="178.5"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-3.27832e-05"
                        y1="87.2457"
                        x2="255.501"
                        y2="88.5747"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.07" />
                        <stop offset={1} stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>
      </Slide>
    </main>
  );
}
