"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@mantine/hooks";
import { motion, AnimatePresence } from "framer-motion";

import Box from "./Box";
import { ToastT } from "./types";
import { useStore } from "./store";

type IndexPropsT = {
  defaultDuration?: ToastT["duration"]
}

function Index({ defaultDuration }: IndexPropsT) {
  const mounted = useMounted();

  const toasts = useStore(store => store.toasts);
  const remove = useStore(store => store.remove);

  useEffect(() => {
    if (!toasts.length) {
      return;
    }

    const lastToast = toasts[toasts.length - 1];

    const duration = lastToast.duration || defaultDuration || 2_000;
    setTimeout(() => {
      remove(lastToast.id)
    }, duration)
  }, [toasts])

  if (!mounted) {
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

export default Index;