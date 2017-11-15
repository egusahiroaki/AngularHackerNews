import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataTransferService } from '../service/data-transfer.service';
import { Router } from '@angular/router';

/**
 * @title Paginator
 */
@Component({
  selector: 'app-hn-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  constructor(
    private dataTransferService: DataTransferService,
    private router: Router,
  ) {}

  @Input() pageIndex: number;
  @Output() pageIndexChange = new EventEmitter<number>();

  ngOnInit(): void {
    // console.log('paginator ngOnInit');
  }

  ngOnChanges(): void {
    // // console.log('paginator ngOnChanges');
    // this.pageIndexChange.emit(this.pageIndex);
  }

  change(event?: PageEvent): void {
    // console.log('paginator change method');
    // this.pageIndex = event.pageIndex;
    // this.pageIndexChange.emit(event.pageIndex);
    this.router.navigate(['story', event.pageIndex + 1]);
    this.dataTransferService.sendParamToParent(event.pageIndex);
    // const test = this.paginator.previousPageLabel;
    // console.log(test);
  }
}
