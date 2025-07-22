import { createContext, Dispatch, SetStateAction } from "react";

export type RatingContextT = {
  hoverValue: number | null;
  setHoverValue: Dispatch<SetStateAction<number | null>>;
}

const RatingContext = createContext<RatingContextT>({} as RatingContextT);

export default RatingContext;