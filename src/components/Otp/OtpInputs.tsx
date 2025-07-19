"use client";

import { ClipboardEvent, InputHTMLAttributes, KeyboardEvent, use } from "react";

import { cn } from "../../utils/cn";
import OtpContext from "./OtpContext";

type OtpInputsPropsT = InputHTMLAttributes<HTMLInputElement> & {
  length: number;
  onLastChange?: (otp: string) => void;
};

function OtpInputs({ className, name, length, onLastChange, ...props }: OtpInputsPropsT) {
  const { inputs, getInputsValue } = use(OtpContext);

  const handlePaste = (ev: ClipboardEvent<HTMLInputElement>, startIndex: number) => {
    ev.preventDefault();

    const pastedData = ev.clipboardData.getData("text").replace(/\s/g, ""); // Remove whitespace
    if (!pastedData) return;

    for (let i = 0; i < pastedData.length; i++) {
      const inputIndex = startIndex + i;
      if (inputIndex >= length) break; // Don't exceed OTP length

      const input = inputs?.current[inputIndex];
      if (input) {
        input.value = pastedData[i];
      }
    }

    const nextIndex = Math.min(startIndex + pastedData.length, length - 1);
    inputs?.current[nextIndex]?.focus();

    const otpValue = getInputsValue();
    if (otpValue.length === length) {
      onLastChange?.(otpValue);
    }
  };

  const handleInputChange = (value: string, index: number) => {
    if (value) {
      const currentInput = inputs?.current[index]
      if (currentInput) {
        currentInput.value = currentInput.value[currentInput.value.length - 1]
      }

      const nextInput = inputs?.current[index + 1]
      if (nextInput) {
        nextInput.value = "";
        nextInput.focus();

        return
      }

      onLastChange?.(getInputsValue());
    }
  };

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs?.current[index - 1]?.focus();
    }
  };

  return Array.from({ length }).map((_, index) => (
    <input
      key={index}
      autoComplete="off"
      name={`${name || "otp"}-${index}`}
      onPaste={ev => handlePaste(ev, index)}
      onKeyDown={ev => handleBackspace(ev, index)}
      onChange={ev => handleInputChange(ev.target.value, index)}
      className={cn("input-outline input-square text-center", className)}
      ref={el => {
        if (inputs) {
          inputs.current[index] = el;
        }
      }}
      {...props}
    />
  )
  );
}

export default OtpInputs;