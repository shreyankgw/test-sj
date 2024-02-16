"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type props = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export const Slide = ({ children, className, delay }: props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("stop");
        }
    }, [controls,isInView]);

    return (
        <motion.div
            ref={ref}
            variants={{
                start: { opacity: 0, translateY: 10 },
                stop: { opacity: 1, translateY: 0 }
            }}
            animate={controls}
            initial="start"
            transition={{ ease: "easeInOut", duration: 0.3, delay: delay, stiffness: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};