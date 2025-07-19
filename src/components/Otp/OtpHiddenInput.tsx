"use client";

import { InputHTMLAttributes, use } from "react";

import OtpContext from "./OtpContext";

type OtpHiddenInputPropsT = InputHTMLAttributes<HTMLInputElement>;

function OtpHiddenInput({ name, ...props }: OtpHiddenInputPropsT) {
  const { getInputsValue } = use(OtpContext);

  return (
    <input type="hidden" name={name || "otp"} value={getInputsValue()} {...props} />
  )
}

export default OtpHiddenInput