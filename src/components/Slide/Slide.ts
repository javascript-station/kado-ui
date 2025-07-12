import SlideRoot from "./SlideRoot";
import SlideHeader from "./SlideHeader";
import SlidePortal from "./SlidePortal";
import SlideToggle from "./SlideToggle";
import SlideContent from "./SlideContent";

const Slide = Object.assign(SlideRoot, {
  Portal: SlidePortal,
  Toggle: SlideToggle,
  Header: SlideHeader,
  Content: SlideContent
});

export default Slide;