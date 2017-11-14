import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from './service/hacker-news.service';
import { Story } from './model/story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hacker news';

  private results: string[];

  stories: object[] = [];

  constructor(
    private hackerNewsService: HackerNewsService
  ) {}

  // http://www.softantenna.com/wp/webservice/hacker-news-api/
  ngOnInit(): void {
    this.hackerNewsService.getTopStories().subscribe( data => {
      this.results = data;
      console.log(typeof(this.results));
      console.log(this.results);
      this.results.slice(1, 10).forEach(id => {
        console.log(id);
        this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe((json: Story) => {
          console.log(json);
          this.stories.push(json);
        });
      });
    });
  }

}
