import { MONTHS } from "@/constants/constants";
import { transactionData } from "@/data/transactions";

export function buildMonthlyChartData(year: number, month: number) {
  const monthsMap: Record<string, { income: number; expense: number }> = {};

  // Initialize all months
  MONTHS.forEach((month) => {
    monthsMap[month] = { income: 0, expense: 0 };
  });

  transactionData.forEach((tx) => {
    const date = new Date(tx.dateTime.replace(" ", "T"));

    // ✅ FILTER BY YEAR
    if (date.getFullYear() !== year) return;

    const month = date.toLocaleString("en-US", { month: "long" });

    if (tx.type === "income") {
      monthsMap[month].income += tx.amount;
    } else {
      monthsMap[month].expense += Math.abs(tx.amount);
    }
  });

  return MONTHS.map((month) => ({
    label: month,
    income: monthsMap[month].income,
    expense: monthsMap[month].expense,
  }));
}
