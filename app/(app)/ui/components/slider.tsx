"use client";

import { motion } from "framer-motion";
import { ImagesSlider } from "./image-slider";

const sliderImages = [
  "../images/slider_1.jpg",
  "../images/slider_2.jpg",
  "../images/slider_3.jpg",
];

export default function Slider() {
  return (
    <ImagesSlider
      overlay={true}
      overlayClassName="bg-black bg-opacity-60"
      autoplay={true}
      direction="down"
      images={sliderImages}
      className="lg:h-screen h-[40rem] w-full"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Shopify Mastery Fueled By <br/> Passion.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
