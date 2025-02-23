import { View } from "react-native";
import { ScreenHeader } from "@/app/components/ScreenHeader";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/app/router/types";
import { Routes } from "@/app/router/routes";
import { Button } from "@/app/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./Confirmation.styles";
import { FontAwesome6 } from "@expo/vector-icons";
import { theme } from "@/app/theme";
import { usePayInvoice } from "@/app/api/tanstack-api/invoices";
import Toast from "react-native-toast-message";

const errorToastData = {
  type: "error",
  text1:
    "Something went wrong with payment! Please try again or contact our support!.",
};

const successToastData = {
  type: "success",
  text1: "Payment has been successfully processed!",
};

const Confirmation = () => {
  const { reset } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, Routes.CONFIRMATION>>();
  const { invoice, paymentOption } = route.params || {};
  const { bottom } = useSafeAreaInsets();
  const { mutateAsync } = usePayInvoice();

  const onPressConfirm = async () => {
    try {
      if (invoice && paymentOption) {
        const data = await mutateAsync({ invoice, paymentOption });
        if (data.status === "success") {
          reset({
            index: 0,
            routes: [{ name: Routes.INVOICES }],
          });
          Toast.show(successToastData);
        }
      }
    } catch (error) {
      Toast.show(errorToastData);
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <ScreenHeader title="Confirmation" />
      <View style={styles.content}>
        <FontAwesome6
          name="check-double"
          size={124}
          color={theme.pallette.text[200]}
        />
      </View>
      <Button
        buttonStyle={styles.buttonStyle}
        text="Confirm"
        onPress={onPressConfirm}
      />
    </View>
  );
};

export { Confirmation };
