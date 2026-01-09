import { transactionData } from "@/data/transactions";

export function getAvailableYears(): number[] {
  const years = new Set<number>();

  transactionData.forEach((tx) => {
    const date = new Date(tx.dateTime.replace(" ", "T"));
    years.add(date.getFullYear());
  });

  return Array.from(years).sort((a, b) => b - a); // latest first
}
