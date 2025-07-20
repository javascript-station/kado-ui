"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react"; 
import { cn } from "../../utils/cn";

type ClipboardProps = {
  text: string;
  className?: string;
  tooltip?: string;
};

export default function Clipboard({ text, className, tooltip = "Copy to clipboard" }: ClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 rounded text-sm border hover:bg-muted transition-colors",
        className
      )}
      title={copied ? "Copied!" : tooltip}
    >
      {copied ? <Check className="icon-size-2 text-green-600" /> : <Copy className="icon-size-2" />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
