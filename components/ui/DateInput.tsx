import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, TextInput, View } from "react-native";

type Props = {
  dateSet: (value: Date) => void;
  dateSelected: Date | null;
};

export function DateInput({ dateSet, dateSelected }: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  function onChange(_: any, selectedDate?: Date) {
    setShowPicker(false);
    if (selectedDate) dateSet(selectedDate);
  }

  return (
    <View>
      {/* TextInput */}
      <Pressable onPress={() => setShowPicker(true)}>
        <TextInput
          value={dateSelected ? formatDate(dateSelected) : ""}
          placeholder="Select date"
          editable={false}
          pointerEvents="none"
          style={{
            padding: 16,
            borderRadius: 12,
            fontSize: 16,
            color: COLORS.text.primary,
            fontWeight: "700",
            minHeight: 50,
            backgroundColor: isDark ? COLORS.gray[500] : COLORS.gray[200],
            borderWidth: 1,
            borderColor: isDark ? COLORS.gray[700] : COLORS.gray[300],
          }}
        />
      </Pressable>

      {/* Date Picker */}
      {showPicker && (
        <DateTimePicker
          value={dateSelected ?? new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          // maximumDate={new Date()}
        />
      )}
    </View>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
