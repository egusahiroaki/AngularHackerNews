import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { Story } from '../model/story';
import { HackerNewsService } from '../service/hacker-news.service';
import { DataTransferService } from '../service/data-transfer.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  title = 'hacker news';

  private results: string[];

  stories: Story[] = [];

  currentPageIndex = 0; // 10story per 1page. 1 ~ 10

  constructor(
    private hackerNewsService: HackerNewsService,
    private dataTransferService: DataTransferService,
    private route: ActivatedRoute,
  ) {}

  // http://www.softantenna.com/wp/webservice/hacker-news-api/
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      console.log('params[\'id\']:' + params['id']);
      this.currentPageIndex = params['id'];
    });

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
    },
    error => { // Hacker News API アクセス失敗
      this.stories = [];
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

}
