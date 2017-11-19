import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { MatToolbarModule, MatCardModule, MatPaginator, MatPaginatorModule, } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HackerNewsService } from '../service/hacker-news.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { URLPipe } from '../pipe/url-pipe';

import 'rxjs/add/observable/of';
import { DataTransferService } from '../service/data-transfer.service';
import { JsonpModule } from '@angular/http';


describe('AppComponent', () => {
  let route: ActivatedRoute;
  let fixture: ComponentFixture<MainComponent>;

  let service: HackerNewsService;

  beforeEach(async(() => {
    const activeRouteStub = {
      get params() {
        return Observable.of(
          { id: 1 }
        );
      }
    };

    const serviceStub = {
      getTopStories() {
        return Promise.resolve(
          [111, 112]
        );
      }
    };

    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatToolbarModule,
        MatPaginatorModule,
        RouterTestingModule,
        JsonpModule,
      ],
      declarations: [
        MainComponent,
        PaginatorComponent,
        URLPipe,
      ],
      providers: [
        DataTransferService,
        { provide: ActivatedRoute, useValue: activeRouteStub }
      ]
    });

    TestBed.overrideComponent(MainComponent, {
      set: {
        providers: [
          { provide: HackerNewsService, useValue: serviceStub}
        ]
      }
    });

    fixture = TestBed.createComponent(MainComponent);
    route = fixture.debugElement.injector.get(ActivatedRoute);
    service = fixture.debugElement.injector.get(HackerNewsService);
  }));

  it('should create the app', async(() => {

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'hacker news'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hacker news');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
