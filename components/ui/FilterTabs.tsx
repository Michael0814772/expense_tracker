import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Filter = {
  id: string;
  label: string;
  searchWord: string;
};

type Props = {
  data: Filter[];
  active: string;
  onChange: (value: string) => void;
};

const FilterTabs = ({ data, active, onChange }: Props) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={{ marginTop: 20, marginBottom: 24, flexDirection: "row", gap: 12 }}
    >
      {data.map((item) => {
        const isActive = active === item.searchWord;

        return (
          <Pressable
            key={item.id}
            onPress={() => onChange(item.searchWord)}
            style={{
              backgroundColor: isActive
                ? COLORS.icon.purple
                : COLORS.text.white,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: isActive ? COLORS.text.white : COLORS.text.primary,
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default FilterTabs;
