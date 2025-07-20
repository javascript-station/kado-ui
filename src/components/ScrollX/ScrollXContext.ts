import { createContext, RefObject } from "react";

type ScrollXContextPropsT = {
  scrollRef: RefObject<HTMLDivElement | null>;
}

const ScrollXContext = createContext<ScrollXContextPropsT>({} as ScrollXContextPropsT);

export default ScrollXContext;