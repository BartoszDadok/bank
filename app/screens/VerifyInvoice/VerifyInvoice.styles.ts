import { Fonts } from "@/app/fonts";
import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.pallette.primary[900],
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginBottom: 80,
  },
  title: {
    fontFamily: Fonts.REGULAR,
    fontSize: 18,
    color: theme.pallette.text[200],
  },
  buttonStyle: {
    alignSelf: "center",
    width: "90%",
    marginBottom: 10,
    backgroundColor: theme.pallette.primary[500],
  },
});

export { styles };
