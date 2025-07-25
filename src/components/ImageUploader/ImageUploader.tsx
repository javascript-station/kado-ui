"use client";

import { LoaderIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode, useRef, useState } from "react";

import { processImage } from "../../utils/processImage";

type ImageUploaderT = ButtonHTMLAttributes<HTMLButtonElement> & {
  multiple?: boolean;
  loader?: ReactNode;
  onError?: () => void;
  onUploadFiles: (files: File[]) => void;
};

const ImageUploader = ({ multiple, loader, onUploadFiles, onError, onClick, children, ...p }: ImageUploaderT) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files) return;

    setLoading(true);

    const fileArray = Array.from(ev.target.files);
    const processedFiles: File[] = [];

    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];

      const compressedFile = await processImage(file);

      if (!compressedFile) {
        setLoading(false);
        onError?.();

        return;
      }

      processedFiles.push(compressedFile);
    }

    onUploadFiles(processedFiles);
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={(ev) => {
          onClick?.(ev);
          fileRef.current?.click();
        }}
        {...p}
      >
        {loading ? loader || <LoaderIcon className="icon-size-3 animate-spin" /> : children}
      </button>

      <input
        type="file"
        ref={fileRef}
        accept="image/*"
        className="hidden"
        multiple={multiple}
        onChange={handleFileChange}
      />
    </>
  );
};

export default ImageUploader;
