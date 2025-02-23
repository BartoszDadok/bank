import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.pallette.primary[900],
    width: "100%",
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    marginLeft: 4,
    color: theme.pallette.text[200],
  },
});

export { styles };
