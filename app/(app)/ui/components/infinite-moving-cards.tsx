"use client";

import { cn } from "@/app/(app)/utils/cn";
import React, { useEffect, useState } from "react";
import PageHeading from "./common/PageHeading";

const cardItems = [
  {
    quote: "We have worked with them in the past and we are continuing as they are doing the Fabulous Job that makes us satisfied. They are time managing, understands the priorities and replies very quickly to your question. I will recommend them on any of your website projects.",
    name: "Mark Calvert",
    title: "Owner at supportiveLiving.ca",
  },
  {
    quote: "They did a very good job on our Shopify Store to make it look more lively and that helped us bring good sale and our conversion went way above then the before. Also, need to mention, their work on site speed was flawless as they eliminated the bugs that was crashing our site.",
    name: "Karmen Salim",
    title: "Manager at Village Juicery",
  },
  {
    quote: "They are quick and reliable as they work on their timelines and deliver the best of your project. We feel like we have our own the employees working with us on the project. They gave good ideas and their research is also excellent.",
    name: "Daniel Eidan",
    title: "Manager at GTA Vapes",
  },
  {
    quote: "We have worked with them in the past and we are continuing as they are doing the Fabulous Job that makes us satisfied. They are time managing, understands the priorities and replies very quickly to your question. I will recommend them on any of your website projects.",
    name: "Another Review",
    title: "Owner at supportiveLiving.ca",
  },
]

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <>
    <div>
        <h2 className="text-2xl lg:text-4xl font-bold text-center my-8">
           Some of Our Client Reviews
        </h2>
        <p className="text-textSecondary mx-auto max-w-2xl lg:max-w-3xl text-center text-lg">
          Take a glance at some of our top client's testimonials and learn more to read our project case studies for these projects to see how we work.
        </p>
    </div>
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {cardItems.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-borderPrimary px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(246,248,251,0.6) 0%, rgba(203,212,225,0.6) 100%)"
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-textPrimary font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-brandPrimary font-bold">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-textPrimary font-bold">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
