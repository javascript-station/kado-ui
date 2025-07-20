"use client"

import { ButtonHTMLAttributes, use } from "react";

import ModalContext from "./ModalContext";

type ModalTogglePropsT = ButtonHTMLAttributes<HTMLButtonElement>;

function ModalToggle({ onClick, ...props }: ModalTogglePropsT) {
  const { setOpen } = use(ModalContext);

  return (
    <button
      onClick={(ev) => {
        onClick?.(ev);
        setOpen(prev => !prev);
      }}
      {...props}
    />
  );
};

export default ModalToggle;