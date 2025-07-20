import ModalBody from "./ModalBody"
import ModalClose from "./ModalClose"
import ModalContent from "./ModalContent"
import ModalHeader from "./ModalHeader"
import ModalRoot from "./ModalRoot"
import ModalTrigger from "./ModalTrigger"

const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Close: ModalClose,
})

export default Modal
