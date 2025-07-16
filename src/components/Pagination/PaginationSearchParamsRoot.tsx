"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

import PaginationContext from "./PaginationContext";

type PaginationSearchParamsRootPropsT = PropsWithChildren & {
  pageKey?: string;
  pageLength: number
};

function PaginationSearchParamsRoot({ pageKey, pageLength, children }: PaginationSearchParamsRootPropsT) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(+(searchParams.get(pageKey || "page") || "1"));
  }, [pageKey, searchParams]);

  const pushRouter = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(pageKey || "page", page.toString());
    router.push("?" + params.toString())
  }

  const nextPage = () => {
    if (currentPage < pageLength) {
      pushRouter(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      pushRouter(currentPage - 1)
    }
  }

  return (
    <PaginationContext.Provider value={{ page: currentPage, pageLength, nextPage, prevPage }}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationSearchParamsRoot