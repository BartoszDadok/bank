import { Dimensions } from "react-native";

const BOTTOM_TOAST_OFFSET = 80;

const generateRandomNumber = () => Math.floor(Math.random() * 1000);
const generateRandomPrice = () => Math.floor(Math.random() * 100000);

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export {
  generateRandomNumber,
  generateRandomPrice,
  BOTTOM_TOAST_OFFSET,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
