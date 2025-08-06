import { SummaryItem } from "@/types/summary";

export const summaryData: SummaryItem[] = [
  {
    amount: "$12,345",
    change: "+5%",
    isPositive: true,
    name: "Total Balance"
  },
  {
    amount: "$7,890",
    change: "+3%",
    isPositive: true,
    name: "Total Credits"
  },
  {
    amount: "$4,455",
    change: "-2%",
    isPositive: false,
    name: "Total Debits"
  },
  {
    amount: "150",
    change: "+10%",
    isPositive: true,
    name: "Total Transactions"
  }
  ];
