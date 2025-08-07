import { transactions } from "@/constant/data/transactions";
import { Transaction } from "@/types/transcation";

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
