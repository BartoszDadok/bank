import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    backgroundColor: theme.pallette.primary[900],
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 40,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    backgroundColor: theme.pallette.backdrop[900],
  },
  ornament: {
    alignSelf: "center",
    width: 125,
    height: 6,
    backgroundColor: theme.pallette.primary[200],
    borderRadius: 3,
    marginTop: 16,
    marginBottom: 8,
  },
});

export { styles };
