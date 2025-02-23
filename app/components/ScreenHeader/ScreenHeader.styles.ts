import { Fonts } from "@/app/fonts";
import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const ARROW_WIDTH = 30;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 120,
    alignContent: "center",
    flexDirection: "row",
  },
  title: {
    fontFamily: Fonts.REGULAR,
    fontSize: 24,
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    color: theme.pallette.text[200],
  },
  button: {
    width: ARROW_WIDTH,
    justifyContent: "center",
  },
});

export { styles, ARROW_WIDTH };
