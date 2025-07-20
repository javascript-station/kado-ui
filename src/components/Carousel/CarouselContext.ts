import { createContext, RefObject } from "react";

type CarouselContextPropsT = {
  scrollRef: RefObject<HTMLDivElement | null>;
}

const CarouselContext = createContext<CarouselContextPropsT>({} as CarouselContextPropsT);

export default CarouselContext;