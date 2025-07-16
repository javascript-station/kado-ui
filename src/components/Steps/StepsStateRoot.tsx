"use client";

import { PropsWithChildren, useState } from "react";

import { SteptsT } from "./stepsTypes";
import StepsContext from "./StepsContext";

type StepsStateRootPropsT = PropsWithChildren & {
  steps: SteptsT[];
};

function StepsStateRoot({ children, steps }: StepsStateRootPropsT) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  return (
    <StepsContext.Provider value={{ step, setStep, steps, nextStep, prevStep }}>
      {children}
    </StepsContext.Provider>
  );
}

export default StepsStateRoot;