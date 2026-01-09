function filterTransactionsByReason(
  transactions: any[],
  searchText: string,
  filter: string,
  year?: number,
  month?: number,
  mode?: "weekly" | "monthly"
) {
  let result = transactions;

  // 0️⃣ Apply year/month filter first (if provided)
  if (year !== undefined) {
    result = result.filter((tx) => {
      const date = new Date(tx.dateTime.replace(" ", "T"));
      
      // Filter by year
      if (date.getFullYear() !== year) return false;
      
      // If mode is "weekly", also filter by month
      if (mode === "weekly" && month !== undefined) {
        if (date.getMonth() !== month) return false;
      }
      
      return true;
    });
  }

  // 1️⃣ Apply income / expense filter
  if (filter === "income") {
    result = result.filter((tx) => tx.amount > 0);
  }

  if (filter === "expense") {
    result = result.filter((tx) => tx.amount < 0);
  }

  // 2️⃣ Apply search (only if searchText is not empty)
  if (searchText.trim()) {
    const lowerSearch = searchText.toLowerCase();

    result = result.filter((tx) =>
      tx.reason.toLowerCase().includes(lowerSearch)
    );
  }

  return result;
}

export default filterTransactionsByReason;
