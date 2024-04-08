import { Slide } from "@/app/(app)/ui/animation/Slide";
import Image from "next/image";
export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen flex-auto">
      <Slide>
        <div className="mx-auto lg:max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-24">
          <div className="max-w-2xl lg:max-w-none">
            <div>
              <h1>
                <span className="block text-base font-semibold text-textSecondary">
                  Our process
                </span>
                <span className="sr-only"> - </span>
                <span className="mt-2 block max-w-5xl text-5xl font-bold text-textPrimary sm:text-6xl tracking-tight lg:leading-[3.7rem]">
                  How we work
                </span>
              </h1>
              <div className="mt-2 max-w-3xl text-lg text-textSecondary">
                <p>
                  We believe in efficiency and maximizing our resources to
                  provide the best value to our clients. The primary way we do
                  that is by re-using the same five projects we’ve been
                  developing for the past decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
 
      <Slide delay={0.7}>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
          <div className="mx-auto lg:max-w-7xl xl:max-w-screen-2xl px-6 lg:px-8 group/section [counter-increment:section]">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                  <div className="w-[33.75rem] flex-none lg:w-[45rem]" style={{ opacity: 1 , transform: "none" }}>
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
                                src={
                                  "https://dummyimage.com/2400x1800"
                                 }
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
                  <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <div>
                      <div
                        className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                        aria-hidden="true"
                      ></div>
                      <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                        Discover
                      </h2>
                      <div className="mt-6">
                        <div className="space-y-6 text-base text-neutral-600">
                          <p>
                            We work closely with our clients to understand their{" "}
                            <strong className="font-semibold text-neutral-950">
                              needs
                            </strong>{" "}
                            and goals, embedding ourselves in their every day
                            operations to understand what makes their business
                            tick.
                          </p>
                          <p>
                            Our team of private investigators shadow the company
                            director’s for several weeks while our account
                            managers focus on going through their trash. Our
                            senior security experts then perform social
                            engineering hacks to gain access to their{" "}
                            <strong className="font-semibold text-neutral-950">
                              business
                            </strong>{" "}
                            accounts — handing that information over to our
                            forensic accounting team.
                          </p>
                          <p>
                            Once the full audit is complete, we report back with
                            a comprehensive{" "}
                            <strong className="font-semibold text-neutral-950">
                              plan
                            </strong>{" "}
                            and, more importantly, a budget.
                          </p>
                        </div>
                        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                          Included in this phase
                        </h3>
                        <ul role="list" className="mt-4 flex flex-wrap gap-4">
                          <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                            In-depth questionnaires
                          </li>
                          <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                            Feasibility studies
                          </li>
                          <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                            Blood samples
                          </li>
                          <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                            Employee surveys
                          </li>
                          <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                            Proofs-of-concept
                          </li>
                          <li className="rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600">
                            Forensic audit
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
        
    </main>
  );
}
