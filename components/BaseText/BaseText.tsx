import { colors } from "@/constants/theme";
import { BaseTextProps, DEFAULT_TEXT_SIZE } from "./BaseText.static";
import { Text, TextStyle } from "react-native";
import { verticalScale } from "@/utils/styling";

const BaseText: React.FC<BaseTextProps> = ({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps,
}) => {
  const textStyle: TextStyle = {
    fontSize: verticalScale(size ?? DEFAULT_TEXT_SIZE),
    color,
    fontWeight,
  };

  return (
    <Text style={[textStyle, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default BaseText;
