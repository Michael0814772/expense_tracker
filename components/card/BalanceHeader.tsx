import { Text, View } from "react-native";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";

type Props = {
  title: string;
};

export function BalanceHeader({ title }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <Text
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
        <ChevronDownIcon />
      </View>

      <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: 18 }}>⋯</Text>
    </View>
  );
}
