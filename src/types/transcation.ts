export interface Transaction {
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}
