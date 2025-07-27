import { createContext } from "react";

type ProgressContextT = {
  value: number;
  maxValue: number;
}

const ProgressContext = createContext<ProgressContextT>({} as ProgressContextT);

export default ProgressContext;