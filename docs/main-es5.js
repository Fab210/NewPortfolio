(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio-page/portfolio-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio-page/portfolio-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"container\" *ngIf=\"isloading\">\r\n  <div class=\"row size-container\">\r\n    <!--\r\n      -- ─── NAVIGATION ──────────────────────────────────────────────────\r\n      -->\r\n    <div class=\"col-md-2 containerSettings  \">\r\n      <ul class=\"nav flex-md-column justify-content-center neumorphismsStyle \" id=\"naviBar\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\"\r\n             aria-controls=\"v-pills-home\" aria-selected=\"true\" (click)=\"addAnimationInContainer()\">\r\n            <i class=\"material-icons\">\r\n              person\r\n            </i>Skills\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\"\r\n             aria-controls=\"v-pills-profile\" aria-selected=\"false\" (click)=\"addAnimationInContainer()\">\r\n            <i class=\"material-icons\">\r\n              assignment\r\n            </i>Resume\r\n          </a>\r\n\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\"\r\n             aria-controls=\"v-pills-messages\" aria-selected=\"false\" (click)=\"addAnimationInContainer()\">\r\n            <i class=\"material-icons\">\r\n              brush\r\n            </i>Projects\r\n          </a>\r\n        </li>\r\n        <!--<li class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\"\r\n             aria-controls=\"v-pills-settings\" aria-selected=\"false\" (click)=\"addAnimationInContainer()\">Contact</a>\r\n        </li>-->\r\n      </ul>\r\n    </div>\r\n    <!-- ───────────────────────────────────────────────────────────────── -->\r\n    <!--\r\n      -- ─── MY INFOS ────────────────────────────────────────────────────\r\n      -->\r\n    <div class=\"col-md-4 containerSettings text-center profileContainer neumorphismsStyle\" >\r\n      <!--<img src=\"../../assets/images/me.jpg\" class=\"img-fluid img-thumbnail img-size neumorphismsStyle\" alt=\"me\">-->\r\n      <h3 class=\"myName\">{{profileDataList.basics.name}}</h3>\r\n      <p class=\"jobname\">{{profileDataList.basics.label}}</p>\r\n      <div class=\"buttonsMyInfos\">\r\n        <button type=\"button\" class=\"btn  btn-lg btn-block neumorphismsStyle buttonClick\" (click)=\"downloadPdf()\">Download CV</button>\r\n        <button type=\"button\" class=\"btn  btn-lg btn-block neumorphismsStyle buttonClick\" (click)=\"goLinkedIn()\">My LinkedIn</button>\r\n      </div>\r\n    </div>\r\n    <!--\r\n      -- ─── TRANSITION INFOS ────────────────────────────────────────────\r\n      -->\r\n    <div class=\"col-md-6 containerSettings profileInfoContainers neumorphismsStyle\" *ngIf=\"isloading\" id=\"animationContainer\">\r\n      <!--- SKILLS ------------------------>\r\n      <!---------------------------------------------------------------------------------------->\r\n      <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n        <div class=\"tab-pane fade show active \" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">\r\n          <div>\r\n            <h3 class=\"profilDataTitle\">\r\n              <i class=\"material-icons\">\r\n                code\r\n              </i>Skills\r\n            </h3>\r\n            <hr class=\"bordersTitle\">\r\n            <div class=\"skillColumns\">\r\n              <ul *ngFor=\"let item of profileDataList.skills; let i = index\" class=\"dataListSkills\">\r\n                <li class=\"skillsName\">\r\n                  {{item.name}}\r\n                </li>\r\n                <li>\r\n                  {{item.level}}\r\n\r\n                </li>\r\n\r\n\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!---------------------------------------------------------------------------------------->\r\n        <!-- RESUME  ------------------------->\r\n        <!---------------------------------------------------------------------------------------->\r\n        <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">\r\n          <h3 class=\"profilDataTitle\">\r\n            <i class=\"material-icons\">\r\n              work\r\n            </i>Work\r\n          </h3>\r\n          <hr class=\"bordersTitle\">\r\n          <ul *ngFor=\"let item of profileDataList.work | workDate; let i = index\" class=\"dataList\">\r\n            <li class=\"date\">\r\n              {{item.startDate}} / {{item.endDate}}\r\n\r\n            </li>\r\n\r\n            <li class=\"position\">\r\n              {{item.position}}\r\n            </li>\r\n            <li class=\"company\">\r\n              {{item.company}}\r\n            </li>\r\n            <li class=\"website\">\r\n              <a href=\"{{item.website}}\" target=\"_blank\">{{item.website}}</a>\r\n\r\n              <hr class=\"borders\">\r\n            </li>\r\n\r\n          </ul>\r\n\r\n          <h3 class=\"profilDataTitle\">\r\n            <i class=\"material-icons\">\r\n              school\r\n            </i>Education\r\n          </h3>\r\n          <hr class=\"bordersTitle\">\r\n          <ul *ngFor=\"let item of profileDataList.education; let i = index\" class=\"dataList\">\r\n            <li class=\"date\">\r\n              {{item.startDate}} / {{item.endDate}}\r\n            </li>\r\n\r\n            <li class=\"institution\">\r\n              {{item.institution}}\r\n            </li>\r\n            <li class=\"areaEduc\">\r\n              {{item.area}}\r\n            </li>\r\n            <li class=\"description\">\r\n              {{item.description}}\r\n            </li>\r\n            <li class=\"activities\">\r\n              {{item.activities}}\r\n              <hr class=\"borders\">\r\n            </li>\r\n\r\n\r\n          </ul>\r\n        </div>\r\n        <!---------------------------------------------------------------------------------------->\r\n        <!-- WORKS  ------------------------->\r\n        <!---------------------------------------------------------------------------------------->\r\n        <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">\r\n          <h3 class=\"profilDataTitle\">\r\n            <i class=\"material-icons\">\r\n              brush\r\n            </i>Projects\r\n          </h3>\r\n          <hr class=\"bordersTitle\">\r\n          <ul *ngFor=\"let item of profileDataList.projects; let i = index\" class=\"dataList\">\r\n            <li class=\"projectsDisplayName\">\r\n              <a href=\"{{item.githubUrl}}\" target=\"_blank\">{{item.displayName}}</a>\r\n\r\n            </li>\r\n            <li class=\"codeLanguages\">\r\n              {{item.languages}}\r\n\r\n            </li>\r\n            <li class=\"summary\">\r\n              {{item.summary}}\r\n            </li>\r\n            <li class=\"linkHtml\">\r\n              <a href=\"{{item.website}}\" target=\"_blank\">{{item.website}}</a>\r\n              <hr class=\"borders\">\r\n            </li>\r\n\r\n\r\n          </ul>\r\n        </div>\r\n        <!---------------------------------------------------------------------------------------->\r\n        <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">\r\n          ...727uilui\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- ───────────────────────────────────────────────────────────────── -->\r\n\r\n  </div>\r\n</div>\r\n<div class=\"area\">\r\n  <ul class=\"circles\">\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio-page/portfolio-page.component */ "./src/app/portfolio-page/portfolio-page.component.ts");




var routes = [
    { path: '', component: _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularPortfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio-page/portfolio-page.component */ "./src/app/portfolio-page/portfolio-page.component.ts");
/* harmony import */ var _pipe_workDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/workDate */ "./src/app/pipe/workDate.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioPageComponent"],
                _pipe_workDate__WEBPACK_IMPORTED_MODULE_8__["WorkDatePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipe/workDate.ts":
/*!**********************************!*\
  !*** ./src/app/pipe/workDate.ts ***!
  \**********************************/
/*! exports provided: WorkDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkDatePipe", function() { return WorkDatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkDatePipe = /** @class */ (function () {
    //**-- check witch Work Is The Present Work --**//
    function WorkDatePipe() {
    }
    WorkDatePipe.prototype.transform = function (items) {
        var i;
        for (i = 0; i < items.length; i++) {
            if (items[i].isCurrentRole == true) {
                items[i].endDate = 'Present';
            }
        }
        ;
        return items;
    };
    WorkDatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'workDate'
        })
        //**-- check witch Work Is The Present Work --**//
    ], WorkDatePipe);
    return WorkDatePipe;
}());



