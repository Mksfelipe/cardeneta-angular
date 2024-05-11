import { Account } from "./Account";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    created: string; 
    updated: string;
    account: Account;
    cpf: string;
    contact: null;
  }
  
