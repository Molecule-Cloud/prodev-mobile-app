import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Join() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.iconsection}>
                    <Ionicons name="arrow-back" size={25} />
                    <Image source={require('@/assets/images/logo-green.png')} />
                </View>
                <View style={styles.titleTextGroup}>
                    <Text style={styles.titleText}>Create your Account</Text>
                    <Text style={styles.titleText}>Account</Text>
                    <Text style={styles.subText}>
                        Enter your details to create a new account.
                    </Text>
                </View>

                <View style={styles.formGroup}>
                    <View>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput keyboardType="email-address" style={styles.formControl} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput style={styles.passwordControl} />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput style={styles.passwordControl} />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>

                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Join</Text>
                </TouchableOpacity>

                <View style={styles.dividerGroup}>
                    <View
                        style={styles.divider}
                    ></View>
                    <Text
                        style={styles.dividerText}
                    >
                        OR
                    </Text>
                    <View
                        style={styles.divider}
                    ></View>
                </View>

                <View style={styles.secondaryButtonGroup}>
                    <TouchableOpacity style={styles.secondaryButton}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <Image source={require("@/assets/images/google.png")} />
                            <Text style={styles.secondaryButtonText}>
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryButton}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5,
                            }}
                        >
                            <Image source={require("@/assets/images/facebook.png")} />
                            <Text style={styles.secondaryButtonText}>
                                Continue with Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupgroup}>
                    <Text style={styles.signupTitleText}>Already have an account? </Text>
                    <Text style={styles.signupSubTitleText}>Sign in</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}