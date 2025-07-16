"use client";

import { PropsWithChildren, useState } from "react";

import PaginationContext from "./PaginationContext";

type PaginationStateRootPropsT = PropsWithChildren & {
  pageLength: number;
};

function PaginationStateRoot({ pageLength, children }: PaginationStateRootPropsT) {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(prev => prev < pageLength ? prev + 1 : prev);

  const prevPage = () => setPage(prev => prev > 1 ? prev - 1 : prev);

  return (
    <PaginationContext.Provider value={{ page, pageLength, nextPage, prevPage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationStateRoot;