import { StyleProp, TextStyle, ViewStyle } from "react-native"

type ButtonType = "primary" | "secondary"

type ButtonProps = {
  onPress: () => void
  testID?: string
  type?: ButtonType
  text?: string
  disabled?: boolean
  buttonStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  children?: React.ReactNode
  isLoading?: boolean
  maxFontSizeMultiplier?: number
}

export type { ButtonProps, ButtonType }
