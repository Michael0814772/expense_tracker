import formatDate from "./formatDate";

function groupTransactionsByDate(transactions: any[]) {
  // 1️⃣ Sort latest → oldest
  const sorted = [...transactions].sort(
    (a, b) =>
      new Date(b.dateTime.replace(" ", "T")).getTime() -
      new Date(a.dateTime.replace(" ", "T")).getTime()
  );

  // 2️⃣ Group by formatted date
  const grouped: Record<string, any[]> = {};

  sorted.forEach((tx) => {
    const dateKey = formatDate(tx.dateTime);

    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(tx);
  });

  // 3️⃣ Convert to SectionList format
  return Object.keys(grouped).map((date) => ({
    title: date,
    data: grouped[date],
  }));
}
export default groupTransactionsByDate;
