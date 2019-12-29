function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart/chart.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart/chart.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChartChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<google-chart *ngIf=\"chart.data\"\n[type]=\"chart.type\" [data]=\"chart.data\" [columnNames]=\"chart.columnNames\">\n</google-chart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-filter/contact-filter.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-filter/contact-filter.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactFilterContactFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input type=\"text\" #filter (keyup)=\"onFilter(filter.value)\" placeholder=\" search..\" />";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-list/contact-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-list/contact-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactListContactListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let contact of contacts\">\n    <app-contact-preview *ngIf=\"contact\" [contact]=\"contact\">\n    </app-contact-preview>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-preview/contact-preview.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-preview/contact-preview.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactPreviewContactPreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section *ngIf=\"contact\" [routerLink]=\"'/contact-details/'+contact._id\" class=\"contact-prev\">\n    <img [src]=\"contact.imgUrl\" height=\"50px\" />\n    <p>{{contact.name}}</p>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header [class.opened-menu]=\"isMenuOpen\">\n    <div class=\"screen\" (click)=\"toggleMenu()\"></div>\n    <h2>Mister BitCoin</h2>\n    <nav (click)=\"toggleMenu()\" class=\"navbar-nav\">\n        <a routerLink=\"/\" class=\"nav-item\">\n            <fa name=\"home\"></fa>\n        </a>\n        <a routerLink=\"/contacts\" class=\"nav-item\">\n            <fa name=\"address-book-o\"></fa>\n        </a>\n        <a routerLink=\"/statistics\" class=\"nav-item\">\n            <fa name=\"line-chart\"></fa>\n        </a>\n    </nav>\n    <button (click)=\"toggleMenu()\" class=\"menu-btn\">☰</button>\n\n</header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/moves-list/moves-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/moves-list/moves-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMovesListMovesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>Transfer History:</h4>\n<ul class=\"clean-list\">\n    <li *ngFor=\"let transfer of transfers | slice:0:3;\" class=\"transfer-container\">\n        <label>Transfered To: {{transfer.to}}</label>\n        <label>At: {{transfer.at | date: 'yyyy-MM-dd'}}</label>\n       <label>Amount: {{transfer.amount}}</label>\n    </li>\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transfer-fund/transfer-fund.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transfer-fund/transfer-fund.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTransferFundTransferFundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <h4>Transfer BitCoin to {{contactName}}</h4>\n    <input type=\"number\" min=\"0\" [max]=\"user.coins\" #input />\n    <fa (click)=\"onTransfer(input.value)\" name=\"send\" class=\"my-icons send-icon\"></fa>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-details-page/contact-details-page.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-details-page/contact-details-page.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactDetailsPageContactDetailsPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section *ngIf=\"contact\" class=\"details-container\">\n    <div class=\"my-icons-container\">\n        <fa (click)=\"goBack()\" name=\"arrow-left\" class=\"my-icons back-icon\"></fa>\n        <img [src]=\"contact.imgUrl\" height=\"50px\" />\n        <fa [routerLink]=\"'/contact-edit/' + contact._id\" name=\"edit\" class=\"my-icons edit-icon\"></fa>\n    </div>\n    <section>\n        <h3>{{contact.name}}</h3>\n        <h3>{{contact.email}}</h3>\n        <h3>{{contact.phone}}</h3>\n    </section>\n    <section *ngIf=\"user$ | async as user\">\n        <app-transfer-fund [contactName]=\"contact.name\" [user]=\"user\" (transfer)=\"transfer($event)\">\n        </app-transfer-fund>\n        <app-moves-list [transfers]=\"transfersToShow(contact._id, user) | slice:0:3\"></app-moves-list>\n    </section>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-edit-page/contact-edit-page.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-edit-page/contact-edit-page.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactEditPageContactEditPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<form *ngIf=\"contactToEdit\">\n    <h4 *ngIf=\"contactToEdit._id\">Edit Contact</h4>\n    <div class=\"my-icons-container\">\n        <fa (click)=\"goBack()\" name=\"arrow-left\" class=\"my-icons back-icon\"></fa>\n        <fa (click)=\"saveContact()\" name=\"check-square\" class=\"my-icons save-icon\"></fa>\n    </div>\n    <label>\n        name:\n        <input [(ngModel)]=\"contactToEdit.name\" name=\"name\" type=\"text\" />\n    </label>\n    <label>\n        phone:\n        <input [(ngModel)]=\"contactToEdit.phone\" name=\"phone\" type=\"text\" />\n    </label>\n    <label>\n        email:\n        <input [(ngModel)]=\"contactToEdit.email\" name=\"email\" type=\"text\" />\n    </label>\n</form>\n<button *ngIf=\"contactToEdit && contactToEdit._id\" (click)=\"removeContact()\" class=\"btn btn-dark\">Remove</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-contact-filter (filterContacts)='displayFilter($event)'></app-contact-filter>\r\n<app-contact-list [contacts]=\"contacts$ | async\"></app-contact-list>\r\n<fa name=\"plus\" routerLink=\"/contact-add\"></fa>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section *ngIf=\"(user$ | async) as user;else toSignUp\">\n    <section class=\"user-details-container\">\n        <h3>Hello {{user.name}} !</h3>\n        <label>\n            <img height=\"20px\" src=\"../../../assets/coin.png\" />\n            Coins: {{user.coins}}\n        </label>\n\n        <label *ngIf=\"(rate$ | async) as rate\">\n            <fa name=\"bitcoin\"></fa> Market Rate: {{rate}}\n        </label>\n    </section>\n    <app-moves-list [transfers]=\"user.moves\"></app-moves-list>\n</section>\n\n<ng-template #toSignUp>\n    <h3>Welcome ! please signup</h3>\n    <button routerLink=\"/signup\">signup</button>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupPageSignupPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Please enter your name: </h3>\n<input #input type=\"text\" />\n<button (click)=\"signup(input.value)\">Signup</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistic-page/statistic-page.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistic-page/statistic-page.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStatisticPageStatisticPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h3>Market Price (USD)</h3>\n<!-- <app-chart [chart]=\"marketPriceChart\"></app-chart> -->\n<p>Avarage USD market price across major bitcoin exchanges.</p>\n<h3>Confirmed Transactions Per Day</h3>\n<!-- <app-chart [chart]=\"dailyTransChart\"></app-chart> -->\n<p>The number of daily confirmed transactions.</p>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/contact-page/contact-page.component */
    "./src/app/pages/contact-page/contact-page.component.ts");
    /* harmony import */


    var _pages_contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/contact-details-page/contact-details-page.component */
    "./src/app/pages/contact-details-page/contact-details-page.component.ts");
    /* harmony import */


    var _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/contact-edit-page/contact-edit-page.component */
    "./src/app/pages/contact-edit-page/contact-edit-page.component.ts");
    /* harmony import */


    var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/signup-page/signup-page.component */
    "./src/app/pages/signup-page/signup-page.component.ts");
    /* harmony import */


    var _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/statistic-page/statistic-page.component */
    "./src/app/pages/statistic-page/statistic-page.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: 'contacts',
      component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"]
    }, {
      path: 'contact-add',
      component: _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditPageComponent"]
    }, {
      path: 'contact-edit/:id',
      component: _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditPageComponent"]
    }, {
      path: 'contact-details/:id',
      component: _pages_contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailsPageComponent"]
    }, {
      path: 'signup',
      component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_7__["SignupPageComponent"]
    }, {
      path: 'statistics',
      component: _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_8__["StatisticPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  text-align: center;\n  color: #0A090C;\n  background-color: #F0EDEE;\n  margin: 0;\n  font-family: cursive;\n}\n\ninput {\n  border: none;\n  background-color: transparent;\n  border-bottom: 1px solid black;\n  margin: 20px 0;\n  padding: 5px;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.my-icons-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.my-icons {\n  font-size: 2em;\n  cursor: pointer;\n  outline: none;\n}\n\n.clean-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEb3RhblxcRGVza3RvcFxcbWlzdGVyLWJpdGNvaW4tYW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtBQ0NSOztBREdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwQTA5MEM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFREVFO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLm15LWljb25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubXktaWNvbnMge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2xlYW4tbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59IiwiYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwQTA5MEM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEVERUU7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogNXB4O1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubXktaWNvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubXktaWNvbnMge1xuICBmb250LXNpemU6IDJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2xlYW4tbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _services_bitCoin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/bitCoin.service */
    "./src/app/services/bitCoin.service.ts");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/contact-page/contact-page.component */
    "./src/app/pages/contact-page/contact-page.component.ts");
    /* harmony import */


    var _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/contact-edit-page/contact-edit-page.component */
    "./src/app/pages/contact-edit-page/contact-edit-page.component.ts");
    /* harmony import */


    var _pages_contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/contact-details-page/contact-details-page.component */
    "./src/app/pages/contact-details-page/contact-details-page.component.ts");
    /* harmony import */


    var _components_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/contact-filter/contact-filter.component */
    "./src/app/components/contact-filter/contact-filter.component.ts");
    /* harmony import */


    var _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/contact-list/contact-list.component */
    "./src/app/components/contact-list/contact-list.component.ts");
    /* harmony import */


    var _components_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/contact-preview/contact-preview.component */
    "./src/app/components/contact-preview/contact-preview.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/signup-page/signup-page.component */
    "./src/app/pages/signup-page/signup-page.component.ts");
    /* harmony import */


    var _components_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/transfer-fund/transfer-fund.component */
    "./src/app/components/transfer-fund/transfer-fund.component.ts");
    /* harmony import */


    var _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/moves-list/moves-list.component */
    "./src/app/components/moves-list/moves-list.component.ts");
    /* harmony import */


    var _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/statistic-page/statistic-page.component */
    "./src/app/pages/statistic-page/statistic-page.component.ts");
    /* harmony import */


    var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/chart/chart.component */
    "./src/app/components/chart/chart.component.ts");
    /* harmony import */


    var angular_google_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! angular-google-charts */
    "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"], _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_12__["ContactPageComponent"], _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_13__["ContactEditPageComponent"], _pages_contact_details_page_contact_details_page_component__WEBPACK_IMPORTED_MODULE_14__["ContactDetailsPageComponent"], _components_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_15__["ContactFilterComponent"], _components_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__["ContactListComponent"], _components_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_17__["ContactPreviewComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"], _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_19__["SignupPageComponent"], _components_transfer_fund_transfer_fund_component__WEBPACK_IMPORTED_MODULE_20__["TransferFundComponent"], _components_moves_list_moves_list_component__WEBPACK_IMPORTED_MODULE_21__["MovesListComponent"], _pages_statistic_page_statistic_page_component__WEBPACK_IMPORTED_MODULE_22__["StatisticPageComponent"], _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_23__["ChartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_24__["GoogleChartsModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"]],
      providers: [_services_bitCoin_service__WEBPACK_IMPORTED_MODULE_6__["BitCoinService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"], _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/chart/chart.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/chart/chart.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChartChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "google-chart {\n  margin: 0 auto;\n  width: 800px;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFydC9DOlxcVXNlcnNcXERvdGFuXFxEZXNrdG9wXFxtaXN0ZXItYml0Y29pbi1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGFydFxcY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnb29nbGUtY2hhcnR7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn0iLCJnb29nbGUtY2hhcnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/chart/chart.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/chart/chart.component.ts ***!
    \*****************************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppComponentsChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChartComponent =
    /*#__PURE__*/
    function () {
      function ChartComponent() {
        _classCallCheck(this, ChartComponent);
      }

      _createClass(ChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChartComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChartComponent.prototype, "chart", void 0);
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart/chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chart.component.scss */
      "./src/app/components/chart/chart.component.scss")).default]
    })], ChartComponent);
    /***/
  },

  /***/
  "./src/app/components/contact-filter/contact-filter.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/contact-filter/contact-filter.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactFilterContactFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1maWx0ZXIvY29udGFjdC1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/contact-filter/contact-filter.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/contact-filter/contact-filter.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ContactFilterComponent */

  /***/
  function srcAppComponentsContactFilterContactFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFilterComponent", function () {
      return ContactFilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactFilterComponent =
    /*#__PURE__*/
    function () {
      function ContactFilterComponent() {
        _classCallCheck(this, ContactFilterComponent);

        this.filterContacts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ContactFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onFilter",
        value: function onFilter(value) {
          this.filterContacts.emit(value);
        }
      }]);

      return ContactFilterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ContactFilterComponent.prototype, "filterContacts", void 0);
    ContactFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-filter/contact-filter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-filter.component.scss */
      "./src/app/components/contact-filter/contact-filter.component.scss")).default]
    })], ContactFilterComponent);
    /***/
  },

  /***/
  "./src/app/components/contact-list/contact-list.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/contact-list/contact-list.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactListContactListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/contact-list/contact-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/contact-list/contact-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ContactListComponent */

  /***/
  function srcAppComponentsContactListContactListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactListComponent", function () {
      return ContactListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactListComponent =
    /*#__PURE__*/
    function () {
      function ContactListComponent() {
        _classCallCheck(this, ContactListComponent);
      }

      _createClass(ContactListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-list/contact-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-list.component.scss */
      "./src/app/components/contact-list/contact-list.component.scss")).default]
    })], ContactListComponent);
    /***/
  },

  /***/
  "./src/app/components/contact-preview/contact-preview.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/contact-preview/contact-preview.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactPreviewContactPreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact-prev {\n  display: flex;\n  border: 1px solid #0A090C;\n  border-radius: 50px;\n  max-width: 250px;\n  padding: 2px 10px;\n  margin: 5px auto;\n  justify-content: space-between;\n  background-color: #ffffffc7;\n  cursor: pointer;\n}\n.contact-prev p {\n  margin-right: 10px;\n}\n.contact-prev:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LXByZXZpZXcvQzpcXFVzZXJzXFxEb3RhblxcRGVza3RvcFxcbWlzdGVyLWJpdGNvaW4tYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdC1wcmV2aWV3XFxjb250YWN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1wcmV2aWV3L2NvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBREVJO0VBQ0ksMEJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1wcmV2aWV3L2NvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LXByZXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwQTA5MEM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG59IiwiLmNvbnRhY3QtcHJldiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwQTA5MEM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3QtcHJldiBwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhY3QtcHJldjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/contact-preview/contact-preview.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/contact-preview/contact-preview.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ContactPreviewComponent */

  /***/
  function srcAppComponentsContactPreviewContactPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function () {
      return ContactPreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactPreviewComponent =
    /*#__PURE__*/
    function () {
      function ContactPreviewComponent() {
        _classCallCheck(this, ContactPreviewComponent);
      }

      _createClass(ContactPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.contact.imgUrl) this.contact.imgUrl = "https://robohash.org/".concat(this.contact.name, ".png?set=set4");
        }
      }]);

      return ContactPreviewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactPreviewComponent.prototype, "contact", void 0);
    ContactPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-preview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact-preview/contact-preview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-preview.component.scss */
      "./src/app/components/contact-preview/contact-preview.component.scss")).default]
    })], ContactPreviewComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-header header {\n  padding: 0 25px;\n  background-color: #fff;\n  border-bottom: 1px solid #cbd0d0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 75px;\n  transition: all 0.2s ease-in-out;\n}\napp-header header h2 {\n  padding-top: 20px;\n}\napp-header header .navbar-nav {\n  flex-direction: row;\n  position: absolute;\n  right: 30px;\n  top: 20px;\n}\napp-header header .navbar-nav .nav-item {\n  font-size: 35px;\n  color: #26b6b6;\n  margin-right: 20px;\n}\napp-header header .navbar-nav .nav-item:hover {\n  color: #13dbdb;\n}\napp-header header .menu-btn {\n  border: none;\n  cursor: pointer;\n  display: none;\n  background-color: transparent;\n  font-size: 36px;\n  color: #26b6b6;\n  padding-top: 10px;\n  outline: none;\n}\napp-header header .screen {\n  position: fixed;\n  top: 75px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00000061;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n@media (max-width: 660px) {\n  app-header header .menu-btn {\n    display: block;\n    position: absolute;\n    left: 20px;\n    top: 0px;\n  }\n  app-header header .navbar-nav {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    position: fixed;\n    text-align: center;\n    top: 75px;\n    right: 0;\n    background: #f1f1f1eb;\n    border-left: 2px solid rgba(223, 218, 218, 0.6);\n    transform: translate(100%, 0);\n    transition: transform 0.6s;\n  }\n  app-header header .navbar-nav a {\n    height: 5rem;\n    width: 8rem;\n    font-size: 18px;\n    border-bottom: 1px solid #c8c8c8;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n  }\n  app-header header.opened-menu nav {\n    transform: translate(0, 0);\n  }\n  app-header header.opened-menu .screen {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxEb3RhblxcRGVza3RvcFxcbWlzdGVyLWJpdGNvaW4tYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQVI7QURFUTtFQUNJLGlCQUFBO0FDQVo7QURHUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0RaO0FER1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRGhCO0FERWdCO0VBQ0ksY0FBQTtBQ0FwQjtBREtRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0haO0FETVE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNKWjtBRE9RO0VBQ0k7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtFQ0xkO0VEUVU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxxQkFBQTtJQUNBLCtDQUFBO0lBQ0EsNkJBQUE7SUFDQSwwQkFBQTtFQ05kO0VEUWM7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQ0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQ05sQjtFRFljO0lBQ0ksMEJBQUE7RUNWbEI7RURhYztJQUNJLG1CQUFBO0lBQ0EsVUFBQTtFQ1hsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JkMGQwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMzgsIDE4MiwgMTgyKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTksIDIxOSwgMjE5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUtYnRuIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMzgsIDE4MiwgMTgyKTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2NyZWVuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDc1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2MTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgICAgICAgICAgLm1lbnUtYnRuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjFlYjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgyMjMsIDIxOCwgMjE4LCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm9wZW5lZC1tZW51IHtcclxuICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNjcmVlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiYXBwLWhlYWRlciBoZWFkZXIge1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JkMGQwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuYXBwLWhlYWRlciBoZWFkZXIgaDIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbmFwcC1oZWFkZXIgaGVhZGVyIC5uYXZiYXItbmF2IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgdG9wOiAyMHB4O1xufVxuYXBwLWhlYWRlciBoZWFkZXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogIzI2YjZiNjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuYXBwLWhlYWRlciBoZWFkZXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICMxM2RiZGI7XG59XG5hcHAtaGVhZGVyIGhlYWRlciAubWVudS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICMyNmI2YjY7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuYXBwLWhlYWRlciBoZWFkZXIgLnNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA3NXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjE7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gIGFwcC1oZWFkZXIgaGVhZGVyIC5tZW51LWJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgYXBwLWhlYWRlciBoZWFkZXIgLm5hdmJhci1uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiA3NXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjFlYjtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYmEoMjIzLCAyMTgsIDIxOCwgMC42KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbiAgfVxuICBhcHAtaGVhZGVyIGhlYWRlciAubmF2YmFyLW5hdiBhIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzhjOGM4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgYXBwLWhlYWRlciBoZWFkZXIub3BlbmVkLW1lbnUgbmF2IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICBhcHAtaGVhZGVyIGhlYWRlci5vcGVuZWQtbWVudSAuc2NyZWVuIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.isMenuOpen = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          this.isMenuOpen = !this.isMenuOpen;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/moves-list/moves-list.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/moves-list/moves-list.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMovesListMovesListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".transfer-container {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid black;\n  width: 50%;\n  margin: 0 auto;\n  padding-bottom: 15px;\n}\n\nlabel {\n  padding: 5px 0;\n}\n\nh4 {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3Zlcy1saXN0L0M6XFxVc2Vyc1xcRG90YW5cXERlc2t0b3BcXG1pc3Rlci1iaXRjb2luLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vdmVzLWxpc3RcXG1vdmVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW92ZXMtbGlzdC9tb3Zlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3Zlcy1saXN0L21vdmVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNmZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSIsIi50cmFuc2Zlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxubGFiZWwge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuaDQge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/moves-list/moves-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/moves-list/moves-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: MovesListComponent */

  /***/
  function srcAppComponentsMovesListMovesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovesListComponent", function () {
      return MovesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MovesListComponent =
    /*#__PURE__*/
    function () {
      function MovesListComponent() {
        _classCallCheck(this, MovesListComponent);
      }

      _createClass(MovesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MovesListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovesListComponent.prototype, "transfers", void 0);
    MovesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moves-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./moves-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/moves-list/moves-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./moves-list.component.scss */
      "./src/app/components/moves-list/moves-list.component.scss")).default]
    })], MovesListComponent);
    /***/
  },

  /***/
  "./src/app/components/transfer-fund/transfer-fund.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/transfer-fund/transfer-fund.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTransferFundTransferFundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNmZXItZnVuZC90cmFuc2Zlci1mdW5kLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/transfer-fund/transfer-fund.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/transfer-fund/transfer-fund.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TransferFundComponent */

  /***/
  function srcAppComponentsTransferFundTransferFundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferFundComponent", function () {
      return TransferFundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TransferFundComponent =
    /*#__PURE__*/
    function () {
      function TransferFundComponent() {
        _classCallCheck(this, TransferFundComponent);

        this.transfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TransferFundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onTransfer",
        value: function onTransfer(amount) {
          this.transfer.emit(amount);
        }
      }]);

      return TransferFundComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransferFundComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransferFundComponent.prototype, "contactName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TransferFundComponent.prototype, "transfer", void 0);
    TransferFundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transfer-fund',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transfer-fund.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transfer-fund/transfer-fund.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transfer-fund.component.scss */
      "./src/app/components/transfer-fund/transfer-fund.component.scss")).default]
    })], TransferFundComponent);
    /***/
  },

  /***/
  "./src/app/data/contacts.json":
  /*!************************************!*\
    !*** ./src/app/data/contacts.json ***!
    \************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, default */

  /***/
  function srcAppDataContactsJson(module) {
    module.exports = JSON.parse("[{\"_id\":\"5a56640269f443a5d64b32ca\",\"name\":\"Ochoa Hyde\",\"email\":\"ochoahyde@renovize.com\",\"phone\":\"+1 (968) 593-3824\"},{\"_id\":\"5a5664025f6ae9aa24a99fde\",\"name\":\"Hallie Mclean\",\"email\":\"halliemclean@renovize.com\",\"phone\":\"+1 (948) 464-2888\"},{\"_id\":\"5a56640252d6acddd183d319\",\"name\":\"Parsons Norris\",\"email\":\"parsonsnorris@renovize.com\",\"phone\":\"+1 (958) 502-3495\"},{\"_id\":\"5a566402ed1cf349f0b47b4d\",\"name\":\"Rachel Lowe\",\"email\":\"rachellowe@renovize.com\",\"phone\":\"+1 (911) 475-2312\"},{\"_id\":\"5a566402abce24c6bfe4699d\",\"name\":\"Dominique Soto\",\"email\":\"dominiquesoto@renovize.com\",\"phone\":\"+1 (807) 551-3258\"},{\"_id\":\"5a566402a6499c1d4da9220a\",\"name\":\"Shana Pope\",\"email\":\"shanapope@renovize.com\",\"phone\":\"+1 (970) 527-3082\"},{\"_id\":\"5a566402f90ae30e97f990db\",\"name\":\"Faulkner Flores\",\"email\":\"faulknerflores@renovize.com\",\"phone\":\"+1 (952) 501-2678\"},{\"_id\":\"5a5664027bae84ef280ffbdf\",\"name\":\"Holder Bean\",\"email\":\"holderbean@renovize.com\",\"phone\":\"+1 (989) 503-2663\"},{\"_id\":\"5a566402e3b846c5f6aec652\",\"name\":\"Rosanne Shelton\",\"email\":\"rosanneshelton@renovize.com\",\"phone\":\"+1 (968) 454-3851\"},{\"_id\":\"5a56640272c7dcdf59c3d411\",\"name\":\"Pamela Nolan\",\"email\":\"pamelanolan@renovize.com\",\"phone\":\"+1 (986) 545-2166\"},{\"_id\":\"5a5664029a8dd82a6178b15f\",\"name\":\"Roy Cantu\",\"email\":\"roycantu@renovize.com\",\"phone\":\"+1 (929) 571-2295\"},{\"_id\":\"5a5664028c096d08eeb13a8a\",\"name\":\"Ollie Christian\",\"email\":\"olliechristian@renovize.com\",\"phone\":\"+1 (977) 419-3550\"},{\"_id\":\"5a5664026c53582bb9ebe9d1\",\"name\":\"Nguyen Walls\",\"email\":\"nguyenwalls@renovize.com\",\"phone\":\"+1 (963) 471-3181\"},{\"_id\":\"5a56640298ab77236845b82b\",\"name\":\"Glenna Santana\",\"email\":\"glennasantana@renovize.com\",\"phone\":\"+1 (860) 467-2376\"},{\"_id\":\"5a56640208fba3e8ecb97305\",\"name\":\"Malone Clark\",\"email\":\"maloneclark@renovize.com\",\"phone\":\"+1 (818) 565-2557\"},{\"_id\":\"5a566402abb3146207bc4ec5\",\"name\":\"Floyd Rutledge\",\"email\":\"floydrutledge@renovize.com\",\"phone\":\"+1 (807) 597-3629\"},{\"_id\":\"5a56640298500fead8cb1ee5\",\"name\":\"Grace James\",\"email\":\"gracejames@renovize.com\",\"phone\":\"+1 (959) 525-2529\"},{\"_id\":\"5a56640243427b8f8445231e\",\"name\":\"Tanner Gates\",\"email\":\"tannergates@renovize.com\",\"phone\":\"+1 (978) 591-2291\"},{\"_id\":\"5a5664025c3abdad6f5e098c\",\"name\":\"Lilly Conner\",\"email\":\"lillyconner@renovize.com\",\"phone\":\"+1 (842) 587-3812\"}]");
    /***/
  },

  /***/
  "./src/app/pages/contact-details-page/contact-details-page.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/contact-details-page/contact-details-page.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactDetailsPageContactDetailsPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".details-container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  justify-content: space-around;\n  max-width: 350px;\n  padding: 20px;\n}\n.details-container img {\n  align-self: center;\n  margin: 10px;\n}\n.details-container button {\n  margin: 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1kZXRhaWxzLXBhZ2UvQzpcXFVzZXJzXFxEb3RhblxcRGVza3RvcFxcbWlzdGVyLWJpdGNvaW4tYW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3QtZGV0YWlscy1wYWdlXFxjb250YWN0LWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC1kZXRhaWxzLXBhZ2UvY29udGFjdC1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLGVBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZGV0YWlscy1wYWdlL2NvbnRhY3QtZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDVweCA1cHg7XHJcbiAgICB9XHJcbn0iLCIuZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uZGV0YWlscy1jb250YWluZXIgaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG4uZGV0YWlscy1jb250YWluZXIgYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHggNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/contact-details-page/contact-details-page.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/contact-details-page/contact-details-page.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ContactDetailsPageComponent */

  /***/
  function srcAppPagesContactDetailsPageContactDetailsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactDetailsPageComponent", function () {
      return ContactDetailsPageComponent;
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


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ContactDetailsPageComponent =
    /*#__PURE__*/
    function () {
      function ContactDetailsPageComponent(userService, contactService, activeRoute, location, router) {
        _classCallCheck(this, ContactDetailsPageComponent);

        this.userService = userService;
        this.contactService = contactService;
        this.activeRoute = activeRoute;
        this.location = location;
        this.router = router;
        this.user$ = this.userService.getLoggedinUser();
      }

      _createClass(ContactDetailsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = this.activeRoute.snapshot.params.id;
          this.contactService.getContactById(id).subscribe(function (contact) {
            _this.contact = contact;
            _this.contact.imgUrl = "https://robohash.org/".concat(_this.contact.name, ".png?set=set4");
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "transfer",
        value: function transfer(amount) {
          var _this2 = this;

          this.user$.subscribe(function (user) {
            _this2.userService.addTransfer(user, _this2.contact, amount);

            _this2.router.navigate(['/contacts']);
          });
        }
      }, {
        key: "transfersToShow",
        value: function transfersToShow(id, user) {
          return user.moves.filter(function (move) {
            return move.toId === id;
          });
        }
      }]);

      return ContactDetailsPageComponent;
    }();

    ContactDetailsPageComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContactDetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-details-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-details-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-details-page/contact-details-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-details-page.component.scss */
      "./src/app/pages/contact-details-page/contact-details-page.component.scss")).default]
    })], ContactDetailsPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/contact-edit-page/contact-edit-page.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/contact-edit-page/contact-edit-page.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactEditPageContactEditPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  display: flex;\n  flex-direction: column;\n}\nform label {\n  padding: 5px;\n  margin: 10px;\n}\n.save-icon {\n  margin-right: 20%;\n}\n.back-icon {\n  margin-left: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1lZGl0LXBhZ2UvQzpcXFVzZXJzXFxEb3RhblxcRGVza3RvcFxcbWlzdGVyLWJpdGNvaW4tYW5ndWxhci9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3QtZWRpdC1wYWdlXFxjb250YWN0LWVkaXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC1lZGl0LXBhZ2UvY29udGFjdC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNFUjtBRENBO0VBQ0ksaUJBQUE7QUNFSjtBREFBO0VBQ0ksZ0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZWRpdC1wYWdlL2NvbnRhY3QtZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLnNhdmUtaWNvbntcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcbi5iYWNrLWljb257XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59IiwiZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5mb3JtIGxhYmVsIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5zYXZlLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbn1cblxuLmJhY2staWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/contact-edit-page/contact-edit-page.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/contact-edit-page/contact-edit-page.component.ts ***!
    \************************************************************************/

  /*! exports provided: ContactEditPageComponent */

  /***/
  function srcAppPagesContactEditPageContactEditPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactEditPageComponent", function () {
      return ContactEditPageComponent;
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


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ContactEditPageComponent =
    /*#__PURE__*/
    function () {
      function ContactEditPageComponent(userService, contactService, activeRoute, location, router) {
        var _this3 = this;

        _classCallCheck(this, ContactEditPageComponent);

        this.userService = userService;
        this.contactService = contactService;
        this.activeRoute = activeRoute;
        this.location = location;
        this.router = router;
        this.contactToEdit = null;
        this.userService.getLoggedinUser().subscribe(function (user) {
          _this3.user = user;
        });
      }

      _createClass(ContactEditPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var id = this.activeRoute.snapshot.params.id;

          if (id) {
            this.contactService.getContactById(id).subscribe(function (contact) {
              _this4.contactToEdit = contact;
            });
          } else {
            this.contactToEdit = this.contactService.getEmptyContact();
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "saveContact",
        value: function saveContact() {
          this.contactService.saveContact(this.contactToEdit);
          this.user.contactList = this.contactService.contactList;
          this.userService.updateUser(this.user);
          this.router.navigate(['/contacts']);
        }
      }, {
        key: "removeContact",
        value: function removeContact() {
          this.contactService.deleteContact(this.contactToEdit._id);
          this.user.contactList = this.contactService.contactList;
          this.userService.updateUser(this.user);
          this.router.navigate(['/contacts']);
        }
      }]);

      return ContactEditPageComponent;
    }();

    ContactEditPageComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContactEditPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-edit-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-edit-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-edit-page/contact-edit-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-edit-page.component.scss */
      "./src/app/pages/contact-edit-page/contact-edit-page.component.scss")).default]
    })], ContactEditPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/contact-page/contact-page.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/contact-page/contact-page.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactPageContactPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-contact-page .fa {\n  font-size: 40px;\n  color: #26b6b6;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  border: 3px solid #26b6b6;\n  border-radius: 50px;\n  width: 46px;\n  cursor: pointer;\n}\napp-contact-page .fa:hover {\n  transition: all 0.3;\n  background-color: #ffffffc7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL0M6XFxVc2Vyc1xcRG90YW5cXERlc2t0b3BcXG1pc3Rlci1iaXRjb2luLWFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0LXBhZ2VcXGNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QURHUTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY29udGFjdC1wYWdlIHtcclxuXHJcbiAgICAuZmEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBjb2xvcjogcmdiKDM4LCAxODIsIDE4Mik7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMzgsIDE4MiwgMTgyKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJhcHAtY29udGFjdC1wYWdlIC5mYSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMyNmI2YjY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzI2YjZiNjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmFwcC1jb250YWN0LXBhZ2UgLmZhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmM3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/contact-page/contact-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppPagesContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
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


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ContactPageComponent =
    /*#__PURE__*/
    function () {
      function ContactPageComponent(contactService, userService, router) {
        var _this5 = this;

        _classCallCheck(this, ContactPageComponent);

        this.contactService = contactService;
        this.userService = userService;
        this.router = router;
        this.userService.getLoggedinUser().subscribe(function (user) {
          if (!user) return _this5.router.navigate(['/signup']);
        });
      }

      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadContacts();
        }
      }, {
        key: "loadContacts",
        value: function loadContacts() {
          this.contacts$ = this.contactService.getContacts();
        }
      }, {
        key: "displayFilter",
        value: function displayFilter(val) {
          this.contacts$ = this.contactService.filter(val);
        }
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent.ctorParameters = function () {
      return [{
        type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-page/contact-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-page.component.scss */
      "./src/app/pages/contact-page/contact-page.component.scss")).default]
    })], ContactPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomePageHomePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-details-container {\n  display: flex;\n  flex-direction: column;\n}\n.user-details-container h3 {\n  font-size: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcRG90YW5cXERlc2t0b3BcXG1pc3Rlci1iaXRjb2luLWFuZ3VsYXIvc3JjXFxhcHBcXHBhZ2VzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICB9XHJcblxyXG59IiwiLnVzZXItZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnVzZXItZGV0YWlscy1jb250YWluZXIgaDMge1xuICBmb250LXNpemU6IDIuNWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home-page/home-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
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


    var _services_bitCoin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/bitCoin.service */
    "./src/app/services/bitCoin.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(bitCoinService, userService) {
        _classCallCheck(this, HomePageComponent);

        this.bitCoinService = bitCoinService;
        this.userService = userService;
        this.user$ = this.userService.getLoggedinUser();
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rate$ = this.bitCoinService.getRate();
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _services_bitCoin_service__WEBPACK_IMPORTED_MODULE_2__["BitCoinService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.scss */
      "./src/app/pages/home-page/home-page.component.scss")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/signup-page/signup-page.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupPageSignupPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/signup-page/signup-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
    \************************************************************/

  /*! exports provided: SignupPageComponent */

  /***/
  function srcAppPagesSignupPageSignupPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function () {
      return SignupPageComponent;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupPageComponent =
    /*#__PURE__*/
    function () {
      function SignupPageComponent(userService, router) {
        _classCallCheck(this, SignupPageComponent);

        this.userService = userService;
        this.router = router;
      }

      _createClass(SignupPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signup",
        value: function signup(username) {
          this.userService.signup(username);
          this.router.navigate(['/']);
        }
      }]);

      return SignupPageComponent;
    }();

    SignupPageComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup-page.component.scss */
      "./src/app/pages/signup-page/signup-page.component.scss")).default]
    })], SignupPageComponent);
    /***/
  },

  /***/
  "./src/app/pages/statistic-page/statistic-page.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/pages/statistic-page/statistic-page.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStatisticPageStatisticPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpYy1wYWdlL3N0YXRpc3RpYy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/statistic-page/statistic-page.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/statistic-page/statistic-page.component.ts ***!
    \******************************************************************/

  /*! exports provided: StatisticPageComponent */

  /***/
  function srcAppPagesStatisticPageStatisticPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticPageComponent", function () {
      return StatisticPageComponent;
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


    var _services_bitCoin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/bitCoin.service */
    "./src/app/services/bitCoin.service.ts");

    var StatisticPageComponent =
    /*#__PURE__*/
    function () {
      function StatisticPageComponent(bitCoinService) {
        _classCallCheck(this, StatisticPageComponent);

        this.bitCoinService = bitCoinService;
        this.marketPriceChart = {
          type: 'Line',
          columnNames: ['Date', 'Market Price']
        };
        this.dailyTransChart = {
          type: 'Line',
          columnNames: ['Date', 'Daily Transactions']
        };
      }

      _createClass(StatisticPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDailyTransactionData();
          this.loadMarketPriceData();
        }
      }, {
        key: "loadMarketPriceData",
        value: function loadMarketPriceData() {
          var _this6 = this;

          this.bitCoinService.getMarketPrice().subscribe(function (data) {
            return _this6.formatData(data, _this6.marketPriceChart);
          });
        }
      }, {
        key: "loadDailyTransactionData",
        value: function loadDailyTransactionData() {
          var _this7 = this;

          this.bitCoinService.getConfirmedTransactions().subscribe(function (data) {
            return _this7.formatData(data, _this7.dailyTransChart);
          });
        }
      }, {
        key: "formatData",
        value: function formatData(data, chart) {
          var dataToDisplay = data['values'].map(function (currData) {
            var d = new Date(currData.x * 1000);
            var date = d.toDateString();
            return [date, currData.y];
          });
          chart.data = dataToDisplay;
        }
      }]);

      return StatisticPageComponent;
    }();

    StatisticPageComponent.ctorParameters = function () {
      return [{
        type: _services_bitCoin_service__WEBPACK_IMPORTED_MODULE_2__["BitCoinService"]
      }];
    };

    StatisticPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-statistic-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./statistic-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistic-page/statistic-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./statistic-page.component.scss */
      "./src/app/pages/statistic-page/statistic-page.component.scss")).default]
    })], StatisticPageComponent);
    /***/
  },

  /***/
  "./src/app/services/bitCoin.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/bitCoin.service.ts ***!
    \*********************************************/

  /*! exports provided: BitCoinService */

  /***/
  function srcAppServicesBitCoinServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BitCoinService", function () {
      return BitCoinService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RATE_API = 'https://blockchain.info/tobtc?currency=USD&value=1';
    var MARKET_PRICE_API = 'https://api.blockchain.info/charts/market-price?timespan=2months&format=json&cors=true';
    var DAILY_TRANS_API = 'https://api.blockchain.info/charts/n-transactions?&timestamp=2months&format=json&cors=true';

    var BitCoinService =
    /*#__PURE__*/
    function () {
      function BitCoinService(http) {
        _classCallCheck(this, BitCoinService);

        this.http = http;
      }

      _createClass(BitCoinService, [{
        key: "getRate",
        value: function getRate() {
          // return this.http.get(RATE_API);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(0.000156);
        }
      }, {
        key: "getMarketPrice",
        value: function getMarketPrice() {
          return this.http.get(MARKET_PRICE_API);
        }
      }, {
        key: "getConfirmedTransactions",
        value: function getConfirmedTransactions() {
          return this.http.get(DAILY_TRANS_API);
        }
      }]);

      return BitCoinService;
    }();

    BitCoinService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BitCoinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BitCoinService);
    /***/
  },

  /***/
  "./src/app/services/contact.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/contact.service.ts ***!
    \*********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data_contacts_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/contacts.json */
    "./src/app/data/contacts.json");

    var _data_contacts_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../data/contacts.json */
    "./src/app/data/contacts.json", 1);
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(userService) {
        var _this8 = this;

        _classCallCheck(this, ContactService);

        this.userService = userService;
        this.userService.getLoggedinUser().subscribe(function (user) {
          if (user.contactList) _this8.contactList = user.contactList;else _this8.contactList = _data_contacts_json__WEBPACK_IMPORTED_MODULE_3__;
        });
      }

      _createClass(ContactService, [{
        key: "getContacts",
        value: function getContacts() {
          var contactsToReturn = this.contactList;
          this.sort(contactsToReturn);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(contactsToReturn);
        }
      }, {
        key: "getContactById",
        value: function getContactById(id) {
          var contact = this.contactList.find(function (contact) {
            return contact._id === id;
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(contact);
        }
      }, {
        key: "deleteContact",
        value: function deleteContact(id) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            var index = _this9.contactList.findIndex(function (contact) {
              return contact._id === id;
            });

            if (index !== -1) {
              _this9.contactList.splice(index, 1);
            }

            resolve(_this9.contactList);
          });
        }
      }, {
        key: "saveContact",
        value: function saveContact(contact) {
          return contact._id ? this._updateContact(contact) : this._addContact(contact);
        }
      }, {
        key: "getEmptyContact",
        value: function getEmptyContact() {
          return {
            name: '',
            email: '',
            phone: ''
          };
        }
      }, {
        key: "sort",
        value: function sort(arr) {
          return arr.sort(function (a, b) {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
              return -1;
            }

            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
              return 1;
            }

            return 0;
          });
        }
      }, {
        key: "filter",
        value: function filter(term) {
          term = term.toLocaleLowerCase();
          var filteredContacts = this.contactList.filter(function (contact) {
            return contact.name.toLocaleLowerCase().includes(term) || contact.phone.toLocaleLowerCase().includes(term) || contact.email.toLocaleLowerCase().includes(term);
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(filteredContacts);
        }
      }, {
        key: "_updateContact",
        value: function _updateContact(contact) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            var index = _this10.contactList.findIndex(function (c) {
              return contact._id === c._id;
            });

            if (index !== -1) {
              _this10.contactList[index] = contact;
            }

            resolve(contact);
          });
        }
      }, {
        key: "_addContact",
        value: function _addContact(contact) {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            contact._id = _makeId();

            _this11.contactList.push(contact);

            resolve(contact);
          });
        }
      }]);

      return ContactService;
    }();

    ContactService.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ContactService);

    function _makeId() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var txt = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return txt;
    }
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService() {
        _classCallCheck(this, UserService);
      }

      _createClass(UserService, [{
        key: "getLoggedinUser",
        value: function getLoggedinUser() {
          var user = JSON.parse(localStorage.getItem("loggedinUser"));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }
      }, {
        key: "addTransfer",
        value: function addTransfer(user, contact, amount) {
          var transfer = this._newTransfer(amount, contact._id, contact.name);

          user.coins -= amount;
          user.moves.unshift(transfer);
          this.updateUser(user);
        }
      }, {
        key: "signup",
        value: function signup(name) {
          var user = JSON.parse(localStorage.getItem(name));

          if (!user) {
            user = this._newUser(name);
            localStorage.setItem(user.name, JSON.stringify(user));
          }

          localStorage.setItem("loggedinUser", JSON.stringify(user));
          return Promise.resolve(user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          localStorage.setItem(user.name, JSON.stringify(user));
          localStorage.setItem("loggedinUser", JSON.stringify(user));
        }
      }, {
        key: "_newTransfer",
        value: function _newTransfer(amount, toId, to) {
          return {
            amount: amount,
            toId: toId,
            to: to,
            at: Date.now()
          };
        }
      }, {
        key: "_newUser",
        value: function _newUser(name) {
          return {
            name: name,
            coins: 100,
            moves: []
          };
        }
      }]);

      return UserService;
    }();

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Dotan\Desktop\mister-bitcoin-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map