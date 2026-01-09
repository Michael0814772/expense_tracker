import { ThemeProvider } from "@/context/ThemeContext";
import { Stack } from "expo-router";
import React from "react";
import "./globals.css";

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar hidden={true} /> */}

      <ThemeProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="welcomeScreen"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="add-transaction"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}
