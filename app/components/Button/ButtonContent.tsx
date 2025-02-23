import { PropsWithChildren } from "react";
import { ActivityIndicator, StyleProp, Text, TextStyle } from "react-native";
import { getButtonStyles } from "./Button.styles";
import { ButtonType } from "./Button.types";

type ButtonContentProps = {
  type: ButtonType;
  disabled: boolean;
  text?: string;
  isLoading?: boolean;
  customTextStyle?: StyleProp<TextStyle>;
  maxFontSizeMultiplier?: number;
};

const ButtonContent = ({
  type,
  disabled,
  text,
  isLoading,
  customTextStyle,
  children,
  maxFontSizeMultiplier = 1.2,
}: PropsWithChildren<ButtonContentProps>) => {
  const { textStyle } = getButtonStyles(type, disabled);

  if (isLoading) {
    return <ActivityIndicator testID="loading-indicator" size={"small"} color={"#000000"} />;
  }
  if (text) {
    return (
      <Text
        maxFontSizeMultiplier={maxFontSizeMultiplier}
        style={[textStyle, customTextStyle]}
      >
        {text}
      </Text>
    );
  }
  return children;
};

export { ButtonContent };
