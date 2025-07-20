import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type ModalHeaderPropsT = HTMLAttributes<HTMLDivElement>;

function ModalHeader({ className, ...props }: ModalHeaderPropsT) {
  return (
    <div className={cn("h-16 f-align px-3 bg-background rounded-t-2xl border-b border-separator sticky top-0", className)} {...props} />
  );
};

export default ModalHeader;