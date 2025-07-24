import { createContext, Dispatch, RefObject, SetStateAction } from "react";

type ShowmoreContextT = {
  contentRef: RefObject<HTMLDivElement | null>;
  shouldShowMore: boolean;
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
  maxHeight: number;
}

const ShowmoreContext = createContext<ShowmoreContextT>({} as ShowmoreContextT);

export default ShowmoreContext;