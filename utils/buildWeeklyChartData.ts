import { WEEKS } from "@/constants/constants";
import { transactionData } from "@/data/transactions";
import { getWeekOfMonth } from "./getWeekOfMonth";

export function buildWeeklyChartData(year: number, month: number) {
  const weeksMap: Record<number, { income: number; expense: number }> = {};

  // Initialize all weeks
  WEEKS.forEach((week) => {
    weeksMap[week] = { income: 0, expense: 0 };
  });

  transactionData.forEach((tx) => {
    const date = new Date(tx.dateTime.replace(" ", "T"));

    if (date.getFullYear() !== year) return;
    if (date.getMonth() !== month) return; // 👈 IMPORTANT

    const week = getWeekOfMonth(date);

    if (weeksMap[week]) {
      if (tx.type === "income") {
        weeksMap[week].income += tx.amount;
      } else {
        weeksMap[week].expense += Math.abs(tx.amount);
      }
    }
  });

  return WEEKS.map((week) => ({
    label: `Week ${week}`,
    income: weeksMap[week].income,
    expense: weeksMap[week].expense,
  }));
}
