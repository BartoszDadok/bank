import { Pressable, Text, View } from "react-native";
import { styles } from "./InvoiceItem.styles";
import { Invoice } from "@/app/api/tanstack-api/invoices";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "@/app/theme";
import { useModal } from "@/app/providers/ModalsProvider";

type InvoiceItemProps = {
  invoice: Invoice;
};
const InvoiceItem = ({ invoice }: InvoiceItemProps) => {
  const {
    invoiceDrawerModal: { handleOpen: openInvoiceDrawerModal },
  } = useModal();

  const onPressInvoice = () => {
    openInvoiceDrawerModal(invoice);
  };

  return (
    <Pressable style={styles.itemContainer} onPress={onPressInvoice}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{invoice.receiver}</Text>
      </View>
      <View style={styles.dotsIconContainer}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={24}
          color={theme.pallette.text[200]}
        />
      </View>
    </Pressable>
  );
};

export { InvoiceItem };
