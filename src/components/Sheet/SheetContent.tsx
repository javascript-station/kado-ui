import { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type SheetContentPropsT = HTMLAttributes<HTMLDivElement>;

function SheetContent({ className, ...props }: SheetContentPropsT) {
  return <div className={cn("overflow-y-auto h-[calc(100%-1.75rem)] px-3 pb-3", className)} {...props} />;
};

export default SheetContent;
