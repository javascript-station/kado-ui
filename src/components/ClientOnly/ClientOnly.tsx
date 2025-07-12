"use client";

import { PropsWithChildren } from "react";
import { useMounted } from "@mantine/hooks";

type ClientOnlyPropsT = PropsWithChildren;

function ClientOnly({ children }: ClientOnlyPropsT) {
  const mounted = useMounted();

  return mounted ? children : null;
};

export default ClientOnly;