import { PropsWithChildren, createContext, useContext, useState } from "react";
import { View } from "react-native";
import { styles } from "./ModalsProvider.styles";
import { Invoice } from "@/app/api/tanstack-api/invoices";

type ModalsContextType = {
  invoiceDrawerModal: {
    isOpen: boolean;
    handleClose: () => void;
    handleOpen: (invoiceDrawerData: Invoice) => void;
    invoiceDrawerData: Invoice | null;
  };
  uploadInvoiceDrawerModal: {
    isOpen: boolean;
    handleClose: () => void;
    handleOpen: () => void;
  };
};

const ModalsContext = createContext<ModalsContextType | null>(null);

const ModalsProvider = ({ children }: PropsWithChildren) => {
  const [invoiceDrawerData, setInvoiceDrawerData] = useState<Invoice | null>(
    null
  );
  const [uploadInvoiceDrawerData, setUploadInvoiceDrawerData] =
    useState<boolean>(false);

  const modals: ModalsContextType = {
    invoiceDrawerModal: {
      isOpen: Boolean(
        invoiceDrawerData && Object.keys(invoiceDrawerData).length > 0
      ),
      handleClose: () => setInvoiceDrawerData(null),
      handleOpen: (invoiceDrawerData: Invoice) =>
        setInvoiceDrawerData(invoiceDrawerData),
      invoiceDrawerData,
    },
    uploadInvoiceDrawerModal: {
      isOpen: uploadInvoiceDrawerData,
      handleClose: () => setUploadInvoiceDrawerData(false),
      handleOpen: () => setUploadInvoiceDrawerData(true),
    },
  };

  return (
    <ModalsContext.Provider value={modals}>
      <View style={styles.modalContainer}>{children}</View>
    </ModalsContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export { ModalsProvider, useModal };
