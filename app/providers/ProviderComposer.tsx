import { SafeAreaProvider } from "react-native-safe-area-context";
import { cloneElement, PropsWithChildren } from "react";
import { QueryClientProvider } from "./QueryClientProvider";
import { ModalsProvider } from "./ModalsProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styles } from "./ProviderComposer.styles";

const providers = [
  <QueryClientProvider children />,
  <SafeAreaProvider />,
  <GestureHandlerRootView style={styles.container} />,
  <ModalsProvider />,
];

const ProviderComposer = ({ children }: PropsWithChildren) =>
  providers.reduceRight(
    (kids, parent) => cloneElement(parent, { children: kids }),
    children
  );

export { ProviderComposer };
