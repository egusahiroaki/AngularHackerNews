webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".current {\n    background-color: #ff0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a [routerLink]=\"['/story', 1]\" routerLinkActive=\"current\" \n[routerLinkActiveOptions]=\"{ exact: true }\">\nHackerNews\n</a> -->\n\n<a routerLink=\"/story/1\" routerLinkActive=\"current\" \n[routerLinkActiveOptions]=\"{ exact: true }\">\n</a>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_hacker_news_service__ = __webpack_require__("../../../../../src/app/service/hacker-news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__paginator_paginator_module__ = __webpack_require__("../../../../../src/app/paginator/paginator.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_data_transfer_service__ = __webpack_require__("../../../../../src/app/service/data-transfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipe_url_pipe__ = __webpack_require__("../../../../../src/app/pipe/url-pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipe_url_pipe__["a" /* URLPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* MY_ROUTES */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_10__paginator_paginator_module__["a" /* PaginatorModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__service_hacker_news_service__["a" /* HackerNewsService */],
                __WEBPACK_IMPORTED_MODULE_11__service_data_transfer_service__["a" /* DataTransferService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MY_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");


var myRoutes = [
    // story/:idにredirectするように設定
    { path: 'story/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */]
    },
    { path: '',
        redirectTo: '/story/1',
        pathMatch: 'full'
    },
];
var MY_ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(myRoutes);


/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div style=\"text-align:center\">\n        <h1 class=\"mat-display-1\">\n          Welcome to {{title}}!\n        </h1>\n      </div>\n</mat-toolbar>\n<router-outlet></router-outlet>\n<div *ngIf=\"stories\" class=\"mat-typography\">\n  <app-hn-paginator [(pageIndex)]=\"currentPageIndex\"></app-hn-paginator>\n\n  <mat-card *ngFor=\"let story of stories\">\n  <a href=\"{{story.url}}\" target=\"_blank\">\n    <div>\n      {{story.title}}\n    </div>\n    <div *ngIf=\"story.url\">\n      ( {{ story.url | domain }} )\n    </div>\n  </a>\n  <div style =\"margin-top: 10px;\">\n    {{ story.score }} points\n    by {{ story.by }} {{ story.time * 1000 | date: 'yyyy/MM/dd HH:mm:SS' }}\n  </div>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_hacker_news_service__ = __webpack_require__("../../../../../src/app/service/hacker-news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_transfer_service__ = __webpack_require__("../../../../../src/app/service/data-transfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(hackerNewsService, dataTransferService, route) {
        this.hackerNewsService = hackerNewsService;
        this.dataTransferService = dataTransferService;
        this.route = route;
        this.title = 'hacker news';
        this.stories = [];
        this.currentPageIndex = 0; // 10story per 1page. 1 ~ 10
    }
    // http://www.softantenna.com/wp/webservice/hacker-news-api/
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('params[\'id\']:' + params['id']);
            _this.currentPageIndex = params['id'];
        });
        this.hackerNewsService.getTopStories().subscribe(function (data) {
            _this.results = data;
            // console.log('this.results');
            // console.log(this.results);
            var pageIndexUnit = _this.currentPageIndex * 10;
            _this.results.slice(pageIndexUnit, pageIndexUnit + 10).forEach(function (id) {
                // console.log('id: ' + id);
                _this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe(function (json) {
                    // console.log(json);
                    _this.stories.push(json);
                });
            });
        });
        // paginatorの変化を取得
        this.dataTransferService.toParentData$.subscribe(function (pageIndex) {
            _this.currentPageIndex = parseInt(pageIndex, 10);
            console.log('this.currentPageIndex');
            console.log(_this.currentPageIndex);
            var pageIndexUnit = _this.currentPageIndex * 10;
            var newStories = [];
            _this.results.slice(pageIndexUnit, pageIndexUnit + 10).forEach(function (id) {
                _this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe(function (json) {
                    // console.log(json);
                    newStories.push(json);
                });
            });
            _this.stories = newStories;
        });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_hacker_news_service__["a" /* HackerNewsService */],
            __WEBPACK_IMPORTED_MODULE_2__service_data_transfer_service__["a" /* DataTransferService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/paginator/paginator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginator/paginator.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-paginator [length]=\"100\"\n[pageSize]=\"10\"\n[pageSizeOptions]=\"[10]\"\n(page)=\"pageEvent = change($event)\">\n</mat-paginator>\n"

/***/ }),

