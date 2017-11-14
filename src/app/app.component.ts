import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from './service/hacker-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private results: string[];

  constructor(
    private hackerNewsService: HackerNewsService
  ) {}

  ngOnInit(): void {
    const ids = this.hackerNewsService.getTopStories();
    console.log(ids);
  }

}
