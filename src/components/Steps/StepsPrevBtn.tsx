import { HTMLAttributes, use } from "react";
import { ChevronLeftIcon } from "lucide-react";

import StepsContext from "./StepsContext";

type StepsPrevBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

function StepsPrevBtn({ onClick, disabled, children, ...props }: StepsPrevBtnPropsT) {
  const { step, prevStep } = use(StepsContext);

  return (
    <button
      disabled={disabled || step === 1}
      onClick={ev => {
        onClick?.(ev);
        prevStep();
      }}
      {...props}
    >
      {children || <ChevronLeftIcon className="compatible-icon" />}
    </button>
  );
}

export default StepsPrevBtn;
