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
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\n\n<ul *ngIf=\"stories\">\n    <mat-card *ngFor=\"let story of stories\">\n    <a href=\"{{story.url}}\" target=\"_blank\"><div>{{story.title}}</div></a>\n    <div>{{story.score}} points by {{story.by}} {{story.time}}</div>\n    </mat-card>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_hacker_news_service__ = __webpack_require__("../../../../../src/app/service/hacker-news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(hackerNewsService) {
        this.hackerNewsService = hackerNewsService;
        this.title = 'hacker news';
        this.stories = [];
    }
    // http://www.softantenna.com/wp/webservice/hacker-news-api/
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hackerNewsService.getTopStories().subscribe(function (data) {
            _this.results = data;
            // console.log(this.results);
            _this.results.slice(0, 10).forEach(function (id) {
                _this.hackerNewsService.getEachStories(parseInt(id, 10)).subscribe(function (json) {
                    console.log(json);
                    _this.stories.push(json);
                });
            });
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_hacker_news_service__["a" /* HackerNewsService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_hacker_news_service__ = __webpack_require__("../../../../../src/app/service/hacker-news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["E" /* MatTooltipModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__service_hacker_news_service__["a" /* HackerNewsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    };
    // 引数はstoryの数
    HackerNewsService.prototype.getEachStories = function (id) {
        var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty";
        return this.http.get(url);
    };
    HackerNewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HackerNewsService);
    return HackerNewsService;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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