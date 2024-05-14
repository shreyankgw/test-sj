"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = ["Passion.", "Innovation.", "Creativity.", "Excellence.", "Commitment."];
const typingSpeed = 150;
const erasingSpeed = 50;
const delayBetweenWords = 2000;

export default function Hero() {

  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting ? currentWord.slice(0, displayWord.length - 1) : currentWord.slice(0, displayWord.length + 1);
      setDisplayWord(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayWord, isDeleting, wordIndex]);

  return (
    <section className="min-h-max">
      <div className="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-brandSecondary to-brandTertiary rounded-full opacity-25 blur-2xl"></div>
      <div className="relative mx-auto pt-32 pb-24 lg:max-w-7xl xl:max-w-screen-2xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-4">
        <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-bgPrimary">
        🔥 We Build Slick Shopify Stores
        </span>
        <div className="space-y-10">
          <h1 className="text-textPrimary mx-auto max-w-5xl xl:max-w-7xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
            Shopify Mastery Fueled By <br/>
            <span className="relative inline-block text-brandPrimary">{displayWord}<motion.span className="absolute top-0 right-0 h-full w-[2px] bg-brandPrimary animate-pulse"></motion.span></span>
          </h1>
          <p className="text-textSecondary mx-auto max-w-2xl lg:max-w-3xl text-base md:text-lg lg:text-2xl">
            Experience Shopify Mastery: where passion and expertise converge for
            a tailored online journey. Our dedicated team crafts digital
            excellence, elevating your brand in the dynamic e-commerce
            landscape. Your success, our commitment.
          </p>
          <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
            <Link
              href="#"
              className="flex items-center h-12 px-6 rounded-full bg-brandPrimary text-white border border-brandPrimary"
            >
              Work With Us 🤝
            </Link>
          </div>
          <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-100 border border-gray-100 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300">
            <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-textPrimary dark:text-white font-semibold text-lg">
                  Excellence
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                   We set high standards for our work &amp; we are dedicated team.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-textPrimary dark:text-white font-semibold text-lg">
                  Collaboration
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                We believe in the power of collaboration, working closely.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
              <div className="w-10">
                <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                  Integrity
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                   We uphold the highest ethical honesty in all our interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
