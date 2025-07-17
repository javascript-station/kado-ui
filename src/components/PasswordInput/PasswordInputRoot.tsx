"use client";

import { LabelHTMLAttributes, useState } from "react";
import { PasswordInputContext } from "./PasswordInputContext";

type PasswordInputRootPropsT = LabelHTMLAttributes<HTMLLabelElement>

function PasswordInputRoot(props: PasswordInputRootPropsT) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PasswordInputContext value={{ isVisible, setIsVisible }}>
      <label {...props} />
    </PasswordInputContext>
  )
}

export default PasswordInputRoot