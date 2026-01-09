export function getDisplayRange(
  mode: "weekly" | "monthly" | "yearly",
  year: number,
  month: number // 0–11
) {
  const monthName = new Date(year, month).toLocaleString("en-US", {
    month: "short",
  });

  if (mode === "yearly") {
    return `Jan – Dec ${year}`;
  }

  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  const startText = startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  const endText = endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return `${startText} – ${endText}`;
}
