import { Text } from "react-native";

type Props = {
  amount: string;
};

export function BalanceAmount({ amount }: Props) {
  return (
    <Text
      style={{
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "700",
        marginTop: 6,
      }}
    >
      {amount}
    </Text>
  );
}
