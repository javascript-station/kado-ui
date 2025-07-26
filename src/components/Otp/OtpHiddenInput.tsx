"use client";

import { InputHTMLAttributes, use } from "react";

import OtpContext from "./OtpContext";

type OtpHiddenInputPropsT = InputHTMLAttributes<HTMLInputElement>;

function OtpHiddenInput({ name, ...p }: OtpHiddenInputPropsT) {
  const { getInputsValue } = use(OtpContext);

  return (
    <input type="hidden" tabIndex={-1} name={name || "otp"} value={getInputsValue()} {...p} />
  )
}

export default OtpHiddenInput;