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

  // http://www.softantenna.com/wp/webservice/hacker-news-api/
  ngOnInit(): void {
    this.hackerNewsService.getTopStories().subscribe( data => {
      this.results = data;
      console.log('results');
      console.log(this.results);
    });
  }

}
