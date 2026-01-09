export function totalIncome(transactions: any[]) {
  return transactions.reduce(
    (sum, tx) => (tx.type === "income" ? sum + tx.amount : sum),
    0
  );
}

export function totalExpense(transactions: any[]) {
  return transactions.reduce(
    (sum, tx) => (tx.type === "expense" ? sum + Math.abs(tx.amount) : sum),
    0
  );
}
