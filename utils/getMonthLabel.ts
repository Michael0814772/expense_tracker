export function getMonthLabel(date: Date) {
  return date.toLocaleString("en-US", { month: "short" });
}
