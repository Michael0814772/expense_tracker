import { SearchIcon } from "@/components/icons/SearchIcon";
import { COLORS } from "@/constants/colors";
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
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.text.white,
        borderRadius: 16,
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
