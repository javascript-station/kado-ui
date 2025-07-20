"use client";

import { ButtonHTMLAttributes, use } from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { PasswordInputContext } from "./PasswordInputContext";

type PasswordInputTogglePropsT = ButtonHTMLAttributes<HTMLButtonElement>;

function PasswordInputToggle({ onClick, children, ...props }: PasswordInputTogglePropsT) {
  const { isVisible, setIsVisible } = use(PasswordInputContext);

  return (
    <button
      type="button"
      onClick={ev => {
        setIsVisible(prev => !prev);
        onClick?.(ev);
      }}
      {...props}
    >
      {children || (
        <AnimatePresence initial={false} mode="wait">
          {isVisible ? (
            <motion.div
              key="visible"
              className="compatible-icon"
              initial={{ opacity: 0, y: "-25%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "25%" }}
              transition={{ duration: 0.1 }}
            >
              <EyeIcon className="size-full" />
            </motion.div>
          ) : (
            <motion.div
              key="hidden"
              className="compatible-icon"
              initial={{ opacity: 0, y: "-25%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "25%" }}
              transition={{ duration: 0.1 }}
            >
              <EyeClosedIcon className="size-full" />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </button>
  );
}

export default PasswordInputToggle;