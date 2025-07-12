import { use } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { cn } from "../../utils/cn";
import { SheetContext } from "./SheetContext";

type SheetBodyPropsT = HTMLMotionProps<"div">;

function SheetBody({ className, ...props }: SheetBodyPropsT) {
  const { drawerRef, controls, y, closeHandler: handleClose } = use(SheetContext);

  return (
    <motion.div
      id="drawer"
      ref={drawerRef}
      onClick={(ev) => ev.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      style={{ y }}
      drag="y"
      dragControls={controls}
      dragListener={false}
      transition={{
        ease: "easeInOut",
      }}
      className={cn(
        "absolute bottom-0 h-[75%] w-full overflow-hidden bg-background",
        className
      )}
      onDragEnd={() => {
        if ((y?.get() || 0) >= 100) {
          handleClose();
        }
      }}
      dragConstraints={{
        top: 0,
        bottom: 0,
      }}
      dragElastic={{
        top: 0,
        bottom: 0.5,
      }}
      {...props}
    />
  );
};

export default SheetBody;
