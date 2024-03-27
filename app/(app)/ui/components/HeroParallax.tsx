"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
  } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* REPLACE THE FOLLOWING WITH THE PROJECTS LIST AND THEIR SCREENSHOT TO MAKE IT LOOK MORE NICE */

export const products = [
    {
      title: "Vraj & Co.",
      link: "https://vraj-co.myshopify.com/",
      thumbnail:
        "/images/projects/ssvraj.png",
    },
    {
      title: "Dyna",
      link: "https://dyna-metro-inc.myshopify.com/",
      thumbnail:
        "/images/projects/ssdyna.png",
    },
    {
      title: "Village Juicery",
      link: "https://www.villagejuicery.com/",
      thumbnail:
        "/images/projects/ssvj.png",
    },
  
    {
      title: "Made4Fitness",
      link: "https://made4fitness.com/",
      thumbnail:
        "/images/projects/ssmade4fitness.png",
    },
    {
      title: "Kinnls",
      link: "https://store.kinnls.com/",
      thumbnail:
        "/images/projects/sskinnls.png",
    },
    {
      title: "Salt By The Caza Project",
      link: "https://saltbythecazaproject.com/",
      thumbnail:
        "/images/projects/sssalt.png",
    },
  
    {
      title: "GTA Vapes",
      link: "https://gtavapes.com/",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Type 2 Campers",
      link: "https://type2campers.com/",
      thumbnail:
        "/images/projects/sstype2campers.png",
    },
    {
      title: "Supportive Living",
      link: "https://www.supportiveliving.ca/",
      thumbnail:
        "/images/projects/sssupportiveliving.png",
    },
    {
      title: "Alabama Sawyer",
      link: "https://alasaw.com/",
      thumbnail:
        "/images/projects/ssalasaw.png",
    },
    {
      title: "Gemme Moi",
      link: "https://gemmemoi.ca/",
      thumbnail:
        "/images/projects/ssgemmemoi.png",
    },
  
    {
      title: "Bloom Robins",
      link: "https://www.bloomrobbins.com/",
      thumbnail:
        "/images/projects/ssbloom.png",
    },
    {
      title: "Posedla",
      link: "https://posedla.com/en-us",
      thumbnail:
        "/images/projects/ssposedla.png",
    },
    {
      title: "Umbra",
      link: "https://ca.umbra.com/",
      thumbnail:
        "/images/projects/ssumbra.png",
    },
    {
      title: "TCH Hardware",
      link: "https://ca.tchweb.com/",
      thumbnail:
        "/images/projects/sstch.png",
    }
  ];


const HeroParallax = ({
    products,
  }: {
    products: {
      title: string;
      link: string;
      thumbnail: string;
    }[];
  }) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
   
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
   
    const translateX = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, 1000]),
      springConfig
    );
    const translateXReverse = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, -1000]),
      springConfig
    );
    const rotateX = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [15, 0]),
      springConfig
    );
    const opacity = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
      springConfig
    );
    const rotateZ = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [20, 0]),
      springConfig
    );
    const translateY = useSpring(
      useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
      springConfig
    );
    return (
      <div
        ref={ref}
        className="h-full pt-40 pb-5 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <motion.div className="flex flex-row-reverse  space-x-12 xl:space-x-20 space-x-reverse mb-20">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20 space-x-12 xl:space-x-20">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 xl:space-x-20">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  };
   
  export const Header = () => {
    return (
      <div className="max-w-7xl xl:max-w-screen-2xl relative mx-auto py-20  px-6 lg:px-8 w-full left-0 top-0">
        <h1 className="text-4xl md:text-7xl font-bold text-textPrimary">
          The Ultimate <br /> Development Studio
        </h1>
        <p className="max-w-2xl text-base text-textPrimary md:text-xl mt-8">
          We build beautiful websites with the latest technologies and frameworks.
          We are a team of passionate developers and designers that love to build
          amazing shopping experiences.
        </p>
      </div>
    );
  };
   
  export const ProductCard = ({
    product,
    translate,
  }: {
    product: {
      title: string;
      link: string;
      thumbnail: string;
    };
    translate: MotionValue<number>;
  }) => {
    return (
      <motion.div
        style={{
          x: translate,
        }}
        whileHover={{
          y: -20,
        }}
        key={product.title}
        className="group/product h-48 w-[15rem] md:h-96 md:w-[30rem] relative flex-shrink-0"
      >
        <Link
          href={product.link}
          className="block group-hover/product:shadow-2xl "
        >
          <Image
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.title}
          />
        </Link>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {product.title}
        </h2>
      </motion.div>
    );
  };

export function HeroProjects() {
  return <HeroParallax products={products} />;
}



