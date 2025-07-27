import { createContext, ReactNode } from "react";

type BreadcrumbsContextT = {
  separator: ReactNode;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextT>({} as BreadcrumbsContextT);

export default BreadcrumbsContext;