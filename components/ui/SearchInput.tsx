import { SearchIcon } from "@/components/icons/SearchIcon";
import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { TextInput, View } from "react-native";

export function SearchInput({
  value,
  onChangeText,
  placeholder = "Search",
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: isDark ? COLORS.gray[900] : COLORS.gray[200],
        borderRadius: 16,
        borderWidth: 0.4,
        borderColor: isDark ? COLORS.gray[200] : COLORS.gray[900],
        paddingHorizontal: 14,
        height: 50,
      }}
    >
      {/* Icon */}
      <SearchIcon />

      {/* Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray[400]}
        style={{
          flex: 1,
          marginLeft: 8,
          fontSize: 16,
          color: COLORS.text.primary,
        }}
      />
    </View>
  );
}
