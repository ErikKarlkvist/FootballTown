import {Platform} from "react-native";


export const Colors = {
  Background: "#eeeeee",
  Primary: "#607D8B",
  PrimaryText: "#000",
  PrimaryLight: "#ff6f60",
  PrimaryLightText: "#000",
  PrimaryDark: "#ab000d",
  PrimaryDarkText: "#fff",
  CardBackground: "#fff",
  ListBackground: "#fff",
  PrimaryBackground: "#F5F5F5",
  Link: "#4286f4"
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
