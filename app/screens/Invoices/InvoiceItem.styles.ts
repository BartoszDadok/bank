import { Fonts } from "@/app/fonts";
import { theme } from "@/app/theme";

import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: theme.pallette.primary[800],
    marginBottom: 16,
    height: 55,
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
    ...Platform.select({
      ios: {
        shadowColor: theme.pallette.primary[700],
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    color: theme.pallette.text[200],
  },
  dotsIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
