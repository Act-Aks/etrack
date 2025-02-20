import { rootStyles } from "@/assets/styles";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Root = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/(auth)/welcome"), 2000);
  }, []);

  return (
    <View style={rootStyles.container}>
      <Image
        source={require("@/assets/images/splashImage.png")}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

export default Root;
