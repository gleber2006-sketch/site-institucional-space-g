"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "var(--reveal-y, 24px)" }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "var(--reveal-y, 24px)" }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: delay,
      }}
      className={`[--reveal-y:16px] md:[--reveal-y:24px] ${className}`}
    >
      {children}
    </motion.div>
  );
}
