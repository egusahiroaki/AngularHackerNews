import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HackerNewsService {
  // Top Stroriesを取得する
  constructor(private http: HttpClient) {}

  getTopStories(): any {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
  } // stub
}
