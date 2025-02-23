import { Text, View } from "react-native";
import { ScreenHeader } from "@/app/components/ScreenHeader";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/app/router/types";
import { Routes } from "@/app/router/routes";
import { Button } from "@/app/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./PaymentMethods.styles";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import { theme } from "@/app/theme";
import { PaymentOptions } from "./PaymentMethods.types";

const PaymentMethods = () => {
  const [paymentOption, setPaymentOption] = useState<PaymentOptions | null>(
    null
  );
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, Routes.CONFIRMATION>>();
  const { invoice } = route.params || {};
  const { bottom } = useSafeAreaInsets();

  const onPressNext = () => {
    if (invoice && paymentOption) {
      navigate(Routes.CONFIRMATION, {
        invoice: invoice,
        paymentOption: paymentOption,
      });
    }
  };
  const onValueChange = (paymentValue: PaymentOptions) => {
    if (paymentOption === paymentValue) {
      setPaymentOption(null);
    } else {
      setPaymentOption(paymentValue);
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <ScreenHeader title="Payment options" />
      <View style={styles.content}>
        <Text style={styles.title}>When do you want to pay?</Text>
        <View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              testID="payNow"
              onTintColor={theme.pallette.primary[500]}
              onCheckColor={theme.pallette.primary[500]}
              tintColor={theme.pallette.text[200]}
              tintColors={{
                true: theme.pallette.primary[500],
                false: theme.pallette.text[200],
              }}
              disabled={false}
              value={paymentOption === "now"}
              onValueChange={() => onValueChange("now")}
            />
            <Text style={styles.label}>Pay now</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              onTintColor={theme.pallette.primary[500]}
              onCheckColor={theme.pallette.primary[500]}
              tintColor={theme.pallette.text[200]}
              tintColors={{
                true: theme.pallette.primary[500],
                false: theme.pallette.text[200],
              }}
              disabled={false}
              value={paymentOption === "month"}
              onValueChange={() => onValueChange("month")}
            />
            <Text style={styles.label}>Pay in 30 days</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              onTintColor={theme.pallette.primary[500]}
              onCheckColor={theme.pallette.primary[500]}
              tintColor={theme.pallette.text[200]}
              tintColors={{
                true: theme.pallette.primary[500],
                false: theme.pallette.text[200],
              }}
              disabled={false}
              value={paymentOption === "year"}
              onValueChange={() => onValueChange("year")}
            />
            <Text style={styles.label}>Split in 12 months</Text>
          </View>
        </View>
      </View>
      <Button
        buttonStyle={[
          styles.buttonStyle,
          {
            opacity: paymentOption ? 1 : 0.5,
          },
        ]}
        text="Next"
        onPress={onPressNext}
        disabled={!paymentOption}
      />
    </View>
  );
};

export { PaymentMethods };
