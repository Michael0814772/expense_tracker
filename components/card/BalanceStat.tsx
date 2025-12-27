import { Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export default function BalanceStat({ label, value, icon }: Props) {
  return (
    <View className="items-start">
      <View className="flex-row">
        {/* Icon */}
        {icon}

        {/* Label */}
        <Text
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 16,
            marginTop: 6,
            marginLeft: 4,
          }}
        >
          {label}
        </Text>
      </View>

      {/* Value */}
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 15,
          fontWeight: "600",
          marginTop: 2,
          marginLeft: 5,
        }}
      >
        {value}
      </Text>
    </View>
  );
}
