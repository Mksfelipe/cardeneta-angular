import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
})
export class PaginacaoComponent {
  
  @Input() totalElements: number = 0;
  @Input() itemsPerPage: number = 0;
  @Input() totalPage: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  currentPage: number = 1;

  nextPage(): void {
    this.currentPage++;
    this.emitPageChange();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.emitPageChange();
    }
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.emitPageChange();
  }

  emitPageChange(): void {
    this.pageChange.emit(this.currentPage);
  }
}
