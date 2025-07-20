"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";

import { cn } from "../../utils/cn";
import CarouselContext from "./CarouselContext";

type CarouselRootPropsT = HTMLAttributes<HTMLDivElement>;

function CarouselRoot({ children, className, ...props }: CarouselRootPropsT) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [leftOpacity, setLeftOpacity] = useState(0);
  const [rightOpacity, setRightOpacity] = useState(1);

  const updateFade = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setLeftOpacity(0);
      setRightOpacity(0);
      return;
    }

    const scrollRatio = Math.abs(+(scrollLeft / maxScroll));

    const left = Math.min(1, scrollRatio * 2);
    const right = Math.min(1, (1 - scrollRatio) * 2);

    setLeftOpacity(+left.toFixed(1));
    setRightOpacity(+right.toFixed(1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateFade();

    el.addEventListener("scroll", updateFade);
    window.addEventListener("resize", updateFade);

    return () => {
      el.removeEventListener("scroll", updateFade);
      window.removeEventListener("resize", updateFade);
    };
  }, []);

  return (
    <CarouselContext value={{ scrollRef }}>
      <div className={cn("relative", className)} {...props}>
        {/* Left Fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-background from-5% to-transparent z-10 transition-opacity"
          style={{ opacity: leftOpacity }}
        />
        {/* --- */}

        {/* Scrollable container */}
        {children}
        {/* --- */}

        {/* Right Fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-background from-5% to-transparent z-10 transition-opacity"
          style={{ opacity: rightOpacity }}
        />
        {/* --- */}
      </div>
    </CarouselContext>
  );
}

export default CarouselRoot;
