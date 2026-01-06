import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <View style={{ marginTop: 20, height: 80 }}>
      <Text
        style={{
          marginBottom: 8,
          fontSize: 16,
          fontWeight: "600",
          color: isDark ? COLORS.gray[200] : COLORS.gray[900],
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
          color: isDark ? COLORS.gray[200] : COLORS.gray[900],
          paddingHorizontal: 14,
          paddingVertical: 16,
          borderRadius: 12,
          backgroundColor: isDark ? COLORS.gray[500] : COLORS.gray[200],
        }}
      />
    </View>
  );
}
