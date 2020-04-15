(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header id=\"header\" [translucent]=\"true\" style=\"display: none;\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <div class=\"icono\"></div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content force-overscroll=\"false\">\n  <!-- <video id=\"video\" autoplay loop src=\"../../assets/video/homeProvidencia.mp4\"></video> -->\n  <div id=\"video\"></div>\n  <div id=\"fixed\">\n    <ion-icon name=\"car\" class=\"car icon-glow\" id=\"auto\"></ion-icon>\n      <canvas id=\"myCanvas\" width=\"800\" height=\"600\">\n      </canvas>\n    </div> \n   <!--  <ion-list style=\"background-color:rgba(0, 0, 0, 0.8);display:none\">\n      <ion-select class=\"selector\" interface=\"popover\" placeholder=\"- SELECCIONE -\" (ionChange)=\"SetRuta($event)\">\n        <ion-select-option *ngFor=\"let item of items\" value=\"{{item.coordenadas}}\">{{item.nombre}}</ion-select-option>\n      </ion-select>\n   </ion-list> -->\n  <div id=\"content\" class=\"page-centered-element\">\n    <div class=\"content\">\n      <h1 class=\"title\">\n        <div class=\"icono-center\"></div>\n      </h1>\n      <h4 class=\"title\">Bienvenido a GeoParking DATCO</h4>\n      <h4 class=\"title\">Tu estacionamiento asignado es</h4>\n      <p id=\"spinner\">{{est}}</p>\n      <h4 class=\"title\">Te ayudamos a llegar a tu estacionamiento</h4>\n      <div class=\"buttons-container\">\n        <ion-button (click)=\"SetRuta()\" expand=\"large\" fill=\"outline\">\n          Generar Ruta\n          <ion-icon class=\"arrowSelect\" name=\"car\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer id=\"footer\" style=\"display:none\">\n<ion-toolbar color=\"primary\">\n   <!--  <ion-segment  style=\"background-color: #1c8dce\">\n    <ion-segment-button value=\"favorites\" style=\"background-color: #1c8dce;color:#ffffff\">\n     <h4 class=\"arrowSelect\">Sigue tu Ruta</h4>\n    </ion-segment-button>\n  </ion-segment>-->\n  <ion-segment>\n    <ion-button expand=\"large\" fill=\"outline\" style=\"color:#fff\" (click)=\"redirect()\">\n      <button ion-button style=\"background-color:transparent\">\n      <ion-icon name=\"home\" style=\"font-size: 15px;color:#fff\"></ion-icon>\n    </button>\n    </ion-button>\n    <ion-button expand=\"large\" fill=\"outline\" style=\"color:#fff\">\n      <a href=\"https://twitter.com/grupodatco\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Twitter\">\n      <button ion-button style=\"background-color: transparent\">\n        <ion-icon name=\"logo-twitter\" style=\"color:#fff\">\n        </ion-icon>\n      </button>\n    </a>\n    </ion-button>\n    <ion-button expand=\"large\" fill=\"outline\" style=\"color:#fff\">\n      <a href=\"https://www.youtube.com/grupodatco\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Youtube\">\n      <button ion-button style=\"background-color:transparent\">\n        <ion-icon name=\"logo-youtube\" style=\"color:#fff\">\n        </ion-icon>\n      </button>\n    </a>\n    </ion-button>\n</ion-segment>\n</ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.car {\n  position: absolute;\n  top: 20px;\n  left: 469px;\n  font-size: 20px;\n  color: #2f4793;\n  padding: 8px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n  background: rgba(216, 216, 216, 0.3);\n  display: none;\n}\n\n.arrowSelect {\n  -webkit-animation: mover 1s infinite alternate;\n  animation: mover 1s infinite alternate;\n}\n\n@-webkit-keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n}\n\n@keyframes mover {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n  }\n}\n\n@-webkit-keyframes glowing {\n  0% {\n    box-shadow: 0 0 -10px #c4a300;\n  }\n  40% {\n    box-shadow: 0 0 20px #c4a300;\n  }\n  60% {\n    box-shadow: 0 0 20px #c4a300;\n  }\n  100% {\n    box-shadow: 0 0 -10px #c4a300;\n  }\n}\n\n@keyframes glowing {\n  0% {\n    box-shadow: 0 0 -10px #c4a300;\n  }\n  40% {\n    box-shadow: 0 0 20px #c4a300;\n  }\n  60% {\n    box-shadow: 0 0 20px #c4a300;\n  }\n  100% {\n    box-shadow: 0 0 -10px #c4a300;\n  }\n}\n\n.icon-glow {\n  -webkit-animation: glowing 2000ms infinite;\n          animation: glowing 2000ms infinite;\n}\n\n/*.fixed{\n  position: relative;\n  height: 90%;\n  width: 100%;\n  overflow: scroll;\n}*/\n\n/*video {\n  height: auto;\n  width: auto;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -100;\n}*/\n\n#video {\n  background: url('home-parking-description.jpg') no-repeat center center/cover;\n  height: auto;\n  width: auto;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -100;\n}\n\n.icono {\n  height: 55px;\n  background: url('gd-ima_h-one_stroke-dark-48h.png') no-repeat left center/100px;\n}\n\n.icono-center {\n  height: 55px;\n  background: url('gd-ima_h-one_stroke-dark-48h.png') no-repeat center center/120px;\n}\n\nh1 {\n  color: #fff;\n}\n\nh5 {\n  text-shadow: 1px 1px #fff;\n  font-size: 25px;\n}\n\nh4 {\n  color: #fff;\n  text-shadow: 2px 2px #000;\n  font-size: 20px;\n}\n\n#myCanvas {\n  background: url('ParkingDatco.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 70%;\n  width: 800px;\n  height: 500px;\n  display: none;\n}\n\n.selector {\n  font-size: 20px;\n  letter-spacing: 0.1px;\n  color: #fff;\n  width: 100% !important;\n  max-width: 100% !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: rgba(0, 0, 0, 0.6);\n  text-align: center;\n}\n\n.page-centered-element {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.content {\n  text-align: center;\n}\n\n.content .buttons-container {\n  margin-top: 30px;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: white;\n  color: #2d2d86;\n  width: 100vw;\n}\n\n#spinner {\n  -webkit-animation-name: spin, depth;\n          animation-name: spin, depth;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  text-align: center;\n  font-size: 40px;\n  font-weight: bold;\n  color: #fff;\n}\n\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  to {\n    -webkit-transform: rotateY(-360deg);\n            transform: rotateY(-360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  to {\n    -webkit-transform: rotateY(-360deg);\n            transform: rotateY(-360deg);\n  }\n}\n\n@-webkit-keyframes depth {\n  0% {\n    text-shadow: 0 0 black;\n  }\n  25% {\n    text-shadow: 5px 0 black, 2px 0 black, 3px 0 black, 4px 0 black, 5px 0 black;\n  }\n  50% {\n    text-shadow: 0 0 black;\n  }\n  75% {\n    text-shadow: -1px 0 black, -2px 0 black, -3px 0 black, -4px 0 black, -5px 0 black;\n  }\n  100% {\n    text-shadow: 0 0 black;\n  }\n}\n\n@keyframes depth {\n  0% {\n    text-shadow: 0 0 black;\n  }\n  25% {\n    text-shadow: 5px 0 black, 2px 0 black, 3px 0 black, 4px 0 black, 5px 0 black;\n  }\n  50% {\n    text-shadow: 0 0 black;\n  }\n  75% {\n    text-shadow: -1px 0 black, -2px 0 black, -3px 0 black, -4px 0 black, -5px 0 black;\n  }\n  100% {\n    text-shadow: 0 0 black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcUHJveWVjdG9zTHVpc1xcSW9uaWNcXEdlb1Bhcmtpbmcvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSw4Q0FBQTtFQUNBLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUFLLGdDQUFBO1lBQUEsd0JBQUE7RUNFTDtFRERBO0lBQU8sb0NBQUE7WUFBQSw0QkFBQTtFQ0lQO0FBQ0Y7O0FESEE7RUFDRTtJQUFLLGdDQUFBO1lBQUEsd0JBQUE7RUNNTDtFRExBO0lBQU8sb0NBQUE7WUFBQSw0QkFBQTtFQ1FQO0FBQ0Y7O0FETEE7RUFDRTtJQUFLLDZCQUFBO0VDUUw7RURQQTtJQUFNLDRCQUFBO0VDVU47RURUQTtJQUFNLDRCQUFBO0VDWU47RURYQTtJQUFPLDZCQUFBO0VDY1A7QUFDRjs7QURuQkE7RUFDRTtJQUFLLDZCQUFBO0VDUUw7RURQQTtJQUFNLDRCQUFBO0VDVU47RURUQTtJQUFNLDRCQUFBO0VDWU47RURYQTtJQUFPLDZCQUFBO0VDY1A7QUFDRjs7QURaQTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7QUNjRjs7QURYQTs7Ozs7RUFBQTs7QUFPQTs7Ozs7O0VBQUE7O0FBUUE7RUFDRSw2RUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1lGOztBRFRBO0VBQ0UsWUFBQTtFQUNBLCtFQUFBO0FDWUY7O0FEVEE7RUFDRSxZQUFBO0VBQ0EsaUZBQUE7QUNZRjs7QURUQTtFQUNFLFdBQUE7QUNZRjs7QURUQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1lGOztBRFRBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ1lGOztBRFRBO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNZRjs7QURSRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUUo7O0FETEU7RUFDRSxrQkFBQTtBQ1FKOztBRE5JO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1FOOztBREhFO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpFO0VBQ0U7SUFBTyxnQ0FBQTtZQUFBLHdCQUFBO0VDUVQ7RURQRTtJQUFLLG1DQUFBO1lBQUEsMkJBQUE7RUNVUDtBQUNGOztBRGJFO0VBQ0U7SUFBTyxnQ0FBQTtZQUFBLHdCQUFBO0VDUVQ7RURQRTtJQUFLLG1DQUFBO1lBQUEsMkJBQUE7RUNVUDtBQUNGOztBRFRFO0VBQ0U7SUFBSyxzQkFBQTtFQ1lQO0VEWEU7SUFBTSw0RUFBQTtFQ2NSO0VEYkU7SUFBTSxzQkFBQTtFQ2dCUjtFRGZFO0lBQU0saUZBQUE7RUNrQlI7RURqQkU7SUFBTyxzQkFBQTtFQ29CVDtBQUNGOztBRDFCRTtFQUNFO0lBQUssc0JBQUE7RUNZUDtFRFhFO0lBQU0sNEVBQUE7RUNjUjtFRGJFO0lBQU0sc0JBQUE7RUNnQlI7RURmRTtJQUFNLGlGQUFBO0VDa0JSO0VEakJFO0lBQU8sc0JBQUE7RUNvQlQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcntcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgdG9wOjIwcHg7IFxuICBsZWZ0OjQ2OXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZ2JhKDQ3LDcxLDE0NywxKTtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOnJnYmEoMjE2LDIxNiwyMTYsMC4zKTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93U2VsZWN0e1xuICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxufVxuQGtleWZyYW1lcyBtb3ZlciB7XG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG59XG5cblxuQGtleWZyYW1lcyBnbG93aW5nIHtcbiAgMCUgeyBib3gtc2hhZG93OiAwIDAgLTEwcHggI2M0YTMwMDsgfVxuICA0MCUgeyBib3gtc2hhZG93OiAwIDAgMjBweCAjYzRhMzAwOyB9XG4gIDYwJSB7IGJveC1zaGFkb3c6IDAgMCAyMHB4ICNjNGEzMDA7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAtMTBweCAjYzRhMzAwOyB9XG59XG5cbi5pY29uLWdsb3cge1xuICBhbmltYXRpb246IGdsb3dpbmcgMjAwMG1zIGluZmluaXRlO1xufVxuXG4vKi5maXhlZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59Ki9cblxuLyp2aWRlbyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTEwMDtcbn0qL1xuXG4jdmlkZW97XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWcvaG9tZS1wYXJraW5nLWRlc2NyaXB0aW9uLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTEwMDtcbn1cblxuLmljb25ve1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWcvZ2QtaW1hX2gtb25lX3N0cm9rZS1kYXJrLTQ4aC5wbmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXIgLyAxMDBweDsgIFxufVxuXG4uaWNvbm8tY2VudGVye1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWcvZ2QtaW1hX2gtb25lX3N0cm9rZS1kYXJrLTQ4aC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIDEyMHB4OyAgXG59XG5cbmgxe1xuICBjb2xvcjojZmZmO1xufVxuXG5oNXtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG5oNHtcbiAgY29sb3I6I2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jbXlDYW52YXN7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vc3JjL2Fzc2V0cy9pbWcvUGFya2luZ0RhdGNvLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5Om5vbmU7XG5cbn1cblxuICAuc2VsZWN0b3Ige1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG5cblxuICAucGFnZS1jZW50ZXJlZC1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBjb2xvcjojMmQyZDg2O1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgfVxuXG4gIC8vbnVtZXJvIHZ1ZWx0YXNcbiAgI3NwaW5uZXIge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluLCBkZXB0aDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM2MGRlZyk7IH1cbiAgfVxuICBAa2V5ZnJhbWVzIGRlcHRoIHtcbiAgICAwJSB7IHRleHQtc2hhZG93OiAwIDAgYmxhY2s7IH1cbiAgICAyNSUgeyB0ZXh0LXNoYWRvdzogNXB4IDAgYmxhY2ssIDJweCAwIGJsYWNrLCAzcHggMCBibGFjaywgNHB4IDAgYmxhY2ssIDVweCAwIGJsYWNrOyB9XG4gICAgNTAlIHsgdGV4dC1zaGFkb3c6IDAgMCBibGFjazsgfVxuICAgIDc1JSB7IHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIC0ycHggMCBibGFjaywgLTNweCAwIGJsYWNrLCAtNHB4IDAgYmxhY2ssIC01cHggMCBibGFjazsgfVxuICAgIDEwMCUgeyB0ZXh0LXNoYWRvdzogMCAwIGJsYWNrOyB9XG4gIH1cbiIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDQ2OXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMmY0NzkzO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjE2LCAyMTYsIDIxNiwgMC4zKTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93U2VsZWN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBnbG93aW5nIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAtMTBweCAjYzRhMzAwO1xuICB9XG4gIDQwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggI2M0YTMwMDtcbiAgfVxuICA2MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNjNGEzMDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIC0xMHB4ICNjNGEzMDA7XG4gIH1cbn1cbi5pY29uLWdsb3cge1xuICBhbmltYXRpb246IGdsb3dpbmcgMjAwMG1zIGluZmluaXRlO1xufVxuXG4vKi5maXhlZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59Ki9cbi8qdmlkZW8ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xMDA7XG59Ki9cbiN2aWRlbyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL3NyYy9hc3NldHMvaW1nL2hvbWUtcGFya2luZy1kZXNjcmlwdGlvbi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTEwMDtcbn1cblxuLmljb25vIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9zcmMvYXNzZXRzL2ltZy9nZC1pbWFfaC1vbmVfc3Ryb2tlLWRhcmstNDhoLnBuZ1wiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXIvMTAwcHg7XG59XG5cbi5pY29uby1jZW50ZXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL3NyYy9hc3NldHMvaW1nL2dkLWltYV9oLW9uZV9zdHJva2UtZGFyay00OGgucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyLzEyMHB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5oNSB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuaDQge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jbXlDYW52YXMge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9zcmMvYXNzZXRzL2ltZy9QYXJraW5nRGF0Y28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogNzAlO1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3RvciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhZ2UtY2VudGVyZWQtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudCAuYnV0dG9ucy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMyZDJkODY7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuI3NwaW5uZXIge1xuICBhbmltYXRpb24tbmFtZTogc3BpbiwgZGVwdGg7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGVwdGgge1xuICAwJSB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCBibGFjaztcbiAgfVxuICAyNSUge1xuICAgIHRleHQtc2hhZG93OiA1cHggMCBibGFjaywgMnB4IDAgYmxhY2ssIDNweCAwIGJsYWNrLCA0cHggMCBibGFjaywgNXB4IDAgYmxhY2s7XG4gIH1cbiAgNTAlIHtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIGJsYWNrO1xuICB9XG4gIDc1JSB7XG4gICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgLTJweCAwIGJsYWNrLCAtM3B4IDAgYmxhY2ssIC00cHggMCBibGFjaywgLTVweCAwIGJsYWNrO1xuICB9XG4gIDEwMCUge1xuICAgIHRleHQtc2hhZG93OiAwIDAgYmxhY2s7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: coordenadasCarX, coordenadasCarY, token, HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coordenadasCarX", function () {
      return coordenadasCarX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coordenadasCarY", function () {
      return coordenadasCarY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "token", function () {
      return token;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    const coordenadasCarX = 469;
    const coordenadasCarY = 50;
    var token = 0;
    var iluminacion = 1;
    let HomePage = class HomePage {
      constructor(storageService, plt) {
        this.storageService = storageService;
        this.plt = plt;
        this.items = [];
        this.est = 0;
        this.plt.ready().then(() => {
          this.loadItems();
        });
      }

      loadItems() {
        this.storageService.addItem().then(items => {
          this.items = items;
        }).then(r => {
          this.storageService.loadItem().then(items => {
            this.items = items;
            var url = window.location.search; //let tk = 57;

            let tk = parseInt(url.substring(url.lastIndexOf('=') + 1));
            token = tk;
            let itemCoordenada = this.items.filter(coor => coor.id == token);
            this.est = itemCoordenada[0].nombre;
          });
        });
      }

      getItem() {
        this.storageService.loadItem();
      }
      /* getCoordinates(event){
           let Y =(event.y -20);
           let X = (event.offsetX);
           console.log('y:' + Y);
           console.log('x' + X);
         }*/


      redirect() {
        location.reload();
      }

      SetRuta() {
        let itemCoordenada = this.items.filter(coor => coor.id == token);
        draw(itemCoordenada);
        setInterval(function () {
          SetRutaAgain(itemCoordenada);
        }, 2000);

        function draw(ite) {
          if (document.getElementById("video")) {
            document.getElementById("video").remove();
          }

          let elm = document.getElementById('auto');
          elm.setAttribute("style", "display:block");
          elm = document.getElementById('myCanvas');
          elm.setAttribute("style", "display:block");
          elm = document.getElementById('footer');
          elm.setAttribute("style", "display:block");
          elm = document.getElementById('header');
          elm.setAttribute("style", "display:block");
          elm = document.getElementById('content');
          elm.setAttribute("style", "display:none");
          elm = document.getElementById('fixed');
          elm.setAttribute("style", "position: relative;height: 90%;width: 100%;overflow: scroll;");
          let coordenadaX = coordenadasCarX;
          let coordenadaY = coordenadasCarY;
          let coordenadas = ite[0].coordenadas;
          let arrCoordenadas = coordenadas.split(',');
          let canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, 800, 500);
          ctx.beginPath();
          ctx.moveTo(coordenadasCarX, coordenadasCarY);
          ctx.lineWidth = 4;
          ctx.strokeStyle = "rgba(47,71,147,1)";

          for (var ar in arrCoordenadas) {
            var jsonCoordenadas = JSON.parse(arrCoordenadas[ar]);

            if (jsonCoordenadas.hasOwnProperty("x")) {
              if (coordenadaX > jsonCoordenadas.x) {
                for (var i = coordenadaX; i >= jsonCoordenadas.x; i--) {
                  doSetTimeoutXNegativo(i, coordenadaY);
                }

                coordenadaX = jsonCoordenadas.x;
              } else {
                for (var i = coordenadaX; i <= jsonCoordenadas.x; i++) {
                  doSetTimeoutXPositivo(i, coordenadaY);
                }

                coordenadaX = jsonCoordenadas.x;
              }
            } else {
              if (coordenadaY > jsonCoordenadas.y) {
                for (var i = coordenadaY; i >= jsonCoordenadas.y; i--) {
                  doSetTimeoutYNegativo(coordenadaX, i);
                }

                coordenadaY = jsonCoordenadas.y;
              } else {
                for (var i = coordenadaY; i <= jsonCoordenadas.y; i++) {
                  doSetTimeoutYPositivo(coordenadaX, i);
                }

                coordenadaY = jsonCoordenadas.y;
              }
            }
          }

          ctx.closePath();

          function doSetTimeoutXPositivo(x, y) {
            setTimeout(function () {
              ctx.lineTo(x, y);
              ctx.stroke();
            }, 2000);
          }

          function doSetTimeoutXNegativo(x, y) {
            setTimeout(function () {
              ctx.lineTo(x, y);
              ctx.stroke();
            }, 2000);
          }

          function doSetTimeoutYPositivo(x, y) {
            setTimeout(function () {
              ctx.lineTo(x, y);
              ctx.stroke();
            }, 2000);
          }

          function doSetTimeoutYNegativo(x, y) {
            setTimeout(function () {
              ctx.lineTo(x, y);
              ctx.stroke();
            }, 2000);
          }
        }

        function SetRutaAgain(ite) {
          let itemCoordenada = ite;
          let coordenadaX = coordenadasCarX;
          let coordenadaY = coordenadasCarY;
          let coordenadas = itemCoordenada[0].coordenadas;
          let arrCoordenadas = coordenadas.split(',');
          let canvasa = document.getElementById("myCanvas");
          var ctxa = canvasa.getContext("2d");
          ctxa.beginPath();
          ctxa.moveTo(coordenadasCarX, coordenadasCarY);
          ctxa.lineWidth = 4;
          ctxa.strokeStyle = "rgba(47,71,147,1)";

          if (iluminacion === 0) {
            ctxa.shadowBlur = 2;
            ctxa.shadowColor = "#c4a300";
            iluminacion = 1;
          } else {
            ctxa.shadowBlur = 3;
            ctxa.shadowColor = "#fff";
            iluminacion = 0;
          }

          for (var ar in arrCoordenadas) {
            var jsonCoordenadas = JSON.parse(arrCoordenadas[ar]);

            if (jsonCoordenadas.hasOwnProperty("x")) {
              if (coordenadaX > jsonCoordenadas.x) {
                for (var i = coordenadaX; i >= jsonCoordenadas.x; i--) {
                  doSetTimeoutXNegativoa(i, coordenadaY);
                }

                coordenadaX = jsonCoordenadas.x;
              } else {
                for (var i = coordenadaX; i <= jsonCoordenadas.x; i++) {
                  doSetTimeoutXPositivoa(i, coordenadaY);
                }

                coordenadaX = jsonCoordenadas.x;
              }
            } else {
              if (coordenadaY > jsonCoordenadas.y) {
                for (var i = coordenadaY; i >= jsonCoordenadas.y; i--) {
                  doSetTimeoutYNegativoa(coordenadaX, i);
                }

                coordenadaY = jsonCoordenadas.y;
              } else {
                for (var i = coordenadaY; i <= jsonCoordenadas.y; i++) {
                  doSetTimeoutYPositivoa(coordenadaX, i);
                }

                coordenadaY = jsonCoordenadas.y;
              }
            }
          }

          ctxa.closePath();

          function doSetTimeoutXPositivoa(x, y) {
            setTimeout(function () {
              ctxa.lineTo(x, y);
              ctxa.stroke();
            }, 2000);
          }

          function doSetTimeoutXNegativoa(x, y) {
            setTimeout(function () {
              ctxa.lineTo(x, y);
              ctxa.stroke();
            }, 2000);
          }

          function doSetTimeoutYPositivoa(x, y) {
            setTimeout(function () {
              ctxa.lineTo(x, y);
              ctxa.stroke();
            }, 2000);
          }

          function doSetTimeoutYNegativoa(x, y) {
            setTimeout(function () {
              ctxa.lineTo(x, y);
              ctxa.stroke();
            }, 2000);
          }
        }
      }

    };

    HomePage.ctorParameters = () => [{
      type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }];

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    const ITEMS_KEY = 'my-items';
    let StorageService = class StorageService {
      constructor(storage) {
        this.storage = storage;
      }

      addItem() {
        ///conecta api o servicio
        let destino = [];
        destino.push({
          id: 1,
          nombre: 'PARKING - 1',
          coordenadas: '{"x" : 200},{"y" : 36},{"x" : 160}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 6,
          nombre: 'PARKING - 6',
          coordenadas: '{"x" : 192},{"y" : 163},{"x" : 163}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 12,
          nombre: 'PARKING - 12',
          coordenadas: '{"x" : 192},{"y" : 315},{"x" : 163}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 15,
          nombre: 'PARKING - 15',
          coordenadas: '{"x" : 192},{"y" : 390},{"x" : 163}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 18,
          nombre: 'PARKING - 18',
          coordenadas: '{"x" : 192},{"y" : 467},{"x" : 163}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 21,
          nombre: 'PARKING - 21',
          coordenadas: '{"x" : 192},{"y" : 545},{"x" : 163}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 24,
          nombre: 'PARKING - 24',
          coordenadas: '{"x" : 192},{"y" : 140},{"x" : 240}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 27,
          nombre: 'PARKING - 27',
          coordenadas: '{"x" : 192},{"y" : 215},{"x" : 240}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 30,
          nombre: 'PARKING - 30',
          coordenadas: '{"x" : 320},{"y" : 113},{"x" : 290}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 33,
          nombre: 'PARKING - 33',
          coordenadas: '{"x" : 320},{"y" : 190},{"x" : 283}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 36,
          nombre: 'PARKING - 36',
          coordenadas: '{"x" : 320},{"y" : 266},{"x" : 290}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 41,
          nombre: 'PARKING - 41',
          coordenadas: '{"x" : 320},{"y" : 390},{"x" : 290}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 42,
          nombre: 'PARKING - 42',
          coordenadas: '{"x" : 320},{"y" : 113},{"x" : 350}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 45,
          nombre: 'PARKING - 45',
          coordenadas: '{"x" : 320},{"y" : 190},{"x" : 350}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 50,
          nombre: 'PARKING - 50',
          coordenadas: '{"x" : 320},{"y" : 315},{"x" : 350}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 51,
          nombre: 'PARKING - 51',
          coordenadas: '{"x" : 320},{"y" : 345},{"x" : 420}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 54,
          nombre: 'PARKING - 54',
          coordenadas: '{"x" : 320},{"y" : 365},{"x" : 380},{"y" : 420},{"x" : 420}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        }, {
          id: 57,
          nombre: 'PARKING - 57',
          coordenadas: '{"x" : 320},{"y" : 365},{"x" : 380},{"y" : 498},{"x" : 420}',
          mapa: '../../../src/assets/img/ParkingDatco.png'
        });
        this.storage.set(ITEMS_KEY, destino);
        return this.storage.get(ITEMS_KEY);
      }

      loadItem() {
        return this.storage.get(ITEMS_KEY);
      }

    };

    StorageService.ctorParameters = () => [{
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
    }];

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], StorageService);
    ;
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map