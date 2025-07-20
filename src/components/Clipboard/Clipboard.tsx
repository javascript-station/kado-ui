"use client";

import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { ButtonHTMLAttributes, MouseEvent } from "react";

import { useClipboard } from "@mantine/hooks";

type ClipboardPropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  timeout?: number;
};

function Clipboard({ onClick, children, text, timeout = 3_000, ...props }: ClipboardPropsT) {
  const { copy, copied } = useClipboard({ timeout });

  const handleClick = (ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onClick?.(ev);
    copy(text.trim());
  };

  return (
    <button
      aria-label={text}
      onClick={handleClick}
      {...props}
    >
      {copied ? (
        <CopyCheckIcon className="compatible-icon" />
      ) : (
        <CopyIcon className="compatible-icon" />
      )}

      {children}
    </button>
  );
}


export default Clipboard;