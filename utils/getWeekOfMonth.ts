export function getWeekOfMonth(date: Date) {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay(); // 0 (Sun) → 6 (Sat)

  return Math.ceil((date.getDate() + dayOfWeek) / 7);
}
