import { COLORS } from "@/constants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, TextInput, View } from "react-native";

type Props = {
  dateSet: (value: Date) => void;
  dateSelected: Date | null;
};

export function DateInput({ dateSet, dateSelected }: Props) {
  const [showPicker, setShowPicker] = useState(false);

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
            backgroundColor: COLORS.gray[200],
            fontSize: 16,
            color: COLORS.text.primary,
            fontWeight: "700",
            minHeight: 50,
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
