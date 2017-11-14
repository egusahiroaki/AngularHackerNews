import { Component, OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HackerNewsService } from './service/hacker-news.service';
import { Story } from './model/story';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  export class AppComponent implements OnInit {
title = 'hacker news';

  private results: string[];

  stories: object[] = [];

  currentPage = 0; // 10story per 1page. 1 ~ 10

  constructor(
    private hackerNewsService: HackerNewsService
  ) {}

  // http://www.softantenna.com/wp/webservice/hacker-news-api/
  ngOnInit(): void {
    this.hackerNewsService.getTopStories().subscribe( data => {
      this.results = data;
      console.log('this.results');
      console.log(this.results);
      const start: number = this.currentPage * 10;
      this.results.slice(start, start + 10).forEach(id => {
        this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe((json: Story) => {
          // console.log(json);
          this.stories.push(json);
        });
      });
    });
  }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges');
  //   // const start: number = this.currentPage * 10;
  //   // this.results.slice(start, start + 10).forEach(id => {
  //   //   this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe((json: Story) => {
  //   //     // console.log(json);
  //   //     this.stories.push(json);
  //   //   });
  //   // });
  // }

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

  pageChanged(pageIndex: number) {
    console.log('app.component: pageIndex: ' + pageIndex);
    this.currentPage = pageIndex;
  }
}
