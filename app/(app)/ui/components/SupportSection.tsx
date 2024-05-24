"use client";
import { useEffect, useRef, useState } from 'react';

export default function SupportSection() {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const totalCards = 4; // Adjust this based on the number of cards you have
  
    useEffect(() => {
      const handleScroll = () => {
        if (scrollContainerRef.current) {
          const scrollContainer = scrollContainerRef.current;
          const scrollPosition = scrollContainer.scrollLeft;
          const cardWidth = window.innerWidth * 0.8; // Assuming cards are 80vw wide
          const newActiveIndex = Math.round(scrollPosition / cardWidth);
          setActiveIndex(newActiveIndex);
        }
      };
  
      const scrollContainer = scrollContainerRef.current;
      scrollContainer?.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        scrollContainer?.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleIndicatorClick = (index: number) => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const cardWidth = window.innerWidth * 0.8; // Assuming cards are 80vw wide
        const scrollTo = cardWidth * index;
        scrollContainer.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    };

    return(
        <section
        className="grid gap-y-16 grid-cols-full py-32 support z-0 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto xl:max-w-screen-2xl">
          <div className="copy-text text-left sm:text-center">
            <div
              className="text-center text-white"
            >
              <p
                className="text-base uppercase font-bold leading-none pb-2 text-white tracking-wide"
              >
                SHOPIFY SUPPORT
              </p>
              <h2 className="font-bold  text-4xl md:text-5xl text-white leading-[3.5rem]">
                The help you need,
                <br /> when you need it
              </h2>
            </div>
          </div>
        </div>
        <div className="[@media(max-width:900px)]:mx-0 md:gap-y-6 md:mb-6 gap-x-6 flex max-w-full snap-x snap-mandatory justify-start overflow-x-scroll md:mx-auto md:max-w-6xl md:flex-wrap md:justify-center md:overflow-hidden md:py-1 md:px-4"  ref={scrollContainerRef}>
          <div className="support-card w-[80vw] shrink-0 snap-center first:ml-[5.625rem] last:mr-[5.625rem] md:first:ml-0 md:last:mr-0 md:basis-[calc(50%-1.5rem/2)]">
            <div
              className="rounded-2xl border border-[#1b1c1c] h-full"
              style={{
                background:
                  "linear-gradient(rgb(10, 10, 10) 0%, rgba(5, 5, 5, 0.58) 100%), linear-gradient(0deg, rgb(27, 28, 28), rgb(27, 28, 28))",
              }}
            >
              <a
                className="block h-full w-full py-12 px-4 md:py-12 md:pl-12 md:pr-16 group"
                href="/pages/shopify-store-setup"
              >
                <div
                  className="mb-8 flex h-14 w-14  justify-center rounded-[14px] text-black"
                  style={{
                    background:
                      "linear-gradient(46.87deg, rgb(150, 228, 233) 0%, rgb(130, 249, 83) 96.94%)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 self-center"
                  >
                    <path
                      d="M17.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V5.75C4.75 5.19771 5.19772 4.75 5.75 4.75H14.25C14.8023 4.75 15.25 5.19772 15.25 5.75V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5227 9.75H15.25V17.25C15.25 18.3546 16.1454 19.25 17.25 19.25C18.3546 19.25 19.25 18.3546 19.25 17.25V11.4773C19.25 10.5233 18.4767 9.75 17.5227 9.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 8.75C7.75 8.19772 8.19772 7.75 8.75 7.75H11.25C11.8023 7.75 12.25 8.19772 12.25 8.75V10.25C12.25 10.8023 11.8023 11.25 11.25 11.25H8.75C8.19772 11.25 7.75 10.8023 7.75 10.25V8.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13.75H12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 16.25H12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="support-card-title font-bold mb-4 text-3xl md:text-4xl">
                  Store Setup
                </h3>
                <p className="support-card-description mb-11 md:text-lg">
                  Kick off your new shopify store with our expert guides that will help you to get online and start selling in no time.
                </p>
                <div className="support-card-link inline-flex items-center rounded-3xl border border-[#283034] bg-[#1b1f21] group-hover:bg-[#282E31] group-hover:border-[#364147] px-3 py-1">
                  <span className="mr-3 inline-block">Start Now</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 12 8"
                    className="inline-block h-3 w-3 group-hover:translate-x-1 transition-transform duration-500 will-change-transform"
                  >
                    <path d="m6.5 5.1-5.1 5.2L0 8.9l3.7-3.8L0 1.4 1.4 0" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="support-card w-[80vw] shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)]  md:first:ml-0 md:last:mr-0 md:basis-[calc(50%-1.5rem/2)]">
            <div
              className="rounded-2xl border border-[#1b1c1c] h-full"
              style={{
                background:
                  "linear-gradient(rgb(10, 10, 10) 0%, rgba(5, 5, 5, 0.58) 100%), linear-gradient(0deg, rgb(27, 28, 28), rgb(27, 28, 28))",
              }}
            >
              <a
                className="block h-full w-full py-12 px-4 md:py-12 md:pl-12 md:pr-16 group"
                href="/pages/contact"
              >
                <div
                  className="mb-8 flex h-14 w-14  justify-center rounded-[14px] text-black"
                  style={{
                    background:
                      "linear-gradient(45deg, rgb(99, 255, 169) 0%, rgb(98, 58, 255) 120.54%)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 self-center"
                  >
                    <path
                      d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="support-card-title font-bold mb-4 text-3xl md:text-4xl">
                  Shopify B2B/Wholesale
                </h3>
                <p className="support-card-description mb-11 md:text-lg">
                  Get expert help when setting up your new B2B store with shopify plus and dont miss out on any of the business features. Contact us now to get to know more.
                </p>
                <div className="support-card-link inline-flex items-center rounded-3xl border border-[#283034] bg-[#1b1f21] group-hover:bg-[#282E31] group-hover:border-[#364147] px-3 py-1">
                  <span className="mr-3 inline-block">Contact Us</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 12 8"
                    className="inline-block h-3 w-3 group-hover:translate-x-1 transition-transform duration-500 will-change-transform"
                  >
                    <path d="m6.5 5.1-5.1 5.2L0 8.9l3.7-3.8L0 1.4 1.4 0" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="support-card w-[80vw] shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)]  md:first:ml-0 md:last:mr-0 md:basis-[calc(50%-1.5rem/2)]">
            <div
              className="rounded-2xl border border-[#1b1c1c] h-full"
              style={{
                background:
                  "linear-gradient(rgb(10, 10, 10) 0%, rgba(5, 5, 5, 0.58) 100%), linear-gradient(0deg, rgb(27, 28, 28), rgb(27, 28, 28))",
              }}
            >
              <a
                className="block h-full w-full py-12 px-4 md:py-12 md:pl-12 md:pr-16 group"
                href="/pages/contact"
              >
                <div
                  className="mb-8 flex h-14 w-14  justify-center rounded-[14px] text-black"
                  style={{
                    background:
                      "linear-gradient(46.87deg, rgb(85, 118, 237) 0%, rgb(111, 253, 150) 96.94%)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 self-center"
                  >
                    <path
                      d="M7 15.25C7.69036 15.25 8.25 14.6904 8.25 14C8.25 13.3096 7.69036 12.75 7 12.75C6.30964 12.75 5.75 13.3096 5.75 14C5.75 14.6904 6.30964 15.25 7 15.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15.25C12.6904 15.25 13.25 14.6904 13.25 14C13.25 13.3096 12.6904 12.75 12 12.75C11.3096 12.75 10.75 13.3096 10.75 14C10.75 14.6904 11.3096 15.25 12 15.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11.25C9.69036 11.25 10.25 10.6904 10.25 10C10.25 9.30964 9.69036 8.75 9 8.75C8.30964 8.75 7.75 9.30964 7.75 10C7.75 10.6904 8.30964 11.25 9 11.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11.25C15.6904 11.25 16.25 10.6904 16.25 10C16.25 9.30964 15.6904 8.75 15 8.75C14.3096 8.75 13.75 9.30964 13.75 10C13.75 10.6904 14.3096 11.25 15 11.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7.25C12.6904 7.25 13.25 6.69036 13.25 6C13.25 5.30964 12.6904 4.75 12 4.75C11.3096 4.75 10.75 5.30964 10.75 6C10.75 6.69036 11.3096 7.25 12 7.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 15.25C17.6904 15.25 18.25 14.6904 18.25 14C18.25 13.3096 17.6904 12.75 17 12.75C16.3096 12.75 15.75 13.3096 15.75 14C15.75 14.6904 16.3096 15.25 17 15.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 19.25C9.5 19.25 9.25001 16.75 7 16.75C4.74999 16.75 4.75 19.25 4.75 19.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 19.25C14.5 19.25 14.25 16.75 12 16.75C9.74999 16.75 9.5 19.25 9.5 19.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.25 19.25C19.25 19.25 19.25 16.75 17 16.75C14.75 16.75 14.5 19.25 14.5 19.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="support-card-title font-bold mb-4 text-3xl md:text-4xl">
                  Conversion Optimization
                </h3>
                <p className="support-card-description mb-11 md:text-lg">
                  Website not performing well ? There might be number of reasons, we can analyze and guide you on the right path to get
                  your website back on track with high conversion rate.
                </p>
                <div className="support-card-link inline-flex items-center rounded-3xl border border-[#283034] bg-[#1b1f21] group-hover:bg-[#282E31] group-hover:border-[#364147] px-3 py-1">
                  <span className="mr-3 inline-block">Discuss Now</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 12 8"
                    className="inline-block h-3 w-3 group-hover:translate-x-1 transition-transform duration-500 will-change-transform"
                  >
                    <path d="m6.5 5.1-5.1 5.2L0 8.9l3.7-3.8L0 1.4 1.4 0" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="support-card w-[80vw] shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)]  md:first:ml-0 md:last:mr-0 md:basis-[calc(50%-1.5rem/2)]">
            <div
              className="rounded-2xl border border-[#1b1c1c] h-full"
              style={{
                background:
                  "linear-gradient(rgb(10, 10, 10) 0%, rgba(5, 5, 5, 0.58) 100%), linear-gradient(0deg, rgb(27, 28, 28), rgb(27, 28, 28))",
              }}
            >
              <a
                className="block h-full w-full py-12 px-4 md:py-12 md:pl-12 md:pr-16 group"
                href="/pages/contact"
              >
                <div
                  className="mb-8 flex h-14 w-14  justify-center rounded-[14px] text-black"
                  style={{
                    background:
                      "linear-gradient(150.75deg, rgb(102, 208, 138) 17.95%, rgb(67, 106, 244) 93.13%)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 self-center"
                  >
                    <path
                      d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 10C9.75 10 10 7.75 12 7.75C14 7.75 14.25 9 14.25 10C14.25 10.7513 13.8266 11.5027 12.9798 11.8299C12.4647 12.0289 12 12.4477 12 13V13.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="support-card-title font-bold mb-4 text-3xl md:text-4xl">
                  Help Center
                </h3>
                <p className="support-card-description mb-11 md:text-lg">
                  We are a shopify powerhouse and help in all cases when it comes to shopify. If there is a bug in your website that you want to fix or you are on a mission to make
                  your dream website, we are here to help.
                </p>
                <div className="support-card-link inline-flex items-center rounded-3xl border border-[#283034] bg-[#1b1f21] group-hover:bg-[#282E31] group-hover:border-[#364147] px-3 py-1">
                  <span className="mr-3 inline-block">Get help</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 12 8"
                    className="inline-block h-3 w-3 group-hover:translate-x-1 transition-transform duration-500 will-change-transform"
                  >
                    <path d="m6.5 5.1-5.1 5.2L0 8.9l3.7-3.8L0 1.4 1.4 0" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mobile-indicators mt-6 flex justify-center gap-x-2 md:hidden">
        {Array.from({ length: totalCards }).map((_, index) => (
          <div
            key={index}
            className={`rounded-full w-2 h-2 border-4 border-black box-content ${
              activeIndex === index ? 'bg-white shadow-[0_0_0_1px_rgba(255,255,255,1)]' : 'bg-white/30'
            }  cursor-pointer`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
        </div>
      </section>
    );
}