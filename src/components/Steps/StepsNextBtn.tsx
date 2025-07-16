import { HTMLAttributes, use } from "react";
import { ChevronRightIcon } from "lucide-react";

import StepsContext from "./StepsContext";

type StepsNextBtnPropsT = HTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

function StepsNextBtn({ onClick, disabled, children, ...props }: StepsNextBtnPropsT) {
  const { step, steps, nextStep } = use(StepsContext);

  return (
    <button
      disabled={disabled || step === steps.length}
      onClick={ev => {
        onClick?.(ev);
        nextStep();
      }}
      {...props}
    >
      {children || <ChevronRightIcon className="compatible-icon" />}
    </button>
  );
}

export default StepsNextBtn;
