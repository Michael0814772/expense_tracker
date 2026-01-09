import DownArrowIcon from "@/components/icons/DownArrowIcon";
import { COLORS } from "@/constants/colors";
import { MONTHS } from "@/constants/constants";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  value: number; // 0–11
  onChange: (monthIndex: number) => void;
};

const MonthDropdown = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ position: "relative", width: 100 }}>
      {/* Selected month */}
      <Pressable
        onPress={() => setOpen(!open)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 14,
          paddingVertical: 10,
          backgroundColor: COLORS.background.white,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: COLORS.gray[200],
        }}
      >
        <Text
          style={{ fontWeight: "600", color: COLORS.gray[800], fontSize: 12 }}
        >
          {MONTHS[value]}
        </Text>
        <DownArrowIcon size={14} color={COLORS.gray[500]} />
      </Pressable>

      {/* Dropdown list */}
      {open && (
        <View
          style={{
            position: "absolute",
            top: 52,
            width: "100%",
            maxHeight: 510,
            backgroundColor: COLORS.background.white,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: COLORS.gray[200],
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 5,
            zIndex: 10,
          }}
        >
          {MONTHS.map((month, index) => {
            const isActive = index === value;

            return (
              <Pressable
                key={month}
                onPress={() => {
                  onChange(index);
                  setOpen(false);
                }}
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 14,
                  backgroundColor: isActive
                    ? COLORS.primary[100]
                    : "transparent",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    color: isActive ? COLORS.primary[600] : COLORS.gray[700],
                  }}
                >
                  {month}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default MonthDropdown;
