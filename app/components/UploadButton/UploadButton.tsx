import { ReactElement, useEffect, useState } from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./UploadButton.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@/app/theme";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const BUTTON_MARGIN_BOTTOM = 10;
const BUTTON_MINIMUM_WIDTH = 45;
const PADDING_HORIZONTAL = 18;

type BottomBlueCTAProps = {
  buttonText: string;
  expandButton: boolean;
  buttonWidth?: number;
  icon?: ReactElement;
  textStyle?: StyleProp<TextStyle>;
  callback?: () => void;
};

const UploadButton = ({
  buttonText,
  expandButton,
  buttonWidth = 200,
  icon,
  textStyle,
  callback,
}: BottomBlueCTAProps) => {
  const { bottom } = useSafeAreaInsets();
  const [showButtonText, setShowButtonText] = useState(true);
  const animatedHeight = useSharedValue(buttonWidth);

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    width: animatedHeight.value,
  }));

  useEffect(() => {
    setShowButtonText(expandButton);
    animatedHeight.value = withTiming(
      expandButton ? buttonWidth : BUTTON_MINIMUM_WIDTH
    );
  }, [expandButton]);

  return (
    <AnimatedTouchableOpacity
      style={[
        styles.button,
        { bottom: bottom + BUTTON_MARGIN_BOTTOM },
        buttonAnimatedStyle,
      ]}
      onPress={callback}
    >
      <View
        style={[
          styles.contentContainer,
          {
            paddingHorizontal: showButtonText ? PADDING_HORIZONTAL : 0,
          },
        ]}
      >
        {icon || (
          <MaterialCommunityIcons
            name="plus"
            size={24}
            color={theme.pallette.primary[300]}
          />
        )}
        {showButtonText && (
          <Text
            maxFontSizeMultiplier={1}
            numberOfLines={1}
            style={[styles.text, textStyle]}
          >
            {buttonText}
          </Text>
        )}
      </View>
    </AnimatedTouchableOpacity>
  );
};

export { UploadButton };
