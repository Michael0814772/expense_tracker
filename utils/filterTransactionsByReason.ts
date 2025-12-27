function filterTransactionsByReason(
  transactions: any[],
  searchText: string,
  filter: string
) {
  let result = transactions;

  // 1️⃣ Apply income / expense filter first
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
