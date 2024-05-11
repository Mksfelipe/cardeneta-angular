import { Component } from '@angular/core';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { TransactionList } from '../../models/TransactionList';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent {
  transactionList: TransactionList | undefined;
  currentPage: number = 1;

  onPageChange($event: number) {
    this.currentPage = $event; // Atualize a página atual com o valor recebido do evento
    this.currentPage--
    this.transactionService.getTransaction(this.currentPage).subscribe(result => {
      this.transactionList = result;
    });
  }

  constructor(private transactionService: TransactionService) {
    this.currentPage--
    transactionService.getTransaction(this.currentPage).subscribe(result => {
      this.transactionList = result;
    });
  }
}
