import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: theme.pallette.primary[900],
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: theme.pallette.primary[300],
    borderTopColor: "transparent",
    borderRadius: 25,
  },
});

export { styles };
