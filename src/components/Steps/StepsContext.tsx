import { createContext, Dispatch, SetStateAction } from "react";

import { StepsT } from "./stepsTypes";

type StepsContextT = {
  step: number;
  steps: StepsT[];
  setStep: Dispatch<SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
}

const StepsContext = createContext<StepsContextT>({
  step: 1,
  steps: [],
  setStep: () => { },
  nextStep: () => { },
  prevStep: () => { },
});

export default StepsContext;