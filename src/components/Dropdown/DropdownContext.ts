import { createContext, Dispatch, SetStateAction } from 'react'

type DropdownContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextT>({} as DropdownContextT);

export default DropdownContext;