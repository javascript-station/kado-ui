"use client";

import { ChevronUpIcon } from "lucide-react";
import { useState, useEffect, HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type AffixPropsT = HTMLAttributes<HTMLButtonElement>

const Affix = ({ className, onClick, "aria-label": ariaLabel, children, ...props }: AffixPropsT) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.5;

      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY && currentScrollY < scrollThreshold) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={ev => {
        onClick?.(ev)
        scrollToTop()
      }}
      aria-label={ariaLabel || "Scroll to top"}
      className={cn(
        "fixed bottom-3 right-4 transition-all z-50",
        isVisible ? "" : "opacity-0 translate-y-3 pointer-events-none",
        className
      )}
      {...props}
    >
      {children || <ChevronUpIcon className="compatible-icon" />}
    </button>
  );
};

export default Affix;