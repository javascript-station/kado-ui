"use client";

import { HTMLAttributes, useEffect, useRef } from "react";

import { cn } from "../../utils/cn";
import OtpContext from "./OtpContext";

type OtpRootPropsT = HTMLAttributes<HTMLDivElement>;

function OtpRoot({ className, ...props }: OtpRootPropsT) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const getInputsValue = () => {
    return inputs?.current.map(input => input?.value || "").join("") || "";
  };

  return (
    <OtpContext value={{ inputs, getInputsValue }}>
      <div className={cn("f-align gap-1.5", className)} {...props} />
    </OtpContext>
  );
};

export default OtpRoot;