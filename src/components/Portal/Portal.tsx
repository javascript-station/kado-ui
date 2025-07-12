"use client";

import { createPortal } from "react-dom";
import { PropsWithChildren } from "react";

type PortalPropsT = PropsWithChildren & {
  container?: Element;
};

function Portal({ children, container }: PortalPropsT) {
  return createPortal(
    <>
      {children}
    </>,
    container || document.body
  );
};

export default Portal;