/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.containerSettings {\r\n  /*border-width: 2px;*/\r\n  /*border-color: black;*/\r\n  /*border-style: solid;*/\r\n  /*background-color: #fff;*/\r\n  color: #323232;\r\n  /*font-family: 'Open Sans', sans-serif;*/\r\n  font-family: 'Karla', sans-serif;\r\n  padding-top: 20px;\r\n  border-radius: 6px;\r\n  height: 100%;\r\n}\r\n\r\n.skillColumns {\r\n  -webkit-column-count: 2;\r\n     -moz-column-count: 2;\r\n          column-count: 2;\r\n}\r\n\r\n.dataListSkills {\r\n  height: 85px;\r\n  list-style-type: none;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  padding-top: 40px;\r\n}\r\n\r\n/*.dataListSkills li {\r\n  float: left;\r\n}\r\n\r\n  .dataListSkills li a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }*/\r\n\r\n.profileContainer {\r\n  z-index: 1;\r\n}\r\n\r\n.profileInfoContainers {\r\n  overflow-y: scroll;\r\n  height: 95%;\r\n  margin-top: 18px;\r\n  border-radius: 0px;\r\n}\r\n\r\n.neumorphismsStyle {\r\n  background-color: #fff;\r\n  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);\r\n  /*box-shadow: 9px 9px 16px rgba(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);*/\r\n  /*box-shadow: 5px 5px 7px rgba(163,177,198,0.6), -2px -1px 2px rgba(255,255,255, 0.9);*/\r\n  /*box-shadow: 6px 0px 6px rgba(163,177,198,0.6), -6px 0px 12px rgba(255,255,255, 0.9);*/\r\n  /* box-shadow: 2px 2px 6px rgba(163,177,198,0.6), -2px 0px 12px rgba(255,255,255, 0.9);*/\r\n}\r\n\r\n.myName {\r\n  margin-top: 30px;\r\n  font-size: 32px;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\n.buttonClick {\r\n  text-transform: uppercase;\r\n  transition: all .3s ease 0s;\r\n}\r\n\r\n.buttonClick:hover {\r\n    color: #78CC6D;\r\n  }\r\n\r\n.buttonsMyInfos {\r\n  margin-top: 50px;\r\n}\r\n\r\n.size-container {\r\n  height: 750px !important;\r\n}\r\n\r\n.nav {\r\n  border-radius: 6px;\r\n  width: 85px;\r\n  height: 255px;\r\n  margin-left: auto;\r\n}\r\n\r\n.nav-item {\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 0.8em;\r\n  font-weight: 500;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.nav-item a {\r\n    color: #323232;\r\n    transition: all .3s ease 0s;\r\n  }\r\n\r\n.nav-item a:hover {\r\n      color: #78CC6D;\r\n    }\r\n\r\n#naviBar:nth-child(2) {\r\n  border-bottom: 1px solid #eceff3;\r\n}\r\n\r\n.profilDataTitle {\r\n  text-align: left;\r\n  font-size: 22px;\r\n  margin-bottom: 20px;\r\n  text-transform: uppercase;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\n.profilDataTitle::first-letter {\r\n    color: #8A2BE2;\r\n  }\r\n\r\n.profilDataTitle i {\r\n    color: #78cc6d;\r\n    margin-right: 10px;\r\n    vertical-align: bottom;\r\n    font-size: 30px;\r\n  }\r\n\r\n.dataList {\r\n  list-style-type: none;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n}\r\n\r\n.company, .areaEduc, .codeLanguages {\r\n  font-size: 14px;\r\n  color: #999;\r\n  font-weight: 400;\r\n}\r\n\r\n.date {\r\n  border-color: #78cc6d;\r\n  margin: 0 0 11px;\r\n  padding: 0 5px;\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  color: #888888;\r\n  font-weight: 400;\r\n  border: 1px solid #eee;\r\n  margin-top: 20px;\r\n}\r\n\r\nhr {\r\n  margin: 40px 0 5px 0;\r\n}\r\n\r\nhr.borders {\r\n    border: 0;\r\n    height: 1px;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(191, 191, 191, 1), rgba(0, 0, 0, 0));\r\n  }\r\n\r\nhr.bordersTitle {\r\n    border: 0;\r\n    height: 1px;\r\n    margin: 0px 0 10px 0;\r\n    background-image: linear-gradient(to right, rgba(191, 191, 191, 0.5), rgba(191, 191, 191, 0.5), rgba(0, 0, 0, 0));\r\n  }\r\n\r\n.description, .activities, .website, .summary {\r\n  color: #888888;\r\n  padding-top: 8px;\r\n}\r\n\r\n.jobname {\r\n  color: #78cc6d;\r\n  font-size: 20px;\r\n}\r\n\r\n.position, .institution, .skillsName, .projectsDisplayName {\r\n  font-size: 17px;\r\n  color: #323232;\r\n  font-weight: 600;\r\n}\r\n\r\n.projectsDisplayName {\r\n  margin-top: 40px;\r\n}\r\n\r\n.website a {\r\n  color: #888888;\r\n}\r\n\r\n.nav-link {\r\n  display: flex !important;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.sidebar {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 200px;\r\n  background-color: #f1f1f1;\r\n  position: fixed;\r\n  height: 100%;\r\n  overflow: auto;\r\n}\r\n\r\n.sidebar a {\r\n    display: block;\r\n    color: black;\r\n    padding: 16px;\r\n    text-decoration: none;\r\n  }\r\n\r\n.sidebar a.active {\r\n      background-color: #4CAF50;\r\n      color: white;\r\n    }\r\n\r\n.sidebar a:hover:not(.active) {\r\n      background-color: #555;\r\n      color: white;\r\n    }\r\n\r\ndiv.content {\r\n  margin-left: 200px;\r\n  padding: 1px 16px;\r\n  height: 1000px;\r\n}\r\n\r\n/***-- RESPONSIVE MOBILE ---***/\r\n\r\n@media screen and (max-width: 768px) {\r\n  .nav {\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .container {\r\n    margin-top: 2px;\r\n    width: 96% !important;\r\n  }\r\n\r\n  .containerSettings {\r\n    padding-top: 6px;\r\n    height: auto;\r\n    background-color: #fff;\r\n    margin-top: 5px;\r\n  }\r\n\r\n  #naviBar {\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n  }\r\n\r\n  .img-size {\r\n    height: 125px !important;\r\n  }\r\n\r\n  .nav-item {\r\n    padding-top: 0px !important;\r\n    padding-bottom: 0px !important;\r\n  }\r\n\r\n  .profileContainer {\r\n    padding-bottom: 15px;\r\n  }\r\n\r\n  .area {\r\n    position: fixed;\r\n  }\r\n\r\n  .myName {\r\n    margin-top: 30px;\r\n    font-size: 30px;\r\n    font-family: 'Rubik', sans-serif;\r\n  }\r\n\r\n  .buttonsMyInfos {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .dataListSkills {\r\n    height: 86px;\r\n    list-style-type: none;\r\n    padding-left: 20px;\r\n    padding-right: 40px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\n  #animationContainer {\r\n    border-radius: 6px;\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  .profilDataTitle {\r\n    \r\n    margin-bottom: 15px;\r\n    margin-top: 15px;\r\n    text-transform: uppercase;\r\n  }\r\n}\r\n\r\n/*@media screen and (max-width: 700px) {\r\n    .sidebar {\r\n      width: 100%;\r\n      height: auto;\r\n      position: relative;\r\n    }\r\n\r\n      .sidebar a {\r\n        float: left;\r\n      }\r\n\r\n    div.content {\r\n      margin-left: 0;\r\n    }\r\n\r\n\r\n  }*/\r\n\r\n/*-----------------------*/\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.5rem 0.5rem;\r\n}\r\n\r\n.img-size {\r\n  height: 200px;\r\n}\r\n\r\n.size-container {\r\n  height: 800px;\r\n}\r\n\r\n.nav-size a {\r\n  width: 100px;\r\n}\r\n\r\n.backgroundGradient {\r\n  background: linear-gradient(0deg, #50a3a2, #78cc6d);\r\n  background-size: 400% 400%;\r\n  -webkit-animation: AnimationName 22s ease infinite;\r\n  animation: AnimationName 22s ease infinite;\r\n}\r\n\r\n@-webkit-keyframes AnimationName {\r\n  0% {\r\n    background-position: 0% 50%\r\n  }\r\n\r\n  50% {\r\n    background-position: 100% 50%\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 50%\r\n  }\r\n}\r\n\r\n@keyframes AnimationName {\r\n  0% {\r\n    background-position: 0% 50%\r\n  }\r\n\r\n  50% {\r\n    background-position: 100% 50%\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 50%\r\n  }\r\n}\r\n\r\n/*------------------------------------------*/\r\n\r\n.scale-in-hor-center {\r\n  -webkit-animation: scale-in-hor-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n  animation: scale-in-hor-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2020-3-19 14:53:48\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info. \r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation scale-in-hor-center\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes scale-in-hor-center {\r\n  0% {\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes scale-in-hor-center {\r\n  0% {\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.swing-in-left-fwd {\r\n  -webkit-animation: swing-in-left-fwd 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\r\n  animation: swing-in-left-fwd 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;\r\n}\r\n\r\n/* ----------------------------------------------\r\n * Generated by Animista on 2020-3-2 10:49:14\r\n * Licensed under FreeBSD License.\r\n * See http://animista.net/license for more info. \r\n * w: http://animista.net, t: @cssanimista\r\n * ---------------------------------------------- */\r\n\r\n/**\r\n * ----------------------------------------\r\n * animation swing-in-left-fwd\r\n * ----------------------------------------\r\n */\r\n\r\n@-webkit-keyframes swing-in-left-fwd {\r\n  0% {\r\n    -webkit-transform: rotateY(100deg);\r\n    transform: rotateY(100deg);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotateY(0);\r\n    transform: rotateY(0);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes swing-in-left-fwd {\r\n  0% {\r\n    -webkit-transform: rotateY(100deg);\r\n    transform: rotateY(100deg);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotateY(0);\r\n    transform: rotateY(0);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/*BACKGROUND*/\r\n\r\n/*---------------------------------------------------------------------------------------*/\r\n\r\n.container {\r\n  width: 100%;\r\n  position: absolute;\r\n  z-index: 5;\r\n  position: absolute;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 0);\r\n          transform: translate(-50%, 0);\r\n}\r\n\r\n.area {\r\n  /*/background: #01386A;*/\r\n  background: linear-gradient(to bottom right,#1B63A8 0%,#01386A 100%);\r\n  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);\r\n  width: 100%;\r\n  height: auto;\r\n  min-height: 100%;\r\n  min-width: 1024px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.circles {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.circles li {\r\n    position: absolute;\r\n    display: block;\r\n    list-style: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    -webkit-animation: animate 25s linear infinite;\r\n            animation: animate 25s linear infinite;\r\n    bottom: -150px;\r\n  }\r\n\r\n.circles li:nth-child(1) {\r\n      left: 25%;\r\n      width: 80px;\r\n      height: 80px;\r\n      -webkit-animation-delay: 0s;\r\n              animation-delay: 0s;\r\n    }\r\n\r\n.circles li:nth-child(2) {\r\n      left: 10%;\r\n      width: 20px;\r\n      height: 20px;\r\n      -webkit-animation-delay: 2s;\r\n              animation-delay: 2s;\r\n      -webkit-animation-duration: 12s;\r\n              animation-duration: 12s;\r\n    }\r\n\r\n.circles li:nth-child(3) {\r\n      left: 70%;\r\n      width: 20px;\r\n      height: 20px;\r\n      -webkit-animation-delay: 4s;\r\n              animation-delay: 4s;\r\n    }\r\n\r\n.circles li:nth-child(4) {\r\n      left: 40%;\r\n      width: 60px;\r\n      height: 60px;\r\n      -webkit-animation-delay: 0s;\r\n              animation-delay: 0s;\r\n      -webkit-animation-duration: 18s;\r\n              animation-duration: 18s;\r\n    }\r\n\r\n.circles li:nth-child(5) {\r\n      left: 65%;\r\n      width: 20px;\r\n      height: 20px;\r\n      -webkit-animation-delay: 0s;\r\n              animation-delay: 0s;\r\n    }\r\n\r\n.circles li:nth-child(6) {\r\n      left: 75%;\r\n      width: 110px;\r\n      height: 110px;\r\n      -webkit-animation-delay: 3s;\r\n              animation-delay: 3s;\r\n    }\r\n\r\n.circles li:nth-child(7) {\r\n      left: 35%;\r\n      width: 150px;\r\n      height: 150px;\r\n      -webkit-animation-delay: 7s;\r\n              animation-delay: 7s;\r\n    }\r\n\r\n.circles li:nth-child(8) {\r\n      left: 50%;\r\n      width: 25px;\r\n      height: 25px;\r\n      -webkit-animation-delay: 15s;\r\n              animation-delay: 15s;\r\n      -webkit-animation-duration: 45s;\r\n              animation-duration: 45s;\r\n    }\r\n\r\n.circles li:nth-child(9) {\r\n      left: 20%;\r\n      width: 15px;\r\n      height: 15px;\r\n      -webkit-animation-delay: 2s;\r\n              animation-delay: 2s;\r\n      -webkit-animation-duration: 35s;\r\n              animation-duration: 35s;\r\n    }\r\n\r\n.circles li:nth-child(10) {\r\n      left: 85%;\r\n      width: 150px;\r\n      height: 150px;\r\n      -webkit-animation-delay: 0s;\r\n              animation-delay: 0s;\r\n      -webkit-animation-duration: 11s;\r\n              animation-duration: 11s;\r\n    }\r\n\r\n@-webkit-keyframes animate {\r\n\r\n  0% {\r\n    -webkit-transform: translateY(0) rotate(0deg);\r\n            transform: translateY(0) rotate(0deg);\r\n    opacity: 1;\r\n    border-radius: 0;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(-1000px) rotate(720deg);\r\n            transform: translateY(-1000px) rotate(720deg);\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n@keyframes animate {\r\n\r\n  0% {\r\n    -webkit-transform: translateY(0) rotate(0deg);\r\n            transform: translateY(0) rotate(0deg);\r\n    opacity: 1;\r\n    border-radius: 0;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(-1000px) rotate(720deg);\r\n            transform: translateY(-1000px) rotate(720deg);\r\n    opacity: 0;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLXBhZ2UvcG9ydGZvbGlvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLHdDQUF3QztFQUN4QyxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBZTtLQUFmLG9CQUFlO1VBQWYsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBQ0E7Ozs7Ozs7Ozs7SUFVSTs7QUFDSjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnRUFBZ0U7RUFDaEUseUZBQXlGO0VBQ3pGLHVGQUF1RjtFQUN2Rix1RkFBdUY7RUFDdkYsd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQ0FBZ0M7QUFDbEM7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVFO0lBQ0UsY0FBYztFQUNoQjs7QUFHRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFJQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUdFO0lBQ0UsY0FBYztJQUNk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QW9CO2NBQXBCLG9CQUFvQjtNQUNwQiwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCOztBQUVBO01BQ0UsU0FBUztNQUNULFdBQVc7TUFDWCxZQUFZO01BQ1osMkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQiwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCOztBQUVBO01BQ0UsU0FBUztNQUNULFlBQVk7TUFDWixhQUFhO01BQ2IsMkJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQiwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCOztBQUlKOztFQUVFO0lBQ0UsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscURBQTZDO1lBQTdDLDZDQUE2QztJQUM3QyxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBYkE7O0VBRUU7SUFDRSw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxREFBNkM7WUFBN0MsNkNBQTZDO0lBQzdDLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1wYWdlL3BvcnRmb2xpby1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJTZXR0aW5ncyB7XHJcbiAgLypib3JkZXItd2lkdGg6IDJweDsqL1xyXG4gIC8qYm9yZGVyLWNvbG9yOiBibGFjazsqL1xyXG4gIC8qYm9yZGVyLXN0eWxlOiBzb2xpZDsqL1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsqL1xyXG4gIGNvbG9yOiAjMzIzMjMyO1xyXG4gIC8qZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyovXHJcbiAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNraWxsQ29sdW1ucyB7XHJcbiAgY29sdW1uLWNvdW50OiAyO1xyXG59XHJcblxyXG4uZGF0YUxpc3RTa2lsbHMge1xyXG4gIGhlaWdodDogODVweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuLyouZGF0YUxpc3RTa2lsbHMgbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4gIC5kYXRhTGlzdFNraWxscyBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Ki9cclxuLnByb2ZpbGVDb250YWluZXIge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5wcm9maWxlSW5mb0NvbnRhaW5lcnMge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLm5ldW1vcnBoaXNtc1N0eWxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4ICNGRkZGRkYgaW5zZXQsIDAgMXB4IDNweCByZ2JhKDM0LCAyNSwgMjUsIDAuNCk7XHJcbiAgLypib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsMTc3LDE5OCwwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpOyovXHJcbiAgLypib3gtc2hhZG93OiA1cHggNXB4IDdweCByZ2JhKDE2MywxNzcsMTk4LDAuNiksIC0ycHggLTFweCAycHggcmdiYSgyNTUsMjU1LDI1NSwgMC45KTsqL1xyXG4gIC8qYm94LXNoYWRvdzogNnB4IDBweCA2cHggcmdiYSgxNjMsMTc3LDE5OCwwLjYpLCAtNnB4IDBweCAxMnB4IHJnYmEoMjU1LDI1NSwyNTUsIDAuOSk7Ki9cclxuICAvKiBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDE2MywxNzcsMTk4LDAuNiksIC0ycHggMHB4IDEycHggcmdiYSgyNTUsMjU1LDI1NSwgMC45KTsqL1xyXG59XHJcblxyXG4ubXlOYW1lIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5idXR0b25DbGljayB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XHJcbn1cclxuXHJcbiAgLmJ1dHRvbkNsaWNrOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNzhDQzZEO1xyXG4gIH1cclxuXHJcblxyXG4uYnV0dG9uc015SW5mb3Mge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnNpemUtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDc1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogODVweDtcclxuICBoZWlnaHQ6IDI1NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbiAgLm5hdi1pdGVtIGEge1xyXG4gICAgY29sb3I6ICMzMjMyMzI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XHJcbiAgfVxyXG5cclxuICAgIC5uYXYtaXRlbSBhOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICM3OENDNkQ7XHJcbiAgICB9XHJcblxyXG4jbmF2aUJhcjpudGgtY2hpbGQoMikge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlZmYzO1xyXG59XHJcblxyXG4ucHJvZmlsRGF0YVRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiAgLnByb2ZpbERhdGFUaXRsZTo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIGNvbG9yOiAjOEEyQkUyO1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbERhdGFUaXRsZSBpIHtcclxuICAgIGNvbG9yOiAjNzhjYzZkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4uZGF0YUxpc3Qge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxufVxyXG5cclxuLmNvbXBhbnksIC5hcmVhRWR1YywgLmNvZGVMYW5ndWFnZXMge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZGF0ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzhjYzZkO1xyXG4gIG1hcmdpbjogMCAwIDExcHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBjb2xvcjogIzg4ODg4ODtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogNDBweCAwIDVweCAwO1xyXG59XHJcblxyXG4gIGhyLmJvcmRlcnMge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMTkxLCAxOTEsIDE5MSwgMSksIHJnYmEoMCwgMCwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgaHIuYm9yZGVyc1RpdGxlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAwcHggMCAxMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTkxLCAxOTEsIDE5MSwgMC41KSwgcmdiYSgxOTEsIDE5MSwgMTkxLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICB9XHJcblxyXG4uZGVzY3JpcHRpb24sIC5hY3Rpdml0aWVzLCAud2Vic2l0ZSwgLnN1bW1hcnkge1xyXG4gIGNvbG9yOiAjODg4ODg4O1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5qb2JuYW1lIHtcclxuICBjb2xvcjogIzc4Y2M2ZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbiwgLmluc3RpdHV0aW9uLCAuc2tpbGxzTmFtZSwgLnByb2plY3RzRGlzcGxheU5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBjb2xvcjogIzMyMzIzMjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucHJvamVjdHNEaXNwbGF5TmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLndlYnNpdGUgYSB7XHJcbiAgY29sb3I6ICM4ODg4ODg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiAgLnNpZGViYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAgIC5zaWRlYmFyIGEuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuZGl2LmNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICBwYWRkaW5nOiAxcHggMTZweDtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuLyoqKi0tIFJFU1BPTlNJVkUgTU9CSUxFIC0tLSoqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyU2V0dGluZ3Mge1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuICAjbmF2aUJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pbWctc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGVDb250YWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAubXlOYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5idXR0b25zTXlJbmZvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGFMaXN0U2tpbGxzIHtcclxuICAgIGhlaWdodDogODZweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgI2FuaW1hdGlvbkNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsRGF0YVRpdGxlIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG4vKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAgIC5zaWRlYmFyIGEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgZGl2LmNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuXHJcblxyXG4gIH0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG59XHJcblxyXG5cclxuLmltZy1zaXplIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uc2l6ZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogODAwcHg7XHJcbn1cclxuXHJcbi5uYXYtc2l6ZSBhIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kR3JhZGllbnQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNTBhM2EyLCAjNzhjYzZkKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAyMnMgZWFzZSBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogQW5pbWF0aW9uTmFtZSAyMnMgZWFzZSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMjJzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCVcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCVcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIEFuaW1hdGlvbk5hbWUge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4uc2NhbGUtaW4taG9yLWNlbnRlciB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNjYWxlLWluLWhvci1jZW50ZXIgMC4ycyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzY2FsZS1pbi1ob3ItY2VudGVyIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIwLTMtMTkgMTQ6NTM6NDhcclxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxyXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHNjYWxlLWluLWhvci1jZW50ZXJcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLWluLWhvci1jZW50ZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlLWluLWhvci1jZW50ZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnN3aW5nLWluLWxlZnQtZndkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmctaW4tbGVmdC1md2QgMC44cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzUpIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzd2luZy1pbi1sZWZ0LWZ3ZCAwLjhzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjI3NSkgYm90aDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMC0zLTIgMTA6NDk6MTRcclxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxyXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIHN3aW5nLWluLWxlZnQtZndkXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZy1pbi1sZWZ0LWZ3ZCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTAwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxMDBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN3aW5nLWluLWxlZnQtZndkIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxMDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDEwMGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKkJBQ0tHUk9VTkQqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogNTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG59XHJcblxyXG4uYXJlYSB7XHJcbiAgLyovYmFja2dyb3VuZDogIzAxMzg2QTsqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIzFCNjNBOCAwJSwjMDEzODZBIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4Zjk0ZmIsICM0ZTU0YzgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMTAyNHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmNpcmNsZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbiAgLmNpcmNsZXMgbGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvdHRvbTogLTE1MHB4O1xyXG4gIH1cclxuXHJcbiAgICAuY2lyY2xlcyBsaTpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jaXJjbGVzIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbGVmdDogNzAlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjbGVzIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxOHM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgbGVmdDogNjUlO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjbGVzIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgICAgIGxlZnQ6IDc1JTtcclxuICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjbGVzIGxpOm50aC1jaGlsZCg3KSB7XHJcbiAgICAgIGxlZnQ6IDM1JTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDdzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjbGVzIGxpOm50aC1jaGlsZCg4KSB7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxNXM7XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNDVzO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaXJjbGVzIGxpOm50aC1jaGlsZCg5KSB7XHJcbiAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNXM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XHJcbiAgICAgIGxlZnQ6IDg1JTtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDExcztcclxuICAgIH1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgcm90YXRlKDcyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageComponent", function() { return PortfolioPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_profile_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/profile-data.service */ "./src/app/services/profile-data.service.ts");




var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var PortfolioPageComponent = /** @class */ (function () {
    function PortfolioPageComponent(profileDataService) {
        this.profileDataService = profileDataService;
        this.profileDataList = [];
        this.isloading = false;
        this.animate = false;
        this.routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('triggerName', []);
    }
    PortfolioPageComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    PortfolioPageComponent.prototype.getProfile = function () {
        var _this = this;
        this.profileDataService.getProfileData().subscribe(function (res) {
            console.log(res);
            _this.profileDataList = res;
            _this.isloading = true;
        });
    };
    PortfolioPageComponent.prototype.addAnimationInContainer = function () {
        var element = document.getElementById("animationContainer");
        element.classList.remove("scale-in-hor-center");
        void element.offsetWidth; // trigger a DOM reflow
        element.classList.add("scale-in-hor-center");
    };
    PortfolioPageComponent.prototype.goLinkedIn = function () {
        window.open('https://www.linkedin.com/in/fabio-santos88', "_blank");
    };
    PortfolioPageComponent.prototype.downloadPdf = function () {
        window.open('https://github.com/Fab210/NewPortfolio/raw/master/docs/assets/CV_Fabio_Santos.pdf', "_blank");
        //const pdfUrl = 'github.com/Fab210/NewPortfolio/raw/master/docs/assets/CVdevsite3.pdf';
        //const pdfName = 'CV_de_Fabio';
        //FileSaver.saveAs(pdfUrl, pdfName);
    };
    PortfolioPageComponent.ctorParameters = function () { return [
        { type: _services_profile_data_service__WEBPACK_IMPORTED_MODULE_3__["ProfileDataService"] }
    ]; };
    PortfolioPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-portfolio-page",
            template: __webpack_require__(/*! raw-loader!./portfolio-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio-page/portfolio-page.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-page.component.css */ "./src/app/portfolio-page/portfolio-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_profile_data_service__WEBPACK_IMPORTED_MODULE_3__["ProfileDataService"]])
    ], PortfolioPageComponent);
    return PortfolioPageComponent;
}());



/***/ }),

/***/ "./src/app/services/profile-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/profile-data.service.ts ***!
  \**************************************************/
/*! exports provided: ProfileDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDataService", function() { return ProfileDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProfileDataService = /** @class */ (function () {
    function ProfileDataService(http) {
        this.http = http;
    }
    ProfileDataService.prototype.getProfileData = function () {
        return this.http.get('https://gitconnected.com/v1/portfolio/fab210');
    };
    ProfileDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProfileDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileDataService);
    return ProfileDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fabio\Documents\Github Projects\NewPortfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map