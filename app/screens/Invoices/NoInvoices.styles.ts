import { Fonts } from "@/app/fonts";
import { theme } from "@/app/theme/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.REGULAR,
    lineHeight: 27,
    color: theme.pallette.text[200],
    marginTop: 32,
    textAlign: "center",
    width: "100%",
    paddingHorizontal: 18,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: Fonts.REGULAR,
    lineHeight: 24,
    color: theme.pallette.text[300],
    textAlign: "center",
    width: "100%",
    marginTop: 16,
    paddingHorizontal: 40,
  },
});

export { styles };
