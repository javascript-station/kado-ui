"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { useElementSize } from "@mantine/hooks";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";

import { SheetContext } from "./SheetContext";

type SheetRootPropsT = PropsWithChildren;

function SheetRoot({ children }: SheetRootPropsT) {
  const { ref: drawerRef, height } = useElementSize();

  const y = useMotionValue(0);
  const controls = useDragControls();
  const [scope, animate] = useAnimate();

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const removeOverflow = () => {
      document.body.classList.remove("overflow-hidden");
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      removeOverflow();
    }

    return () => removeOverflow();
  }, [isOpen]);

  const closeHandler = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <SheetContext value={{ isOpen, setOpen, closeHandler, drawerRef, scope, controls, y }}>
      {children}
    </SheetContext>
  );
};

export default SheetRoot;
