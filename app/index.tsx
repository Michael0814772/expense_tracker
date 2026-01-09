import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

// const THREE_HOURS = 3 * 60 * 60 * 1000;
const THREE_HOURS = 2000;

export default function Index() {
  const [showWelcome, setShowWelcome] = useState<boolean | null>(null);

  useEffect(() => {
    const checkWelcome = async () => {
      const lastShown = await AsyncStorage.getItem("welcomeLastShown");
      const now = Date.now();

      if (!lastShown) {
        setShowWelcome(true);
        return;
      }

      const diff = now - Number(lastShown);
      setShowWelcome(diff >= THREE_HOURS);
    };

    checkWelcome();
  }, []);

  if (showWelcome === null) {
    // Show loading/splash screen
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Redirect based on whether welcome screen should be shown
  if (showWelcome) {
    return <Redirect href="/welcomeScreen" />;
  }

  return <Redirect href="/(tabs)" />;
}
