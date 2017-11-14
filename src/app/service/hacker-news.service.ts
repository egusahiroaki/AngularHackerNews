import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HackerNewsService {
  // Top Stroriesを取得する
  constructor(private http: HttpClient) {}

  // user https://hacker-news.firebaseio.com/v0/item/126809.json?print=pretty
  getTopStories(): Observable<any> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  }

  // 引数はstoryの数
  getEachStories(id: number) {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
    return this.http.get(url);
  }
}
