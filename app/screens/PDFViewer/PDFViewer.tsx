import { Loading } from "@/app/components/Loading";
import Pdf from "react-native-pdf";
import { styles } from "./PDFViewer.styles";
import { ScreenHeader } from "@/app/components/ScreenHeader";
import { View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/app/router/types";
import { Routes } from "@/app/router/routes";

const PDFViewer = () => {
  const route = useRoute<RouteProp<RootStackParamList, Routes.PDF_VIEWER>>();
  const { url } = route.params;
  return (
    <View style={styles.container}>
      <ScreenHeader title="Invoice" />
      <Pdf
        trustAllCerts={false}
        style={styles.pdf}
        source={{
          uri: url,
          cache: false,
          headers: { "Cache-Control": "no-cache" },
        }}
        renderActivityIndicator={() => <Loading />}
        spacing={30}
      />
    </View>
  );
};

export { PDFViewer };
