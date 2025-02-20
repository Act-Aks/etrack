import { scale, verticalScale } from "../utils/styling";

export const colors = {
  primary: "#a3e635",
  primaryLight: "#0ea5e9",
  primaryDark: "#0369a1",
  text: "#fff",
  textLight: "#e5e5e5",
  textLighter: "#d4d4d4",
  white: "#fff",
  black: "#000",
  rose: "#ef4444",
  green: "#16a34a",
  neutral50: "#fafafa",
  neutral100: "#f5f5f5",
  neutral200: "#e5e5e5",
  neutral300: "#d4d4d4",
  neutral350: "#CCCCCC",
  neutral400: "#a3a3a3",
  neutral500: "#737373",
  neutral600: "#525252",
  neutral700: "#404040",
  neutral800: "#262626",
  neutral900: "#171717",
};

export const themeColors = {
  dark: colors,
  light: colors,
};

export const spacing = {
  x3: scale(3),
  x5: scale(5),
  x7: scale(7),
  x10: scale(10),
  x12: scale(12),
  x15: scale(15),
  x20: scale(20),
  x25: scale(25),
  x30: scale(30),
  x35: scale(35),
  x40: scale(40),
  y5: verticalScale(5),
  y7: verticalScale(7),
  y10: verticalScale(10),
  y12: verticalScale(12),
  y15: verticalScale(15),
  y17: verticalScale(17),
  y20: verticalScale(20),
  y25: verticalScale(25),
  y30: verticalScale(30),
  y35: verticalScale(35),
  y40: verticalScale(40),
  y50: verticalScale(50),
  y60: verticalScale(60),
};

export const radius = {
  r3: verticalScale(3),
  r6: verticalScale(6),
  r10: verticalScale(10),
  r12: verticalScale(12),
  r15: verticalScale(15),
  r17: verticalScale(17),
  r20: verticalScale(20),
  r30: verticalScale(30),
};
