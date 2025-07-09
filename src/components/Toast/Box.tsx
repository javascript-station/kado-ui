import { CheckIcon, CircleAlertIcon, TriangleAlertIcon, XIcon } from "lucide-react";

import { ToastT } from "./types";

type BoxPropsT = {
  toast: ToastT
}

function Box({ toast }: BoxPropsT) {
  let toastIcon = null;

  switch (toast.status) {
    case "info": {
      toastIcon = <CircleAlertIcon className="toast-icon-info" />;
      break;
    }

    case "success": {
      toastIcon = <CheckIcon className="toast-icon-success" />;
      break;
    }

    case "warning": {
      toastIcon = <TriangleAlertIcon className="toast-icon-warning" />;
      break;
    }

    case "error": {
      toastIcon = <XIcon className="toast-icon-error" />;
      break;
    }

    default: {
      toastIcon = null;
      break;
    }
  }

  return (
    <div className={toast.variant || "toast-fill"}>
      {toastIcon}
      {toast.data}
      {toast.action}
    </div>
  )
}

export default Box