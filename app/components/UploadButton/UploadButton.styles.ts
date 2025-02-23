import { Fonts } from "@/app/fonts";
import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    height: 48,
    right: 15,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.pallette.primary[700],
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    flex: 1,
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    lineHeight: 24,
    color: "white",
  },
});

export { styles };
