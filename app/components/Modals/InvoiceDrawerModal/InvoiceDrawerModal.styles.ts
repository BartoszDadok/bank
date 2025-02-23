import { Fonts } from "@/app/fonts";
import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  drawer: {
    paddingHorizontal: 20,
  },
  container: { height: 130, paddingVertical: 16 },
  button: {
    flex: 1,
    flexDirection: "row",
    gap: 12,
    width: "100%",
    paddingVertical: 8,
    marginBottom: 8,
  },
  buttonText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    color: theme.pallette.text[200],
  },
});

export { styles };
