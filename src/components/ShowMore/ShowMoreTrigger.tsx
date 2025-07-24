import { ButtonHTMLAttributes, use } from "react";

import { cn } from "../../utils/cn";
import ShowmoreContext from "./ShowMoreContext";

type ShowMoreTriggerPropsT = ButtonHTMLAttributes<HTMLButtonElement>;

function ShowMoreTrigger({ onClick, className, ...p }: ShowMoreTriggerPropsT) {
  const { setIsShowMore } = use(ShowmoreContext);

  return (
    <button
      className={cn("relative", className)}
      onClick={ev => {
        onClick?.(ev);
        setIsShowMore(prev => !prev);
      }}
      {...p}
    />
  )
}

export default ShowMoreTrigger;