import { summaryData } from "@/constant/data/summary";
import { SummaryItem } from "@/types/summary";

export async function getSummary(): Promise<SummaryItem[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate random error (10% chance)
      if (Math.random() < 0.1) {
        reject(new Error("Failed to fetch summary."));
      } else {
        resolve(summaryData);
      }
    }, 300);
  });
}
