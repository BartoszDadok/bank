import { GenericDrawer } from "../GenericDrawer/GenericDrawer";
import { styles } from "./UploadInvoiceModal.styles";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/app/theme";
import { useModal } from "@/app/providers/ModalsProvider";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { usePatchInvoice } from "@/app/api/tanstack-api/invoices";
import Toast from "react-native-toast-message";
import { useEffect } from "react";

const errorToastData = {
  type: "error",
  text1: "Something went wrong! Please try again.",
};

const successToastData = {
  type: "success",
  text1: "Invoice uploaded",
};

const UploadInvoiceModal = () => {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const { mutateAsync, error } = usePatchInvoice();
  const {
    uploadInvoiceDrawerModal: { handleClose },
  } = useModal();

  const onTakePhoto = async () => {
    try {
      if (!status?.granted) {
        await requestPermission();
      }
    } catch (error) {}

    try {
      const data = await ImagePicker.launchCameraAsync();
      if (!data.canceled) {
        await mutateAsync();
        Toast.show(successToastData);
      }
    } catch (error) {
      Toast.show(errorToastData);
    }
    handleClose();
  };
  const onUploadFromStorage = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        multiple: false,
      });
      if (!result.canceled) {
        await mutateAsync();
        Toast.show(successToastData);
      }
    } catch (error) {
      Toast.show(errorToastData);
    }
    handleClose();
  };
  useEffect(() => {
    if (error) {
      Toast.show(errorToastData);
    }
  }, [error]);

  return (
    <GenericDrawer style={styles.drawer} handleClose={handleClose}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onTakePhoto} style={styles.button}>
          <Entypo name="camera" size={24} color={theme.pallette.text[200]} />
          <Text style={styles.buttonText}>Take a photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onUploadFromStorage} style={styles.button}>
          <MaterialIcons
            name="storage"
            size={24}
            color={theme.pallette.text[200]}
          />
          <Text style={styles.buttonText}>Upload from storage</Text>
        </TouchableOpacity>
      </View>
    </GenericDrawer>
  );
};

export { UploadInvoiceModal };
