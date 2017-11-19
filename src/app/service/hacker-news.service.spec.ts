import { HackerNewsService } from './hacker-news.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ReflectiveInjector } from '@angular/core';
import { HttpModule, Jsonp, Response, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { inject } from '@angular/core/testing';

describe('Hacker News Service', () => {
  let service: HackerNewsService;
  let backend: MockBackend;

  beforeEach(() => {
    const injector = ReflectiveInjector.resolveAndCreate([
      MockBackend,
      BaseRequestOptions,
      {
        provide: Jsonp,
        // tslint:disable-next-line:no-shadowed-variable
        useFactory: (backend: MockBackend,
        options: BaseRequestOptions) => {
          return new Jsonp(backend, options);
        },
        deps: [ MockBackend, BaseRequestOptions ]
      },
      HackerNewsService,
    ]);

    service = injector.get(HackerNewsService);
    backend = injector.get(MockBackend);
  });

  it('getTopStoriesメソッド', () => {
    backend.connections.subscribe((conn: MockConnection) => {
      conn.mockRespond(new Response(new ResponseOptions({
        body:
          [1111, 1111]
      })));
    });

    service.getTopStories().subscribe((result: any) => {
      expect(result).not.toBeNull();
    });


  });
});
