import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type ModalBodyPropsT = HTMLAttributes<HTMLDivElement>;

function ModalBody({ children, className, ...props }: ModalBodyPropsT) {
  return (
    <div className={cn("py-3 px-1.5 mx-1.5 max-h-[calc(100%-4rem)] overflow-y-auto", className)} {...props}>
      {children}
    </div>
  );
};

export default ModalBody;
