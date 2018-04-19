import {Platform} from "react-native";


export const Colors = {
  Background: "#eeeeee",
  Primary: "#e53935",
  PrimaryText: "#000",
  PrimaryLight: "#ff6f60",
  PrimaryLightText: "#000",
  PrimaryDark: "#ab000d",
  PrimaryDarkText: "#fff",
  CardBackground: "#fff",
}

const iOSFonts = {
  Default: "Helvetica",
  Body: "Helvetica",
}

const AndroidFonts = {
  Default: "Roboto",
  Body: "Roboto",
}

export const Fonts = Platform.select({ios: iOSFonts, android: AndroidFonts});
