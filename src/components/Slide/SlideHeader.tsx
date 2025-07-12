import { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type SlideHeaderPropsT = HTMLAttributes<HTMLHeadingElement>

function SlideHeader({ className, ...props }: SlideHeaderPropsT) {
  return (
    <header className={cn("h-20 f-align border-b border-foreground/10", className)} {...props} />
  );
};

export default SlideHeader;
