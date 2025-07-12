import { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

type SlideContentPropsT = HTMLAttributes<HTMLDivElement>;

function SlideContent({ className, ...props }: SlideContentPropsT) {
  return <div className={cn("h-[calc(100dvh-5rem)] py-3 overflow-y-auto", className)} {...props} />;
};

export default SlideContent;
