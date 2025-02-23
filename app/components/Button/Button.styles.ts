import { StyleSheet } from "react-native";
import { ButtonType } from "./Button.types";
import { Fonts } from "@/app/fonts";

const getPrimaryButtonStyles = (disabled: boolean) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: disabled ? "#FFFFFF14" : "#fcb926",
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    textStyle: {
      fontSize: 16,
      fontFamily: Fonts.REGULAR,
      color: disabled ? "#FFFDE9" : "#000000",
    },
  });
const getSecondaryButtonStyles = (disabled: boolean) =>
  StyleSheet.create({
    containerStyle: {
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    textStyle: {
      fontSize: 16,
      fontFamily: Fonts.REGULAR,
      color: disabled ? "#FFFDE9" : "#000000",
    },
  });

const getButtonStyles = (type: ButtonType, disabled: boolean) =>
  ({
    primary: getPrimaryButtonStyles(disabled),
    secondary: getSecondaryButtonStyles(disabled),
  }[type]);

export { getButtonStyles };
