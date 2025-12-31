import { COLORS } from "@/constants/colors";
import { Text, TextInput, TextInputProps, View } from "react-native";

export function FormInputTab({
  value,
  onChangeText,
  placeholder = "Search",
  inputMode,
  textHeader,
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  inputMode: TextInputProps["inputMode"];
  textHeader: string;
}) {
  return (
    <View style={{ marginTop: 20, height: 80 }}>
      <Text
        style={{
          marginBottom: 8,
          fontSize: 16,
          fontWeight: "600",
          color: COLORS.text.primary,
        }}
      >
        {textHeader}
      </Text>
      {/* Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray[400]}
        inputMode={inputMode}
        style={{
          flex: 1,
          fontSize: 16,
          color: COLORS.text.primary,
          paddingHorizontal: 14,
          paddingVertical: 16,
          borderRadius: 12,
          backgroundColor: COLORS.gray[200],
        }}
      />
    </View>
  );
}
