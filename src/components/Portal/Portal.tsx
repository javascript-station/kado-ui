"use client";

import { createPortal } from "react-dom";
import { PropsWithChildren } from "react";

import ClientOnly from "../ClientOnly/ClientOnly";

type PortalPropsT = PropsWithChildren & {
  container?: Element;
};

function Portal({ children, container }: PortalPropsT) {
  return (
    <ClientOnly>
      {createPortal(
        <>
          {children}
        </>,
        container || document.body
      )}
    </ClientOnly>
  );
};

export default Portal;