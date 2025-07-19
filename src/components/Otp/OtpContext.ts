import { createContext, RefObject } from "react";

type createContextT = {
  inputs?: RefObject<(HTMLInputElement | null)[]>;
  getInputsValue: () => string
};

const OtpContext = createContext<createContextT>({
  getInputsValue: () => ""
});

export default OtpContext;
