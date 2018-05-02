import {Platform} from "react-native";


export const Colors = {
  Background: "#eeeeee",
  Primary: "#607D8B",
  PrimaryText: "#000",
  PrimaryLight: "#ff6f60",
  PrimaryLightText: "#000",
  PrimaryDark: "#4b626d",
  PrimaryDarkText: "#fff",
  PrimaryDarkText2: "#CFD8DC",
  CardBackground: "#fff",
  ListBackground: "#fff",
  PrimaryBackground: "#F5F5F5",
  Warning: "#d65151",
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
