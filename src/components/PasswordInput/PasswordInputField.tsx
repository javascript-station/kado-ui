"use client";

import { InputHTMLAttributes, use } from "react";
import { PasswordInputContext } from "./PasswordInputContext";

type PasswordInputFieldPropsT = InputHTMLAttributes<HTMLInputElement>;

function PasswordInputField(props: PasswordInputFieldPropsT) {
  const { isVisible } = use(PasswordInputContext);

  return (
    <input type={isVisible ? "text" : "password"} {...props} />
  );
};

export default PasswordInputField;