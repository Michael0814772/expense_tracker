import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleStart = async () => {
    await AsyncStorage.setItem("welcomeLastShown", Date.now().toString());
    router.replace("/(tabs)");
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: isDark ? COLORS.gray[900] : COLORS.gray[100],
        flex: 1,
      }}
    >
      <View style={{ marginTop: 40 }}>
        <Image
          source={require("../assets/icon.png")}
          style={{ width: "100%", height: 280, marginBottom: 80 }}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            textAlign: "center",
            lineHeight: 40,
            color: isDark ? COLORS.gray[400] : COLORS.gray[700],
          }}
        >
          Save your money with{"\n"}Expense Tracker
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginVertical: 16,
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 14,
              fontWeight: "600",
              lineHeight: 30,
              color: isDark ? COLORS.gray[400] : COLORS.gray[700],
            }}
          >
            Save money! The more your money works for you, the less you have to
            work for money.
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={handleStart}
            style={{
              backgroundColor: "#7C3AED",
              padding: 16,
              borderRadius: 20,
              marginTop: 24,
              width: "90%",
            }}
          >
            <Text
              style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}
            >
              Let's Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
