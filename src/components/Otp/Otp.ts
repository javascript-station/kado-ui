import OtpRoot from "./OtpRoot";
import OtpInputs from "./OtpInputs";
import OtpHiddenInput from "./OtpHiddenInput";

const Otp = Object.assign(OtpRoot, {
  Inputs: OtpInputs,
  HiddenInput: OtpHiddenInput
})

export default Otp;