import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import { SheetContext } from "./SheetContext";

type SheetHeaderPropsT = HTMLAttributes<HTMLDivElement>;

function SheetHeader({ className, children, ...props }: SheetHeaderPropsT) {
  const { controls } = use(SheetContext);

  return (
    <div
      className={cn("h-7 f-center", className)}
      onPointerDown={(ev) => controls?.start(ev)}
      {...props}
    >
      {children || (
        <span className="h-1 w-1/3 rounded-full bg-foreground/10" />
      )}
    </div>
  );
};

export default SheetHeader;
