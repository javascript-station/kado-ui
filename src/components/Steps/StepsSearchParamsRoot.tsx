"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { StepsT } from "./stepsTypes";
import StepsContext from "./StepsContext";
import { useRouter, useSearchParams } from "next/navigation";

type StepsSearchParamsRootPropsT = PropsWithChildren & {
  stepKey?: string;
  steps: StepsT[];
};

function StepsSearchParamsRoot({ children, steps, stepKey }: StepsSearchParamsRootPropsT) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setCurrentStep(+(searchParams.get(stepKey || "step") || "1"));
  }, [stepKey, searchParams]);

  const pushRouter = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(stepKey || "step", page.toString());
    router.push("?" + params.toString())
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      pushRouter(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      pushRouter(currentStep - 1);
    }
  };

  return (
    <StepsContext.Provider value={{ step: currentStep, setStep: setCurrentStep, steps, nextStep, prevStep }}>
      {children}
    </StepsContext.Provider>
  )
}

export default StepsSearchParamsRoot