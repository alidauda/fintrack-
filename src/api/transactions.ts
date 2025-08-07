import { transactions, Transaction } from "@/constant/data/transactions";

export async function getTransactions(): Promise<Transaction[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("Failed to fetch transactions."));
      } else {
        resolve(transactions);
      }
    }, 300);
  });
}
