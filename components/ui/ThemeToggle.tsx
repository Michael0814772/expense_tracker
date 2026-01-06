import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Pressable, View } from "react-native";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Pressable
      onPress={toggleTheme}
      style={{
        width: 44,
        height: 24,
        borderRadius: 999,
        padding: 2,
        backgroundColor: isDark ? COLORS.gray[200] : COLORS.gray[900],
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 999,
          backgroundColor: "#FFFFFF",
          transform: [{ translateX: isDark ? 20 : 0 }],
        }}
      />
    </Pressable>
  );
};

export default ThemeToggle;
