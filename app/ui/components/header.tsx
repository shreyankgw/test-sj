'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";

// sticky megamenu and navigation menu with hamburger
export default function Header(){
    const [openNavbar, setOpenNavbar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    }

    const handleScroll = () => {
        if(window.scrollY >  scrollY || window.scrollY < 100){
            setIsSticky(false);
        }else{
            setIsSticky(true);
        }
       
        setScrollY(window.scrollY);
        console.log(scrollY, isSticky);
    }

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollY])

    return(
        <header className={`${isSticky ? "fixed top-0 inset-0" : ""} z-50 h-20 flex items-center w-full border-b border-b-gray-100 bg-bgPrimary bg-opacity-80 backdrop-filter backdrop-blur-xl`}>
        <div className="mx-auto lg:max-w-7xl xl:max-w-screen-2xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
            <nav className="flex justify-between items-center h-full">
                <div className="flex min-w-max items-center">
                    <Link href="/" className="flex items-center gap-x-2 text-3xl font-semibold text-gray-700 dark:text-gray-300">
                        <div className="flex items-center -space-x-3 font-semibold">
                            <Image src={"/logo.png"} alt="logo" width={256} height={256} className="h-10 w-full" />
                        </div>
                        EssDeeJay
                    </Link>
                </div>
                <div className={`
            flex flex-col space-y-10 inset-0 fixed top-0  h-[100dvh] bg-white dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
            transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
            ${openNavbar ? "visible opacity-100 translate-y-0" : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"}
          `}>
                    <ul className="flex flex-col gap-y-5 text-textPrimary text-lg lg:items-center lg:flex-row lg:gap-x-11 lg:h-full lg:justify-center lg:flex-1">
                        <li>
                            <Link href="#" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="transition ease-linear hover:text-gray-900 dark:hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
                        <ButtonPrimary title="Get Started" url="/" />
                    </div>
                </div>
                <div className="flex items-center justify-end relative z-60 lg:hidden">
                    <button onClick={() => {
                        toggleNavbar()
                    }} className="p-3 rounded-full bg-emerald-600 dark:bg-emerald-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
                        <span className="sr-only">
                            toggle navbar
                        </span>
                        <span className={`
                w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
                ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
              `} />
                        <span className={`
                w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "scale-x-0 opacity-0" : ""}
              `} />
                        <span className={`
                w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
              `} />
                    </button>
                </div>
            </nav>
        </div>
    </header>
    )
}
