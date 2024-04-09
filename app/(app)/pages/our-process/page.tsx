import { Slide } from "@/app/(app)/ui/animation/Slide";
import Image from "next/image";
import GetInTouch from "../../ui/components/common/GetInTouch";
export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden flex-auto w-full">
      <Slide>
        <div className="mx-auto lg:max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24">
          <div className="max-w-2xl lg:max-w-none">
            <div>
              <h1>
                <span className="block text-base font-semibold text-textSecondary">
                  Our Approach
                </span>
                <span className="sr-only"> - </span>
                <span className="mt-6 block max-w-5xl text-5xl font-bold text-textPrimary sm:text-6xl tracking-tight lg:leading-[3.7rem]">
                  How we work
                </span>
              </h1>
              <div className="mt-6 max-w-3xl text-lg text-textSecondary">
                <p>
                  We believe in efficiency and maximizing our resources to
                  provide the best value to our clients. The primary way we do
                  that is by having a limited number of clients working at a time on the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Slide delay={0.7}>
          <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 group/section [counter-increment:section]">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                  <div
                    className="w-[33.75rem] flex-none lg:w-[45rem]"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full grayscale">
                      <svg viewBox="0 0 655 680" fill="none" className="h-full">
                        <g clipPath="url(#:S1:-clip)" className="group">
                          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                            <foreignObject width="655" height="680">
                              <Image
                                alt=""
                                loading="lazy"
                                width="2400"
                                height="1800"
                                decoding="async"
                                className="w-full bg-neutral-100 object-cover"
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                src="/images/project_discovery.jpg"
                                style={{
                                  color: "transparent",
                                  aspectRatio: "655/680",
                                }}
                              />
                            </foreignObject>
                          </g>
                          <use
                            href="#:S1:-shape"
                            strokeWidth="2"
                            className="stroke-neutral-950/10"
                          ></use>
                        </g>
                        <defs>
                          <clipPath id=":S1:-clip">
                            <path
                              id=":S1:-shape"
                              d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div
                      className="text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-textPrimary after:content-[counter(section,decimal-leading-zero)]"
                      aria-hidden="true"
                    ></div>
                    <h2 className="mt-2 text-3xl font-medium tracking-tight text-textPrimary sm:text-4xl">
                      Discover
                    </h2>
                    <div className="mt-6">
                      <div className="space-y-6 text-base text-textSecondary">
                        <p>
                          We work closely with our clients to understand their{" "}
                          <strong className="font-semibold text-textPrimary">
                            needs
                          </strong>{" "}
                          and goals, embedding ourselves in their every day
                          operations to understand what makes their business
                          tick.
                        </p>
                        <p>
                          Our team will deep dive into your business category, your project requirements 
                           and perform a market research on your competitors to identify
                           and build the most effective strategy to help you sacle your{" "}
                          <strong className="font-semibold text-textPrimary">
                            business
                          </strong>{" "}
                          goals — leading to the increased conversion and revenue with a beautiful user experience.
                        </p>
                        <p>
                          Once the full audit is complete, we report back with a
                          comprehensive{" "}
                          <strong className="font-semibold text-textPrimary">
                            plan
                          </strong>{" "}
                          and, more importantly, a budget.
                        </p>
                      </div>
                      <h3 className="mt-12 font-display text-base font-semibold text-textPrimary">
                        Included in this phase
                      </h3>
                      <ul role="list" className="mt-4 flex flex-wrap gap-4">
                        <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-textSecondary">
                          Market Analysis
                        </li>
                        <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-textSecondary">
                          Project Timeline
                        </li>
                        <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-textSecondary">
                          Client Meetings
                        </li>
                        <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-textSecondary">
                          Competitive Strategy
                        </li>
                        <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-textSecondary">
                          Free Consultation*
                        </li>
                        <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-textSecondary">
                          Budget
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide delay={0.14}>
          <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 group/section [counter-increment:section]">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                  <div
                    className="w-[33.75rem] flex-none lg:w-[45rem]"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full grayscale">
                      <svg viewBox="0 0 719 680" fill="none" className="h-full">
                        <g clipPath="url(#:S2:-clip)" className="group">
                          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                            <foreignObject width="719" height="680">
                              <Image
                                alt=""
                                loading="lazy"
                                width="2400"
                                height="1600"
                                decoding="async"
                                className="w-full bg-neutral-100 object-cover"
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                src="/images/project_build.jpg"
                                style={{
                                  color: "transparent",
                                  aspectRatio: "655/680",
                                }}
                              />
                            </foreignObject>
                          </g>
                          <use
                            href="#:S2:-shape"
                            strokeWidth="2"
                            className="stroke-neutral-950/10"
                          ></use>
                        </g>
                        <defs>
                          <clipPath id=":S2:-clip">
                            <path
                              id=":S2:-shape"
                              d="M89.827 9.245A11.5 11.5 0 0 1 101.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 138.87 151H75.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Zm-64 321A11.5 11.5 0 0 1 37.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 472H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM526.795 470a15.999 15.999 0 0 0-15.689 12.862l-32.032 160.159c-4.3 21.502-23.18 36.979-45.107 36.979H115.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C177.096 91.477 195.975 76 217.902 76h318.465c29.028 0 50.8 26.557 45.107 55.021l-33.768 168.841c-1.98 9.901 5.592 19.138 15.689 19.138h17.075l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 644.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 311H623c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 554.87 470h-28.075Z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first lg:order-first">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div
                      className="text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-textPrimary after:content-[counter(section,decimal-leading-zero)]"
                      aria-hidden="true"
                    ></div>
                    <h2 className="mt-2 text-3xl font-medium tracking-tight text-textPrimary sm:text-4xl">
                      Build
                    </h2>
                    <div className="mt-6">
                      <div className="space-y-6 text-base text-textSecondary">
                        <p>
                          Based off of the discovery phase, we develop a
                          comprehensive roadmap for each module of project and start
                          working towards development.We shoot updates regularly to you
                          on emails to keep you posted on the progress alongside with our
                          internal team.
                        </p>
                        <p>
                          Each client is assigned a key account manager to keep
                          lines of communication open and obscure the actual
                          progress of the project. They act as a point of contact between
                          the client’s team and the development
                          team coordinating the project and list of things that needs to be
                          taken care of during the development phase.
                        </p>
                        <p>
                          Our account managers are always available to help and answer any questions
                          you may have about the project and their progress. We will schedule the 
                          call or meetings or whatever works the best for you to know your opinions 
                          alongside.
                        </p>
                      </div>
                      <div className="pl-8 mt-12 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <figure className="text-sm">
                          <blockquote className="text-textSecondary [&amp;>*]:relative [&amp;>:first-child]:before:absolute [&amp;>:first-child]:before:right-full [&amp;>:first-child]:before:content-['“'] [&amp;>:last-child]:after:content-['”']">
                            <p>
                              The SJ Development were so regular with their progress updates
                              we never have to worry about the status and timelines of our projects !
                            </p>
                          </blockquote>
                          <figcaption className="mt-6 font-semibold text-textPrimary">
                              Kathrin Lundy, Senior Digital Marketing Manager of Posedla
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide delay={0.28}>
          <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 group/section [counter-increment:section]">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                  <div
                    className="w-[33.75rem] flex-none lg:w-[45rem]"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-[719/680] w-full grayscale">
                      <svg viewBox="0 0 719 680" fill="none" className="h-full">
                        <g clipPath="url(#:S3:-clip)" className="group">
                          <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                            <foreignObject width="719" height="680">
                              <Image
                                alt=""
                                loading="lazy"
                                width="2400"
                                height="1800"
                                decoding="async"
                                className="w-full bg-neutral-100 object-cover"
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                src="/images/project_delivery.jpg"
                                style={{
                                  color: "transparent",
                                  aspectRatio: "655/680",
                                }}
                              />
                            </foreignObject>
                          </g>
                          <use
                            href="#:S3:-shape"
                            strokeWidth="2"
                            className="stroke-neutral-950/10"
                          ></use>
                        </g>
                        <defs>
                          <clipPath id=":S3:-clip">
                            <path
                              id=":S3:-shape"
                              d="M632.827 9.245A11.5 11.5 0 0 1 644.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-95.832 479.159c-4.3 21.502-23.18 36.979-45.107 36.979H178.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C240.096 91.477 258.975 76 280.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm0 479A11.5 11.5 0 0 1 644.104 479h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 681.87 630h-63.366c-7.257 0-12.7-6.639-11.277-13.755l25.6-128ZM37.104 159a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C-1.196 303.361 4.247 310 11.504 310H74.87a11.5 11.5 0 0 0 11.277-9.245l24.76-123.798a.03.03 0 0 1 .052-.012c.015.021.048.012.052-.014C114.016 158.98 120.134 151 143 151h58.87a11.5 11.5 0 0 0 11.277-9.245l25.6-128C240.17 6.64 234.727 0 227.47 0h-63.366a11.5 11.5 0 0 0-11.277 9.245l-24.754 123.771c-.002.011-.016.015-.024.006-.007-.009-.021-.005-.023.007-3.469 18.452-13.551 25.107-24.88 25.981-.848.065-1.699 0-2.549-.009l-.127-.001H37.104Z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                  <div style={{ opacity: 1, transform: "none" }}>
                    <div
                      className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                      aria-hidden="true"
                    ></div>
                    <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                      Deliver
                    </h2>
                    <div className="mt-6">
                      <div className="space-y-6 text-base text-neutral-600">
                        <p>
                          Once half of the building phase is complete, we run tests on all the modules we created to make sure it meets the{" "}
                          <strong className="font-semibold text-neutral-950">
                            requirements
                          </strong>
                          . This allows us to make any changes before finalizing the build and we then complete the rest of the build phase.
                        </p>
                        <p>
                          Despite the half way testing, once the build phase is complete, we rerun all the test processes again to make sure that the{" "}
                          <strong className="font-semibold text-neutral-950">
                            final build
                          </strong>{" "}
                          on each is error free and meets all the reaquirements. Alongside of the business
                          requirements, we also check it ticks all the boxes of website development including
                          performance analysis, accessibility testing, SEO friendliness and UX testing.
                        </p>
                        <p>
                          We ensure that the final build of the project is{" "}
                          <strong className="font-semibold text-neutral-950">
                            fully functional
                          </strong>{" "}
                          after the launch — keeping an eye out with more testing on our side to make sure the project is{" "}
                          <strong className="font-semibold text-neutral-950">
                            error-free
                          </strong>{" "}
                          and performs as required.
                        </p>
                      </div>
                      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                        Included in this phase
                      </h3>
                      <div>
                        <ul
                          role="list"
                          className="text-base text-neutral-600 mt-8"
                        >
                          <li className="group mt-10 first:mt-0">
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                                <strong className="font-semibold text-neutral-950">
                                  Testing.{" "}
                                </strong>
                                Our projects always have 100% test coverage,
                                which also covers the testing once the project has been launched.
                              </div>
                            </div>
                          </li>
                          <li className="group mt-10 first:mt-0">
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                                <strong className="font-semibold text-neutral-950">
                                  Infrastructure.{" "}
                                </strong>
                                Our Development team will hand over all the infrastructure for the project to your team including all the assets and we will stay on it as a collaborator to help you for future assistance.
                              </div>
                            </div>
                          </li>
                          <li className="group mt-10 first:mt-0">
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                                <strong className="font-semibold text-neutral-950">
                                  Support.{" "}
                                </strong>
                                Our support does not end at launch, we are always a message away to help you answer any question you may have.
                                We also provide paid support plans where you will have access to one of our developer all the time for your development needs.
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>

      <Slide delay={0.35}>
        <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
          <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            >
              <rect
                width="100%"
                height="100%"
                fill="url(#:r6:)"
                strokeWidth="0"
              ></rect>
              <svg x="50%" y="-270" strokeWidth="0" className="overflow-visible">
                <path
                  transform="translate(64 160)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(128 320)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(288 480)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(512 320)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(544 640)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
                <path
                  transform="translate(320 800)"
                  d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                ></path>
              </svg>
              <defs>
                <pattern
                  id=":r6:"
                  width="96"
                  height="480"
                  x="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(0 -270)"
                  fill="none"
                >
                  <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl" style={{ opacity: 1, transform: "none" }}>
                <h2>
                  <span className="mb-6 block font-display text-base font-semibold text-neutral-950">
                    Our Secret Recepie
                  </span>
                  <span className="sr-only"> - </span>
                  <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
                    Balancing reliability and innovation
                  </span>
                </h2>
                <div className="mt-6 text-xl text-neutral-600">
                  <p>
                    We strive to stay at the forefront of emerging trends and
                    technologies, while completely ignoring them and forking
                    that old Rails project we feel comfortable using. We stand
                    by our core values to justify that decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 mt-24">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-neutral-950">
                          Innovative.
                        </strong>{" "}
                        We believe in making something that makes a difference. Our team is highly Innovative
                        on technologies as we believe the technical landscape is evolving and so we are. 
                      </div>
                    </div>
                  </li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-neutral-950">
                          Efficient.
                        </strong>{" "}
                        We pride ourselves on never missing a deadline which is
                        why we are efficient. Time management is our top priority.
                      </div>
                    </div>
                  </li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-neutral-950">
                          Adaptable.
                        </strong>{" "}
                        Every business has unique needs and our greatest
                        strength lies in adapting to those needs. Our experts works with all types of tech stacks that your business have used or currently in use. 
                      </div>
                    </div>
                  </li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-neutral-950">
                          Honest.
                        </strong>{" "}
                        We are transparent about all of our processes, including the budget, timeline and deliverables.
                        We do not make false promises or charge hidden fees to our clients.
                      </div>
                    </div>
                  </li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-neutral-950">
                          Loyal.
                        </strong>{" "}
                        We foster long-term relationships with our clients that
                        go beyond just delivering a project, allowing us to
                        work as their own team member.
                      </div>
                    </div>
                  </li>
                  <li className="text-base text-neutral-600 before:bg-neutral-950 after:bg-neutral-100">
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px">
                        <strong className="font-semibold text-neutral-950">
                          Communication.
                        </strong>{" "}
                        The strong communication is the main key to success of any project.
                        and we keep it that way when it comes to communicating with our clients.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide delay={0.42}>
        <GetInTouch />
      </Slide>
    </main>
  );
}
