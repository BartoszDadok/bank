import { useModal } from "@/app/providers/ModalsProvider";
import { InvoiceDrawerModal } from "./InvoiceDrawerModal";
import { UploadInvoiceModal } from "./UploadInvoiceModal";

const Modals = () => {
  const {
    invoiceDrawerModal: { isOpen: invoiceDrawerModalIsOpen },
    uploadInvoiceDrawerModal: { isOpen: uploadInvoiceDrawerModalIsOpen },
  } = useModal();
  return (
    <>
      {invoiceDrawerModalIsOpen && <InvoiceDrawerModal />}
      {uploadInvoiceDrawerModalIsOpen && <UploadInvoiceModal />}
    </>
  );
};

export { Modals };
