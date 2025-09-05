import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { mainPageStyles as styles } from '@/styles'

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/hero-icon.png")}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
              <Text style={styles.titleSubText}>The best prices for over 2 </Text>
              <Text style={styles.titleSubText}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.buttonPrimary}>
                  <Text style={styles.buttonPrimaryText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSecondary}>
                  <Text style={styles.buttonSecondaryText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}