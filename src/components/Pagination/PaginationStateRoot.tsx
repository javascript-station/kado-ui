"use client";

import { PropsWithChildren, useState } from "react";

import PaginationContext from "./PaginationContext";

type PaginationStateRootPropsT = PropsWithChildren & {
  pageLength: number
};

function PaginationStateRoot({ pageLength, children }: PaginationStateRootPropsT) {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < pageLength) {
      setPage(page + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <PaginationContext.Provider value={{ page, pageLength, nextPage, prevPage }}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationStateRoot