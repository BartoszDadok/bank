import { Text, TouchableOpacity, View } from "react-native";
import { styles, ARROW_WIDTH } from "./ScreenHeader.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "@/app/theme";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenHeaderProps = {
  title: string;
  arrowBackEnabled?: boolean;
};

const ScreenHeader = ({
  title,
  arrowBackEnabled = true,
}: ScreenHeaderProps) => {
  const { top } = useSafeAreaInsets();
  const { goBack } = useNavigation();
  return (
    <View style={[styles.headerContainer, { paddingTop: top }]}>
      {arrowBackEnabled && (
        <TouchableOpacity onPress={goBack} style={styles.button}>
          <MaterialCommunityIcons
            name={"arrow-left"}
            size={30}
            color={theme.pallette.text[200]}
          />
        </TouchableOpacity>
      )}
      <Text
        style={[
          styles.title,
          { marginRight: arrowBackEnabled ? ARROW_WIDTH : 0 },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export { ScreenHeader };