/***/ "../../../../../src/app/paginator/paginator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_transfer_service__ = __webpack_require__("../../../../../src/app/service/data-transfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @title Paginator
 */
var PaginatorComponent = (function () {
    function PaginatorComponent(dataTransferService, router) {
        this.dataTransferService = dataTransferService;
        this.router = router;
        this.pageIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PaginatorComponent.prototype.ngOnInit = function () {
        // console.log('paginator ngOnInit');
    };
    PaginatorComponent.prototype.ngOnChanges = function () {
        // // console.log('paginator ngOnChanges');
        // this.pageIndexChange.emit(this.pageIndex);
    };
    PaginatorComponent.prototype.change = function (event) {
        // console.log('paginator change method');
        // this.pageIndex = event.pageIndex;
        // this.pageIndexChange.emit(event.pageIndex);
        this.router.navigate(['story', event.pageIndex + 1]);
        this.dataTransferService.sendParamToParent(event.pageIndex);
        // const test = this.paginator.previousPageLabel;
        // console.log(test);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginatorComponent.prototype, "pageIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PaginatorComponent.prototype, "pageIndexChange", void 0);
    PaginatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hn-paginator',
            template: __webpack_require__("../../../../../src/app/paginator/paginator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/paginator/paginator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_transfer_service__["a" /* DataTransferService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PaginatorComponent);
    return PaginatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/paginator/paginator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paginator_component__ = __webpack_require__("../../../../../src/app/paginator/paginator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaginatorModule = (function () {
    function PaginatorModule() {
    }
    PaginatorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__paginator_component__["a" /* PaginatorComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__paginator_component__["a" /* PaginatorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatPaginatorModule */],
            ],
            providers: []
        })
    ], PaginatorModule);
    return PaginatorModule;
}());



/***/ }),

/***/ "../../../../../src/app/pipe/url-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URLPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var URLPipe = (function () {
    function URLPipe() {
    }
    URLPipe.prototype.transform = function (urlString) {
        var trimed = urlString.replace(/http:\/\//, '').replace(/https:\/\//, '');
        return trimed.split('/')[0];
    };
    URLPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'domain' })
    ], URLPipe);
    return URLPipe;
}());



/***/ }),

/***/ "../../../../../src/app/service/data-transfer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTransferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTransferService = (function () {
    function DataTransferService() {
        this.toParentDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.toChildDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable streams
        this.toParentData$ = this.toParentDataSource.asObservable();
        this.toChildData$ = this.toChildDataSource.asObservable();
    }
    // Send to param
    DataTransferService.prototype.sendParamToParent = function (data) {
        this.toParentDataSource.next(data);
    };
    DataTransferService.prototype.sendParamToChild = function (data) {
        this.toChildDataSource.next(data);
    };
    DataTransferService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataTransferService);
    return DataTransferService;
}());



/***/ }),

/***/ "../../../../../src/app/service/hacker-news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HackerNewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HackerNewsService = (function () {
    // Top Stroriesを取得する
    function HackerNewsService(http) {
        this.http = http;
    }
    // user https://hacker-news.firebaseio.com/v0/item/126809.json?print=pretty
    HackerNewsService.prototype.getTopStories = function () {
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
    };
    // 引数はstoryの数
    HackerNewsService.prototype.getEachStories = function (id) {
        var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty";
        return this.http.get(url);
    };
    HackerNewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HackerNewsService);
    return HackerNewsService;
}());

