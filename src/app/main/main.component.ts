import { Component, OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { Story } from '../model/story';
import { HackerNewsService } from '../service/hacker-news.service';
import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
// export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  export class MainComponent implements OnInit {
  title = 'hacker news';

  private results: string[];

  stories: Story[] = [];

  currentPageIndex = 0; // 10story per 1page. 1 ~ 10

  constructor(
    private hackerNewsService: HackerNewsService,
    private dataTransferService: DataTransferService,
  ) {}

  // http://www.softantenna.com/wp/webservice/hacker-news-api/
  ngOnInit(): void {
    this.hackerNewsService.getTopStories().subscribe( data => {
      this.results = data;
      // console.log('this.results');
      // console.log(this.results);
      const pageIndexUnit = this.currentPageIndex * 10;
      this.results.slice(pageIndexUnit, pageIndexUnit + 10).forEach(id => {
        // console.log('id: ' + id);
        this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe((json: Story) => {
          // console.log(json);
          this.stories.push(json);
        });
      });
    });

    // paginatorの変化を取得
    this.dataTransferService.toParentData$.subscribe((pageIndex) => {
      this.currentPageIndex = parseInt(pageIndex, 10);
      console.log('this.currentPageIndex');
      console.log(this.currentPageIndex);

      const pageIndexUnit = this.currentPageIndex * 10;

      const newStories = [];
      this.results.slice(pageIndexUnit, pageIndexUnit + 10).forEach(id => {
        this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe((json: Story) => {
          // console.log(json);
          newStories.push(json);
        });
      });
      this.stories = newStories;

    });

  }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  //   // const start: number = this.currentPage * 10;
  //   // this.results.slice(start, start + 10).forEach(id => {
  //   //   this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe((json: Story) => {
  //   //     // console.log(json);
  //   //     this.stories.push(json);
  //   //   });
  //   // });
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }

  // pageChanged(pageIndex: number) {
  //   console.log('app.component pageIndex: ' + pageIndex);
  //   this.currentPageIndex = pageIndex;
  // }

}
