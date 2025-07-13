"use client"

import { LoaderIcon } from "lucide-react";
import { useLinkStatus } from "next/link";
import { PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

type LinkLoaderPropsT = PropsWithChildren & {
  className?: string;
};

function LinkLoader({ children, className }: LinkLoaderPropsT) {
  const { pending } = useLinkStatus()

  return pending ? <LoaderIcon className={cn("compatible-icon animate-spin", className)} /> : children
}

export default LinkLoader;