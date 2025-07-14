import AccordionBody from "./AccordionBody";
import AccordionRoot from "./AccordionRoot";
import AccordionToggle from "./AccordionToggle";

const Accordion = Object.assign(AccordionRoot, {
  Toggle: AccordionToggle,
  Body: AccordionBody
});

export default Accordion;