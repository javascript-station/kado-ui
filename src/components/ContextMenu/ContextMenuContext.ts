import { createContext, RefObject } from 'react'

export type ContextMenuContextT = {
  isOpen: boolean;
  position: { x: number, y: number } | undefined;
  contentRef: RefObject<HTMLDivElement | null>;
}

const ContextMenuContext = createContext<ContextMenuContextT>({} as ContextMenuContextT);

export default ContextMenuContext;