import { Transaction } from "./Transaction";

export interface TransactionList {
  content: Transaction[];
  size: number;
  totalElements: number; 
  totalPages: number;
  number: number;
}
  