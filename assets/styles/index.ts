import { colors, spacing } from "@/libs/constants/theme";
import { verticalScale } from "@/libs/utils/styling";
import { Spade } from "phosphor-react-native";
import { StyleSheet } from "react-native";

export const rootStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacing.y7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    marginTop: verticalScale(100),
    alignSelf: "center",
  },
  loginButton: {
    marginTop: spacing.x20,
    alignSelf: "flex-end",
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacing.y20,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 10,
  },
  footerContents: {
    alignItems: "center",
  },
  footerText: {
    textAlign: "center",
  },
  buttonContainer: {
    paddingHorizontal: spacing.x25,
    width: "100%",
  },
});
