import { createContext, Dispatch, SetStateAction } from "react";

type ModalContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextT>({
  isOpen: false,
  setOpen: () => { }
});

export default ModalContext;
