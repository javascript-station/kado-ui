import ModalBody from "./ModalBody";
import ModalRoot from "./ModalRoot";
import ModalHeader from "./ModalHeader";
import ModalPortal from "./ModalPortal";
import ModalToggle from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Modal = Object.assign(ModalRoot, {
  Toggle: ModalToggle,
  Portal: ModalPortal,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody
})

export default Modal;
