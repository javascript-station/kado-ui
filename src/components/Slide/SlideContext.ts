import { createContext, Dispatch, SetStateAction } from "react";

export const SlideContext = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setOpen: () => { }
});