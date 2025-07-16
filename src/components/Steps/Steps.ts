import StepsPrevBtn from "./StepsPrevBtn";
import StepsNextBtn from "./StepsNextBtn";
import StepsControls from "./StepsControls";
import StepsStateRoot from "./StepsStateRoot";
import StepsSearchParamsRoot from "./StepsSearchParamsRoot";

const baseComponents = {
  Controls: StepsControls,
  PrevBtn: StepsPrevBtn,
  NextBtn: StepsNextBtn
}

export const StepsWithState = Object.assign(StepsStateRoot, baseComponents);

export const StepsWithSearchParams = Object.assign(StepsSearchParamsRoot, baseComponents);