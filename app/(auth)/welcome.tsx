import { welcomeStyles } from "@/assets/styles";
import { BaseText, ScreenWrapper } from "@/components";
import { colors } from "@/constants/theme";
import { Webcam } from "phosphor-react-native";
import { TouchableOpacity, View, Image } from "react-native";

const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={welcomeStyles.container}>
        <View>
          <TouchableOpacity
            style={welcomeStyles.loginButton}
            onPress={() => console.log("Button pressed")}
          >
            <BaseText fontWeight={"500"}>Sign In</BaseText>
          </TouchableOpacity>

          <Image
            source={require("@/assets/images/welcome.png")}
            style={welcomeStyles.welcomeImage}
            resizeMode={"contain"}
          />
        </View>

        <View style={welcomeStyles.footer}>
          <View style={welcomeStyles.footerContents}>
            <BaseText size={30} fontWeight={"800"}>
              ETrack
            </BaseText>
            <BaseText size={30} fontWeight={"800"}>
              Your expenses today!
            </BaseText>
          </View>
          <BaseText
            size={17}
            color={colors.textLight}
            style={welcomeStyles.footerText}
          >
            Expense must be tracked to manage your finances effectively.
          </BaseText>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
