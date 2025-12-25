import { View } from "react-native";
import { IncomeIcon } from "../icons/IncomeIcon";
import BalanceStat from "./BalanceStat";

type Props = {
  income: string;
  expenses: string;
};

export function BalanceStatsRow({ income, expenses }: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 38,
        marginBottom: 20,
      }}
    >
      <BalanceStat label="Income" value={income} icon={<IncomeIcon />} />
      <BalanceStat label="Expenses" value={expenses} icon={<IncomeIcon />} />
    </View>
  );
}
