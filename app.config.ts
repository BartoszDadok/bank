import type { ExpoConfig } from "@expo/config-types";

export default ({ config }: { config: ExpoConfig }): ExpoConfig => {
  return {
    ...config,
    name: "Bank",
    slug: "bank",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icons/icon.png",
    scheme: "com.bank.invoices",
    userInterfaceStyle: "automatic",
    ios: {
      bundleIdentifier: "com.bank.invoices",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icons/adaptive-icon.png",
        backgroundColor: "#102c2f",
      },
      package: "com.bank.invoices",
    },

    plugins: [
      [
        "expo-dev-launcher",
        {
          launchMode: "most-recent",
        },
      ],
      [
        "expo-image-picker",
        {
          photosPermission: "The app accesses your photos to add the invoices.",
        },
      ],
      [
        "expo-document-picker",
        {
          iCloudContainerEnvironment: "Production",
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/icons/icon.png",
          imageWidth: 180,
          resizeMode: "contain",
          backgroundColor: "#102c2f",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  };
};
