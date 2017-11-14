import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material';

/**
 * @title Paginator
 */
@Component({
  selector: 'app-hn-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(private paginator: MatPaginatorIntl) {}

  currentPageIndex = 0;

  @Input() pageIndex: number;
  @Output() changePageIndex = new EventEmitter<number>();

  ngOnInit(): void {
    console.log('paginator ngOnInit');
  }

  change(event?: PageEvent): void {
    this.changePageIndex.emit(event.pageIndex);
    // const test = this.paginator.previousPageLabel;
    // console.log(test);
  }
}
