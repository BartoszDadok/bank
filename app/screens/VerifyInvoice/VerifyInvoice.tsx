import { Text, View } from "react-native";
import { styles } from "./VerifyInvoice.styles";
import { ScreenHeader } from "@/app/components/ScreenHeader";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/app/router/types";
import { Routes } from "@/app/router/routes";
import { Button } from "@/app/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const VerifyInvoice = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route =
    useRoute<RouteProp<RootStackParamList, Routes.VERIFY_INVOICE>>();
  const { invoice } = route.params || {};
  const { bottom } = useSafeAreaInsets();

  const onPressNext = () => {
    navigate(Routes.PAYMENT_METHODS, {
      invoice: invoice,
    });
  };
  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <ScreenHeader title="Verify Invoice" />
      <View style={styles.content}>
        <Text style={styles.title}>Receiver: {invoice?.receiver}</Text>
        <Text style={styles.title}>Amount: {invoice?.amount} kr</Text>
        <Text style={styles.title}>Due date: {invoice?.dueDate}</Text>
      </View>
      <Button
        buttonStyle={styles.buttonStyle}
        text="Next"
        onPress={onPressNext}
      />
    </View>
  );
};

export { VerifyInvoice };
