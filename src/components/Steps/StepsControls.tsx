import { HTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import StepsContext from "./StepsContext";

type StepsControlsPropsT = HTMLAttributes<HTMLDivElement>;

function StepsControls({ className, ...props }: StepsControlsPropsT) {
  const { step, steps, setStep } = use(StepsContext)

  return (
    <>
      <div className={cn("f-align mb-[calc(1.5rem+0.75rem+0.375rem)]", className)} {...props}>
        {steps.map((item, index) => (
          <div
            key={index}
            className={`${index + 1 < steps.length ? "w-full" : "w-max"} f-align justify-between`}
          >
            <div className="f-center relative flex-col">
              <button
                onClick={() => step > index + 1 && setStep(index + 1)}
                className={`${step >= index + 1 ? "btn-fill" : "btn-ghost"} btn-square rounded-full`}
              >
                <span className="text-sm">{(index + 1)}</span>
              </button>
              <span
                className={`
                  f-align mt-1.5 h-3 w-max text-center text-xs absolute top-full
                  ${step === index + 1 ? "font-bold" : ""}
                  ${index === 0 ? "left-0" : index + 1 === steps.length ? "right-0" : ""}
                `}
              >
                {item.name}
              </span>
            </div>

            {index + 1 < steps.length ? (
              <div key={index} className="bg-foreground/10 flex h-1.5 flex-1 shrink-0">
                <div
                  className={`
                    bg-primary w-full origin-left h-full
                    ${step > index + 1 ? "scale-x-100" : step === index + 1 ? "scale-x-[50%]" : "scale-x-0"}
                  `}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {steps.find((_, index) => index + 1 === step)?.component}
    </>
  );
};

export default StepsControls;
