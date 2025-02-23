import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { preventAutoHideAsync } from "expo-splash-screen";
import { useEffect } from "react";
import { Modals } from "@/app/components/Modals";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/app/components/Toast";
import { BOTTOM_TOAST_OFFSET } from "../utils";
import {
  PDFViewer,
  VerifyInvoice,
  Invoices,
  PaymentMethods,
  Confirmation,
} from "@/app/screens";
import { Routes } from "./routes";

const RootStack = createNativeStackNavigator();

preventAutoHideAsync();

const Router = () => {
  const [loaded] = useFonts({
    "Lato-Light": require("../assets/fonts/LatoLight.ttf"),
    "Lato-Regular": require("../assets/fonts/LatoRegular.ttf"),
    "Lato-Bold": require("../assets/fonts/LatoBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={Routes.INVOICES} component={Invoices} />
        <RootStack.Screen name={Routes.PDF_VIEWER} component={PDFViewer} />
        <RootStack.Screen
          name={Routes.VERIFY_INVOICE}
          component={VerifyInvoice}
        />
        <RootStack.Screen
          name={Routes.PAYMENT_METHODS}
          component={PaymentMethods}
        />
        <RootStack.Screen name={Routes.CONFIRMATION} component={Confirmation} />
      </RootStack.Navigator>
      <Modals />
      <Toast
        config={toastConfig}
        position="bottom"
        bottomOffset={BOTTOM_TOAST_OFFSET}
      />
    </>
  );
};

export { Router };
