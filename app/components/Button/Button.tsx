import { TouchableOpacity } from "react-native";
import { getButtonStyles } from "./Button.styles";
import { ButtonProps } from "./Button.types";
import { ButtonContent } from "./ButtonContent";

const Button = ({
  onPress,
  testID,
  type = "primary",
  text,
  disabled = false,
  buttonStyle,
  textStyle: customTextStyle,
  children,
  isLoading,
  maxFontSizeMultiplier = 1.2,
}: ButtonProps) => {
  const { containerStyle } = getButtonStyles(type, disabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[containerStyle, buttonStyle]}
      testID={testID}
    >
      <ButtonContent
        type={type}
        disabled={disabled}
        text={text}
        customTextStyle={customTextStyle}
        isLoading={isLoading}
        maxFontSizeMultiplier={maxFontSizeMultiplier}
      >
        {children}
      </ButtonContent>
    </TouchableOpacity>
  );
};

export { Button };
