import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text } from "react-native";

type GradientType = "expense" | "income";

function SubmitButton({
  label,
  value,
  activeType,
  onPress,
}: {
  label: string;
  value: GradientType;
  activeType: GradientType;
  onPress: () => void;
}) {
  const gradientColors =
    value === "expense"
      ? (["#EF4444", "#F97316"] as const) // red-500 → orange-500
      : (["#10B981", "#059669"] as const); // green-500 → emerald-500

  // Inactive button
  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          paddingVertical: 14,
          paddingHorizontal: 20,
          borderRadius: 999,
          alignItems: "center",
          minWidth: 120,
          width: "100%",
          minHeight: 45,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}
export default SubmitButton;
