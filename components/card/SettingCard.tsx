import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  header1: string;
  header2: string;
  icon1: React.ReactNode;
  backgroundColor1: string;
  icon2?: React.ReactNode;
};

const SettingCard = ({
  header1,
  header2,
  icon1,
  backgroundColor1,
  icon2,
}: Props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", gap: 13, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: backgroundColor1, // light purple bg
            padding: 10,
            borderRadius: 16, // rounded-2xl
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon1}
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: isDark ? COLORS.gray[100] : COLORS.gray[800],
              marginBottom: 4,
            }}
          >
            {header1}
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.gray[500] }}>
            {header2}
          </Text>
        </View>
      </View>
      <View>{icon2}</View>
    </Pressable>
  );
};

export default SettingCard;
