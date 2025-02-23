import { Fonts } from "@/app/fonts";
import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.pallette.primary[900],
    flex: 1,
    paddingHorizontal: 16,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: Fonts.BOLD,
    fontSize: 18,
    color: theme.pallette.text[200],
    marginBottom: 32,
  },
  buttonStyle: {
    alignSelf: "center",
    width: "90%",
    marginBottom: 10,
    backgroundColor: theme.pallette.primary[500],
  },
  label: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    color: theme.pallette.text[200],
  },
});

export { styles };
