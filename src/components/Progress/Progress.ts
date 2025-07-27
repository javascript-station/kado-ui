import ProgressBar from "./ProgressBar";
import ProgressRoot from "./ProgressRoot";

const Progress = Object.assign(ProgressRoot, {
  Bar: ProgressBar
})

export default Progress;