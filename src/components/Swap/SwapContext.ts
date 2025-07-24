import { createContext } from "react";

type SwapContextT = {
  items: string[];
  activeItem: string;
  handleSwap: (newItem: string) => void;
}

const SwapContext = createContext<SwapContextT>({} as SwapContextT);

export default SwapContext;
