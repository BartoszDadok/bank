import { Text, View } from "react-native";
import { styles } from "./NoInvoices.styles";
import { theme } from "@/app/theme";
import { FontAwesome5 } from "@expo/vector-icons";

const NoInvoices = () => {
  return (
    <View style={styles.mainContainer}>
      <FontAwesome5
        name="file-invoice"
        size={64}
        color={theme.pallette.primary[300]}
      />
      <Text style={styles.title}>
        Looks like you have no invoices right now!
      </Text>
      <Text style={styles.subtitle}>
        No worries, it's easy to get started. Just click on the Upload Invoice
        button.
      </Text>
    </View>
  );
};

export { NoInvoices };
