"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <motion.div
            className="h-1 w-full bg-brandPrimary fixed top-0 left-0 right-0 z-50 transform origin-top-left"
            style={{ scaleX }}
        />
    );
}