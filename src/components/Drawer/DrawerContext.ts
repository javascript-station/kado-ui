import { createContext, Dispatch, SetStateAction } from "react";

type DrawerContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DrawerContext = createContext<DrawerContextT>({
  isOpen: false,
  setOpen: () => { }
});

export default DrawerContext;
