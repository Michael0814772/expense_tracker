import DownArrowIcon from "@/components/icons/DownArrowIcon";
import { COLORS } from "@/constants/colors";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Mode = "weekly" | "monthly";

type Props = {
  value: Mode;
  onChange: (value: Mode) => void;
};

const ModeDropdown = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ position: "relative", width: 100 }}>
      {/* Selected value */}
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
          {value === "weekly" ? "Weekly" : "Monthly"}
        </Text>
        <DownArrowIcon size={14} color={COLORS.gray[500]} />
      </Pressable>

      {/* Dropdown options */}
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
          {(["weekly", "monthly"] as Mode[]).map((item) => (
            <Pressable
              key={item}
              onPress={() => {
                onChange(item);
                setOpen(false);
              }}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 14,
                backgroundColor:
                  value === item ? COLORS.primary[100] : "transparent",
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  color:
                    value === item ? COLORS.primary[600] : COLORS.gray[700],
                }}
              >
                {item === "weekly" ? "Weekly" : "Monthly"}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default ModeDropdown;
