"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Box from "./Box";
import { ToastT } from "./types";
import { useToast } from "./store";

type IndexPropsT = {
  defaultDuration?: ToastT["duration"]
}

function Toaster({ defaultDuration }: IndexPropsT) {
  const toasts = useToast(store => store.toasts);
  const remove = useToast(store => store.remove);

  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true)
  }, [])

  useEffect(() => {
    if (!toasts.length) {
      return;
    }

    const lastToast = toasts[toasts.length - 1];

    const duration = lastToast.duration || defaultDuration || 1_000;

    console.log(duration);

    setTimeout(() => {
      remove(lastToast.id)
    }, duration)
  }, [toasts])

  if (!isClient) {
    return null;
  }

  return createPortal(
    <>
      <div className="max-h-screen py-3 space-y-3 fixed top-0 left-center w-fit">
        <AnimatePresence>
          {toasts.toReversed().map(item => (
            <motion.div
              key={item.id}
              className="origin-top"
              initial={{ opacity: 0, y: -10, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0 }}
            >
              <Box toast={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>,
    document.body
  )
}

export default Toaster;