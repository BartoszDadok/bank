import { BaseToastProps } from "react-native-toast-message"
import { ToastMessage } from "./ToastMessage"

const toastConfig = {
  success: ({ text1: successMessage }: BaseToastProps) => {
    return <ToastMessage status="success" message={successMessage} />
  },

  error: ({ text1: errorMessage }: BaseToastProps) => {
    return <ToastMessage status="error" message={errorMessage} />
  },
}

export { toastConfig }
