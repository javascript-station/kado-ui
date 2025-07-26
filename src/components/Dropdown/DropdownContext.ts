import { createContext, Dispatch, RefObject, SetStateAction } from 'react'

type DropdownContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  toggleRef: RefObject<HTMLButtonElement | null>;
  menuRef: RefObject<HTMLDivElement | null>;
}

const DropdownContext = createContext<DropdownContextT>({} as DropdownContextT);

export default DropdownContext;