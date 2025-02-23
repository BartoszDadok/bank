import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useState } from "react";
import {
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./GenericDrawer.styles";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const OVERDRAG = 10;
const BOTTOM_OFFSET = 24;
const ANIMATION_DURATION = 100;

type Props = {
  children: React.ReactNode;
  handleClose: () => void;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};
const GenericDrawer = ({ children, handleClose, style, onPress }: Props) => {
  const offset = useSharedValue(0);
  const [contentHeight, setContentHeight] = useState(0);
  const toggleSheet = () => {
    offset.value = withTiming(
      contentHeight,
      { duration: ANIMATION_DURATION, easing: Easing.linear },
      (isFinished) => {
        if (isFinished) {
          runOnJS(handleClose)();
        }
      }
    );
  };

  const gestureAnimationPan = Gesture.Pan()
    .onChange((event) => {
      // Offset delta can be positive or negative value, if is negative the gesture is from down to up. If positive form up to down.
      const offsetDelta = event.changeY + offset.value;
      const clamp = Math.max(-OVERDRAG, offsetDelta);
      // If direction is from up to down translateY with that value, if it is the other direction allow to lift up a modal only a little bit.
      offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < contentHeight / 3) {
        offset.value = withSpring(0);
      } else {
        runOnJS(toggleSheet)();
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value + BOTTOM_OFFSET }],
  }));

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { height } = nativeEvent.layout;
    setContentHeight(height);
  };

  return (
    <AnimatedPressable
      style={styles.backdrop}
      entering={FadeIn}
      exiting={FadeOut}
      onPress={toggleSheet}
    >
      <GestureDetector gesture={gestureAnimationPan}>
        <View onLayout={onLayout}>
          <AnimatedPressable
            style={[styles.modalView, translateY, style]}
            entering={SlideInDown.springify().damping(15)}
            exiting={SlideOutDown}
            onPress={onPress}
          >
            <View style={styles.ornament} />
            {children}
          </AnimatedPressable>
        </View>
      </GestureDetector>
    </AnimatedPressable>
  );
};
export { GenericDrawer };
