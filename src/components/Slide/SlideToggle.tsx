import React, { HTMLAttributes, use } from "react";

import SlideContext from "./SlideContext";

type SlideTogglePropsT = HTMLAttributes<HTMLButtonElement>;

function SlideToggle({ onClick, ...props }: SlideTogglePropsT) {
  const { setOpen } = use(SlideContext);

  return (
    <button
      onClick={ev => {
        onClick?.(ev);
        setOpen(prev => !prev);
      }}
      {...props}
    />
  );
};

export default SlideToggle;