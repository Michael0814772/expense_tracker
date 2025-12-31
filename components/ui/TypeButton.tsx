import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text } from "react-native";

type GradientType = "expense" | "income";

function GradientToggleButton({
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
  const isActive = activeType === value;

  const gradientColors =
    value === "expense"
      ? (["#EF4444", "#F97316"] as const) // red-500 → orange-500
      : (["#10B981", "#059669"] as const); // green-500 → emerald-500

  if (isActive) {
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
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "600" }}>{label}</Text>
        </LinearGradient>
      </Pressable>
    );
  }

  // Inactive button
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        paddingVertical: 14,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        alignItems: "center",
        backgroundColor: "#E5E7EB",
      }}
    >
      <Text style={{ color: "#111827", fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
}
export default GradientToggleButton;
