import { PropsWithChildren } from "react";
import { ViewStyle } from "react-native";

export type ScreenWrapperProps = PropsWithChildren<{
  style?: ViewStyle;
}>;
