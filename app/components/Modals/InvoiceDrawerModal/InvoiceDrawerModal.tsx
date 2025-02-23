import { Text, TouchableOpacity, View } from "react-native";
import { GenericDrawer } from "../GenericDrawer/GenericDrawer";
import { useModal } from "@/app/providers/ModalsProvider";
import { styles } from "./InvoiceDrawerModal.styles";
import { theme } from "@/app/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/router/types";
import { Routes } from "@/app/router/routes";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const InvoiceDrawerModal = () => {
  const {
    invoiceDrawerModal: { handleClose, invoiceDrawerData },
  } = useModal();

  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onOpenInvoice = () => {
    handleClose();
    navigate(Routes.PDF_VIEWER, {
      url: invoiceDrawerData?.invoiceUrl || "",
    });
  };

  const onPayInvoice = () => {
    handleClose();
    navigate(Routes.VERIFY_INVOICE, {
      invoice: invoiceDrawerData || undefined,
    });
  };

  return (
    <GenericDrawer style={styles.drawer} handleClose={handleClose}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onOpenInvoice} style={styles.button}>
          <Entypo name="open-book" size={24} color={theme.pallette.text[200]} />
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPayInvoice} style={styles.button}>
          <MaterialIcons
            name="payment"
            size={24}
            color={theme.pallette.text[200]}
          />
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </GenericDrawer>
  );
};

export { InvoiceDrawerModal };
