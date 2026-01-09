import DownArrowIcon from "@/components/icons/DownArrowIcon";
import { COLORS } from "@/constants/colors";
import { getAvailableYears } from "@/utils/getAvailableYears";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  value: number;
  onChange: (year: number) => void;
};

const YearDropdown = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const years = getAvailableYears();

  return (
    <View style={{ position: "relative", width: 100 }}>
      {/* Selected year */}
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
          {value}
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
          {years.map((year) => {
            const isActive = year === value;

            return (
              <Pressable
                key={year}
                onPress={() => {
                  onChange(year);
                  setOpen(false);
                }}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  backgroundColor: isActive
                    ? COLORS.primary[100]
                    : "transparent",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    color: isActive ? COLORS.primary[500] : COLORS.gray[700],
                  }}
                >
                  {year}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default YearDropdown;