/*
[ 15696855, 15696596, 15694430, 15694926, 15695903, 15694641, 15696109, 15694018, 15695013, 15695114, 15695129, 15694118, 15695545, 15693499, 15695326, 15693916, 15693756, 15695457, 15693237, 15694087, 15694578, 15695196, 15694318, 15692688, 15692604, 15694266, 15693837, 15692896, 15682536, 15694972, 15692609, 15691435, 15690121, 15691409, 15690957, 15686442, 15694558, 15686653, 15686600, 15685454, 15691165, 15692350, 15694899, 15688900, 15693962, 15693906, 15695012, 15686875, 15690954, 15691956, 15689624, 15687800, 15692153, 15691899, 15691477, 15687005, 15691817, 15694985, 15689700, 15686316, 15693228, 15694372, 15692004, 15686350, 15693790, 15681379, 15688506, 15690382, 15692828, 15694153, 15686504, 15685180, 15686403, 15684785, 15687913, 15684372, 15691204, 15694610, 15681358, 15689399, 15688972, 15683836, 15688396, 15676737, 15683275, 15691154, 15687662, 15680668, 15680180, 15692716, 15686661, 15683267, 15686400, 15681755, 15678492, 15693071, 15684378, 15692458, 15691877, 15691885, 15689998, 15691021, 15692301, 15688806, 15688097, 15685541, 15691407, 15679599, 15690988, 15690943, 15685505, 15686794, 15690737, 15693764, 15689294, 15680005, 15676951, 15692579, 15681252, 15685324, 15675591, 15685307, 15692725, 15679150, 15693583, 15688570, 15692229, 15684139, 15692638, 15681431, 15689476, 15682376, 15685162, 15677727, 15680609, 15681545, 15692976, 15684898, 15684220, 15692456, 15680739, 15680430, 15693383, 15690190, 15676785, 15691771, 15676681, 15685814, 15693251, 15684225, 15690814, 15681566, 15689155, 15680368, 15681526, 15681351, 15693001, 15677206, 15687713, 15676371, 15676580, 15692929, 15686900, 15685680, 15692877, 15678175, 15688306, 15687217, 15680787, 15680623, 15679321, 15677560, 15685649, 15678841, 15696056, 15676307, 15685848, 15692559, 15678542, 15675439, 15681066, 15680591, 15679853, 15689605, 15685905, 15683658, 15675118, 15677299, 15691288, 15683120, 15680355, 15675695, 15692191, 15682774, 15675750, 15675582, 15678471, 15689511, 15687885, 15689940, 15675898, 15691924, 15677887, 15679913, 15676023, 15677523, 15679205, 15676911, 15676220, 15690293, 15682692, 15689180, 15683288, 15691547, 15687977, 15679522, 15680801, 15678056, 15681321, 15688362, 15676515, 15691136, 15686694, 15689803, 15675586, 15686735, 15682670, 15687896, 15675692, 15683132, 15678788, 15681031, 15676110, 15676691, 15680129, 15678401, 15678139, 15680841, 15684440, 15676335, 15681256, 15675660, 15675190, 15686348, 15679500, 15691565, 15677591, 15677871, 15678694, 15687093, 15679463, 15679303, 15678604, 15676711, 15677741, 15679320, 15674567, 15690473, 15679018, 15677066, 15679172, 15676544, 15679056, 15678068, 15683215, 15675856, 15684002, 15678078, 15679550, 15688524, 15678587, 15676492, 15678020, 15677465, 15683291, 15675327, 15682751, 15694976, 15675550, 15683969, 15692853, 15677626, 15677559, 15684552, 15683825, 15678598, 15682792, 15680716, 15676939, 15677095, 15678365, 15686220, 15676301, 15678880, 15681552, 15674956, 15680917, 15681465, 15675030, 15681020, 15674820, 15683709, 15674202, 15676429, 15677731, 15676689, 15679981, 15676933, 15679548, 15679724, 15674440, 15681412, 15674409, 15679083, 15675627, 15678516, 15695843, 15683538, 15678868, 15676452, 15675851, 15675600, 15679031, 15679222, 15683025, 15677855, 15687894, 15692916, 15684427, 15674251, 15687981, 15676723, 15675200, 15677896, 15677249, 15691358, 15686449 ]
*/


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);




 // to user MAT
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map