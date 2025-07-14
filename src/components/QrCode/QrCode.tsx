"use client";

import QRCode, { QRCodeRenderersOptions } from "qrcode";
import React, { HTMLAttributes, useEffect, useRef } from "react";

type QrCodePropsT = HTMLAttributes<HTMLCanvasElement> & {
  value: string
  options: QRCodeRenderersOptions;
}

function QrCode({ value, options, ...props }: QrCodePropsT) {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(value)
    QRCode.toCanvas(canvasRef.current, value, options, function (error) {
      if (error) console.error(error);
    });
  }, [value, options]);

  return <canvas ref={canvasRef} {...props} />;
}

export default QrCode;