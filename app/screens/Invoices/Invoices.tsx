import { useInvoices } from "@/app/api/tanstack-api/invoices";
import { View } from "react-native";
import { styles } from "./Invoices.styles";
import { useEffect, useState } from "react";
import { UploadButton } from "@/app/components/UploadButton/UploadButton";
import { InvoicesList } from "./InvoicesList";
import { Loading } from "@/app/components/Loading";
import { NoInvoices } from "./NoInvoices";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenHeader } from "@/app/components/ScreenHeader";
import { useModal } from "@/app/providers/ModalsProvider";
import Toast from "react-native-toast-message";

const errorToastData = {
  type: "error",
  text1: "Something went wrong! Please try again.",
};

const Invoices = () => {
  const { data: invoicesData, isLoading, error } = useInvoices();
  const [expandUploadButton, setExpandUploadButton] = useState(true);
  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const { bottom } = useSafeAreaInsets();

  const {
    uploadInvoiceDrawerModal: { handleOpen: openUploadInvoiceDrawerModal },
  } = useModal();

  const render = () => {
    if (isLoading) return <Loading testID="loading" />;
    if (!invoicesData?.length) return <NoInvoices />;
    return (
      <InvoicesList
        invoices={invoicesData}
        scrollOffset={scrollOffset}
        setScrollOffset={setScrollOffset}
        setExpandBottom={setExpandUploadButton}
      />
    );
  };

  const onUploadInvoice = () => {
    openUploadInvoiceDrawerModal();
  };

  useEffect(() => {
    if (error) {
      Toast.show(errorToastData);
    }
  }, [error]);

  return (
    <View style={[styles.mainContainer, { paddingBottom: bottom }]}>
      <ScreenHeader title="Invoices" arrowBackEnabled={false} />
      {render()}
      {!isLoading && (
        <UploadButton
          callback={onUploadInvoice}
          buttonText={"Upload Invoice"}
          expandButton={expandUploadButton}
          textStyle={styles.textButton}
        />
      )}
    </View>
  );
};

export { Invoices };
