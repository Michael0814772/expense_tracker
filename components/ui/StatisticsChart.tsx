import { COLORS } from "@/constants/colors";
import { buildMonthlyChartData } from "@/utils/buildMonthlyChartData";
import { buildWeeklyChartData } from "@/utils/buildWeeklyChartData";
import { View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

type Props = {
  mode: "weekly" | "monthly";
  year: number;
  month: number;
};

export const StatisticsChart = ({ mode, year, month }: Props) => {
  const rawData =
    mode === "weekly"
      ? buildWeeklyChartData(year, month)
      : buildMonthlyChartData(year, month);

  const chartData = rawData.flatMap((item) => [
    {
      value: item.income,
      label: item.label,
      frontColor: COLORS.primary[600], // income (purple)
    },
    {
      value: item.expense,
      frontColor: COLORS.orange[500], // expense (orange)
    },
  ]);

  const maxValue = (() => {
    const values = rawData.map((i) => Math.max(i.income, i.expense));
    const calculatedMax = values.length > 0 ? Math.max(...values) : 0;
    // Ensure maxValue is at least 1 to prevent chart rendering issues
    return calculatedMax > 0 ? calculatedMax : 1;
  })();

  return (
    <View style={{ paddingVertical: 20 }}>
      <BarChart
        key={`${mode}-${year}-${month}`}
        data={chartData}
        barWidth={10}
        spacing={26}
        roundedTop
        hideRules={false}
        rulesType="dashed"
        rulesColor={COLORS.gray[400]}
        yAxisThickness={0.3}
        xAxisLabelsHeight={15}
        yAxisLabelWidth={50}
        xAxisThickness={1}
        yAxisTextStyle={{ color: COLORS.gray[500] }}
        xAxisLabelTextStyle={{
          color: COLORS.gray[500],
          fontSize: 10,
          textAlign: "right",
        }}
        noOfSections={5}
        maxValue={maxValue}
        isAnimated
      />
    </View>
  );
};
