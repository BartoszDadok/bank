import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: theme.pallette.primary[900],
  },
  pdf: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: theme.pallette.primary[900],
  },
});

export { styles };
