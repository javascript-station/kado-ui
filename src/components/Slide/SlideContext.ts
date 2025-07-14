import { createContext, Dispatch, SetStateAction } from "react";

type SlideContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SlideContext = createContext<SlideContextT>({
  isOpen: false,
  setOpen: () => { }
});

export default SlideContext;