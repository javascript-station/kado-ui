import { createContext, Dispatch, SetStateAction } from "react";

type AccordionContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AccordionContext = createContext<AccordionContextT>({
  isOpen: false,
  setOpen: () => { }
})

export default AccordionContext;