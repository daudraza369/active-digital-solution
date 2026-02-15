"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeIn";
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${!visible ? "elementor-invisible opacity-0" : ""} ${className}`}
      style={
        visible
          ? {
              animation: `${animation} 0.6s ease-out ${delay}ms both`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
