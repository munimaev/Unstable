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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards_component__ = __webpack_require__("../../../../../src/app/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate_translate_component__ = __webpack_require__("../../../../../src/app/translate/translate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__cards_cards_component__["a" /* CardsComponent */] },
    { path: 'translate/:id', component: __WEBPACK_IMPORTED_MODULE_3__translate_translate_component__["a" /* TranslateComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Application-wide Styles */\nh1 {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n  }\n  h2, h3 {\n    color: #444;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: lighter;\n  }\n  body {\n    margin: 2em;\n  }\n  body, input[text], button {\n    color: #888;\n    font-family: Cambria, Georgia;\n  }\n  /* everywhere else */\n  * {\n    font-family: Arial, Helvetica, sans-serif;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-light bg-light\">\n    <a class=\"\"  routerLink=\"/\">\n        Все карты\n    </a>\n</nav>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

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
        this.title = 'Unstable';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cards_cards_component__ = __webpack_require__("../../../../../src/app/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_name_filter_pipe__ = __webpack_require__("../../../../../src/app/card-name-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_image_nameng_pipe__ = __webpack_require__("../../../../../src/app/card-image-nameng.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__translate_translate_component__ = __webpack_require__("../../../../../src/app/translate/translate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card_service__ = __webpack_require__("../../../../../src/app/card.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__heroes_heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__cards_cards_component__["a" /* CardsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__card_name_filter_pipe__["a" /* CardNameFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_7__card_image_nameng_pipe__["a" /* CardImageNamengPipe */],
                __WEBPACK_IMPORTED_MODULE_9__translate_translate_component__["a" /* TranslateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__card_service__["a" /* CardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/card-image-nameng.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardImageNamengPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardImageNamengPipe = (function () {
    function CardImageNamengPipe() {
    }
    CardImageNamengPipe.prototype.transform = function (value, args) {
        return null;
    };
    CardImageNamengPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'cardImageNameng'
        })
    ], CardImageNamengPipe);
    return CardImageNamengPipe;
}());



/***/ }),

/***/ "../../../../../src/app/card-name-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardNameFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardNameFilterPipe = (function () {
    function CardNameFilterPipe() {
    }
    CardNameFilterPipe.prototype.transform = function (value, args) {
        console.log(value);
        console.log(args);
        if (!value || !args) {
            return value;
        }
        return value.filter(function (card) { return card.name.toUpperCase().indexOf(args.toUpperCase()) !== -1; });
    };
    CardNameFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'cardNameFilter'
        })
    ], CardNameFilterPipe);
    return CardNameFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_cards__ = __webpack_require__("../../../../../src/app/data-cards.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardService = (function () {
    function CardService() {
    }
    CardService.prototype.getCards = function () {
        return __WEBPACK_IMPORTED_MODULE_1__data_cards__["a" /* CARDS */];
    };
    CardService.prototype.getCard = function (id) {
        var result = null;
        __WEBPACK_IMPORTED_MODULE_1__data_cards__["a" /* CARDS */].some(function (card) {
            if (card.multiverseid == id) {
                result = card;
                return true;
            }
        });
        return result;
    };
    CardService.prototype.getImageName = function (card) {
        var re = /\s*;\s*/;
        return card.imageName.split(/[ \,\.-]/).join('');
    };
    CardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "../../../../../src/app/cards/cards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n      <p>\n        <input [(ngModel)]=\"cardName\" placeholder=\"name\" class=\"form-control\">\n      </p>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-4\" *ngFor=\"let card of allCards | cardNameFilter:cardName\">\n      <p>\n        <a routerLink=\"/translate/{{card.multiverseid}}\">\n          <img src=\"http://mythicspoiler.com/ust/cards/{{imageName(card.imageName)}}.jpg\" width=\"100%\">\n        </a>\n      </p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_service__ = __webpack_require__("../../../../../src/app/card.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = (function () {
    function CardsComponent(cardService) {
        this.cardService = cardService;
        this.cardName = '';
    }
    CardsComponent.prototype.imageName = function (name) {
        var re = /\s*;\s*/;
        return name.split(/[ \,\.-]/).join('');
    };
    CardsComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    CardsComponent.prototype.getCards = function () {
        this.allCards = this.cardService.getCards();
    };
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cards',
            template: __webpack_require__("../../../../../src/app/cards/cards.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cards/cards.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__card_service__["a" /* CardService */]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data-cards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARDS; });
var CARDS = [
    {
        "artist": "Andrea Radeck",
        "cmc": 1,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "95ebdf85f4ea74d584dfdfb72e3de5001d0748a9",
        "imageName": "adorable kitten",
        "layout": "normal",
        "manaCost": "{W}",
        "multiverseid": 439390,
        "name": "Adorable Kitten",
        "nameRus": "Милый котенок",
        "number": "1",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Cat"
        ],
        "text": "When this creature enters the battlefield, roll a six-sided die. You gain life equal to the result.",
        "textRus": "Когда это сущесвто выходит на поле боя, бросьте шестигранный кубик. Вы получаете столько жизней сколько выпало на кубике.",
        "toughness": "1",
        "type": "Host Creature — Cat",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Carl Critchlow",
        "cmc": 4,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "9bf93829d5f697e3d6324c439a932804bdfdec3f",
        "imageName": "aerial toastmaster",
        "layout": "normal",
        "manaCost": "{3}{W}",
        "multiverseid": 439391,
        "name": "Aerial Toastmaster",
        "nameRus": "Воздушный томада",
        "number": "2",
        "power": "3",
        "rarity": "Uncommon",
        "subtypes": [
            "Cyborg",
            "Rigger"
        ],
        "text": "Flying\n{3}{W}, Sacrifice another artifact: Aerial Toastmaster assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Полет\n{3}{W}, Пожертвуйте другой артифакт: Воздушный Томада собирает Штуковину.",
        "toughness": "2",
        "type": "Artifact Creature — Cyborg Rigger",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "McLean Kendree",
        "cmc": 2,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "And thus at Maze's End\nthe runners end their strife.\nOur saving grace, that hooded kid,\nis now Guildpact for life.\n—RAVNICA! The Musical",
        "id": "86111c1508f5365878517fce6756098c214bc36e",
        "imageName": "amateur auteur",
        "layout": "normal",
        "manaCost": "{1}{W}",
        "multiverseid": 439392,
        "name": "Amateur Auteur",
        "nameRus": "Автор любитель",
        "number": "3",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Human"
        ],
        "text": "Sacrifice Amateur Auteur: Destroy target enchantment.",
        "textRus": "Пожертвуйте Автора любителя: Уничтожте целевые чары.",
        "toughness": "2",
        "type": "Creature — Human",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Sean Murray",
        "cmc": 3,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "There's no race like gnome.",
        "id": "052e80970e33f1093abccea03753cfcc2e328764",
        "imageName": "by gnome means",
        "layout": "normal",
        "manaCost": "{2}{W}",
        "multiverseid": 439393,
        "name": "By Gnome Means",
        "nameRus": "Спосособом гномов",
        "number": "4",
        "rarity": "Rare",
        "text": "{1}{W}, Remove a counter from a permanent you control: Create a 1/1 colorless Gnome artifact creature token.\n{1}{W}, Sacrifice an artifact: Choose any kind of counter a printed card refers to, then put one of that counter on target permanent.",
        "textRus": "{1}{W}, Удалите жетон с перманента под вашим контролем: Создайтефишку бесцветного существа артефакта Гном 1/1.\n{1}{W}, Пожертвуйте артифакт: Выберите любой тип жетонов встречающийся на картах, затем положит один такой жетон на целевой перманент.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Dmitry Burmak",
        "cmc": 5,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"I treat every foe according to the highest codes of conduct. Then I kill them.\"",
        "id": "c2ec96c070907abfd16eed0dd2886589e9f4f4b3",
        "imageName": "chivalrous chevalier",
        "layout": "normal",
        "manaCost": "{4}{W}",
        "multiverseid": 439394,
        "name": "Chivalrous Chevalier",
        "nameRus": "Рыцарский кавалер",
        "number": "5",
        "power": "3",
        "rarity": "Common",
        "subtypes": [
            "Cyborg",
            "Knight"
        ],
        "text": "Flying\nWhen Chivalrous Chevalier enters the battlefield, return a creature you control to its owner's hand unless you compliment an opponent.",
        "textRus": "Полет\nКогда Рыцарский кавалер выходит на поле боя, верните сущесвто под вашим контролем в руку владельца, если вы не сделает комплиемент оппоненту.",
        "toughness": "3",
        "type": "Artifact Creature — Cyborg Knight",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "David Sladek",
        "cmc": 6,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "670816ec292583c1e93f4facae8f8fb64eb32577",
        "imageName": "do-it-yourself seraph",
        "layout": "normal",
        "manaCost": "{4}{W}{W}",
        "multiverseid": 439395,
        "name": "Do-It-Yourself Seraph",
        "nameRus": "Собери-сам серафим",
        "number": "6",
        "power": "4",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Cyborg",
            "Angel"
        ],
        "text": "Flying\nWhenever Do-It-Yourself Seraph attacks, you may search your library for an artifact card, exile it, then shuffle your library.\nDo-It-Yourself Seraph has the text box of each card exiled with Do-It-Yourself Seraph in addition to its own.",
        "textRus": "Полет\nКогда Собери-сам серафим атакует, вы можете найти в вашей библиотеке карту артифакта и изгонать ее, изатем перемешайте свою колоду. Собери-сам серафим получает текстовый блок каждой карты изгненной Собери-сам серафимом дополнительно к своему.",
        "toughness": "4",
        "type": "Artifact Creature — Cyborg Angel",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Jesper Ejsing",
        "cmc": 1,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"Up high! To the side! Down low! To the left! Other left! Over here—\"",
        "id": "2fb7a44528894b69d7fd1a14fe2bb8df5748162c",
        "imageName": "gimme five",
        "layout": "normal",
        "manaCost": "{W}",
        "multiverseid": 439396,
        "name": "Gimme Five",
        "nameRus": "Дай пять",
        "number": "7",
        "rarity": "Uncommon",
        "text": "You gain 1 life for each person who high-fives you in the next thirty seconds. Each player in a silver-bordered game who high-fives you gains 1 life. (Offer high fives. Don't hit people.)",
        "textRus": "Вы получаете 1 жизнь за каждого человека, который даст вам пять в течении следуюих 30 секунд. Каждый игрок в играюзий в игру с серебряными рамками получает 1 жизнь.",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Marco Teixeira",
        "cmc": 1,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "e02465a426b288c5a29e58c7b4811761888ca96f",
        "imageName": "go to jail",
        "layout": "normal",
        "manaCost": "{W}",
        "multiverseid": 439397,
        "name": "GO TO JAIL",
        "nameRus": "В ТЮРЬМУ",
        "number": "8",
        "rarity": "Common",
        "text": "When GO TO JAIL enters the battlefield, exile target creature an opponent controls until GO TO JAIL leaves the battlefield.\nAt the beginning of the upkeep of the exiled card's owner, that player rolls two six-sided dice. If he or she rolls doubles, sacrifice GO TO JAIL.",
        "textRus": "Когда В ТЮРЬМУ выходит на поле битвы, изгоните целевое сущесвто под контролем оппонента до тех пор пока В ТЮРЬМУ находится на поле боя. \nВ начале шага поддержки владельца изгнанной карты, этот игрок кидает два шестигранных кубика. Если выпадает дубль, пожертвуйте В ТЮРЬМУ.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ]
    },
    {
        "artist": "Andrea Radeck",
        "cmc": 0,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "9576b7f72e0e87262f4bf6e76b1037adc6ce6acb",
        "imageName": "half-kitten, half-",
        "layout": "normal",
        "multiverseid": 439398,
        "name": "Half-Kitten, Half-",
        "nameRus": "Полу-котенок, полу-",
        "number": "9",
        "power": "+1",
        "rarity": "Uncommon",
        "subtypes": [
            "Cat"
        ],
        "text": "Whenever you're dealt damage,\nAugment {2}{W} ({2}{W}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "Когда вы получаете повреждения, \nПриростить {2}{W} ({2}{W},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+2",
        "type": "Creature — Cat",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Mark Behm",
        "cmc": 0,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "98a36f71482154dfcead4f407c1e4fe034faf18f",
        "imageName": "humming-",
        "layout": "normal",
        "multiverseid": 439399,
        "name": "Humming-",
        "nameRus": "Жужжащий",
        "number": "10",
        "power": "+2",
        "rarity": "Common",
        "subtypes": [
            "Bird"
        ],
        "text": "Flying\nWhenever you attack with two or more creatures,\nAugment {3}{W} ({3}{W}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "Полет\nКогда в атакуете двумя или более сществами,\nПриростить {3}{W} ({3}{W}, Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.) ",
        "toughness": "+3",
        "type": "Creature — Bird",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Ben Wootten",
        "cmc": 2,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"My sword is at your service, as are my scissors, corkscrew, and bottle opener.\"",
        "id": "c2ce90dcb7fdc9f2d6d8501baa483f8e2a240cdc",
        "imageName": "jackknight",
        "layout": "normal",
        "manaCost": "{1}{W}",
        "multiverseid": 439400,
        "name": "Jackknight",
        "nameRus": "Раскладной рыцарь",
        "number": "11",
        "power": "1",
        "rarity": "Rare",
        "subtypes": [
            "Cyborg",
            "Knight"
        ],
        "text": "Whenever another artifact enters the battlefield under your control, put a +1/+1 counter on Jackknight. If that artifact is a Contraption, Jackknight gains lifelink until end of turn.",
        "textRus": "Когда другой артифакт выходит на поле боя под ваш контроль, положите жетон +1/+1 на Раскладного рыцаря. Если этот артифакт Штуковина, Раскладной рыцарь получает цепь жизни до конца хода.",
        "toughness": "1",
        "type": "Artifact Creature — Cyborg Knight",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Mark A. Nelson",
        "cmc": 2,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"Whew. For a minute, I thought I'd forgotten the garlic press.\"",
        "id": "b1af9aa1ecf98b1924637ae5e80785662ba4b041",
        "imageName": "knight of the kitchen sink",
        "layout": "normal",
        "manaCost": "{W}{W}",
        "multiverseid": 439401,
        "name": "Knight of the Kitchen Sink",
        "nameRus": "Рыцарь кухонного слива",
        "number": "12",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Cyborg",
            "Knight"
        ],
        "text": "First strike, protection from black borders (Nothing with a black border can block, target, deal damage to, or attach to this creature.)",
        "textRus": "Первый удар, защита от черных рамок. (Ничто с черными рамками не может блокировать, выбирать целью, прикрепляться или наносить повреждения этому существу)",
        "toughness": "2",
        "type": "Artifact Creature — Cyborg Knight",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Emrah Elmasli",
        "cmc": 3,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "His armor is lightweight titanium alloy, but his will is iron.",
        "id": "e1d43edd6a0911cb7648ccf256c907bce83b39a6",
        "imageName": "knight of the widget",
        "layout": "normal",
        "manaCost": "{2}{W}",
        "multiverseid": 439402,
        "name": "Knight of the Widget",
        "nameRus": "Рыцарь виджетов",
        "number": "13",
        "power": "*",
        "rarity": "Uncommon",
        "subtypes": [
            "Cyborg",
            "Knight"
        ],
        "text": "Vigilance\nKnight of the Widget's power and toughness are each equal to the number of Order of the Widget watermarks among permanents you control.",
        "textRus": "Бдительность\nСила и выносливоасть Рыцаря виджетов равны количесвту водяных знаков Ордена виджетов на перманентах под вашим контролем.",
        "toughness": "*",
        "type": "Artifact Creature — Cyborg Knight",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Hector Ortiz",
        "cmc": 4,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "1b598724dc8c6087c586a5be8486eaaa7378461c",
        "imageName": "midlife upgrade",
        "layout": "normal",
        "manaCost": "{3}{W}",
        "multiverseid": 439403,
        "name": "Midlife Upgrade",
        "nameRus": "Апгрейд в середине жизни",
        "number": "14",
        "rarity": "Uncommon",
        "text": "As an additional cost to cast Midlife Upgrade, sacrifice X Contraptions.\nAssemble X plus one Contraptions. (To assemble a Contraption, put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "В качестве дополнительной стоимости Апгрейда в середине жизни, пожертвуйте Х Штуковин.\nСоберите Х+1 штуковину. (Для сборка Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Ben Wootten",
        "cmc": 5,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "The odds are good, but the goods are odd.",
        "id": "f646942d4ffe8845d5dc4309414d66dc1718305a",
        "imageName": "oddly uneven",
        "layout": "normal",
        "manaCost": "{3}{W}{W}",
        "multiverseid": 439404,
        "name": "Oddly Uneven",
        "nameRus": "Четный нечет",
        "number": "15",
        "rarity": "Rare",
        "text": "Choose one —\n• Destroy each creature with an odd number of words in its name. (Hyphenated words are one word.)\n• Destroy each creature with an even number of words in its name.",
        "textRus": "Выберите одно —\n• Уничтожьте каждое сущесвто с нечетным количесвтом слов в его имени.\n• Уничтожьте каждое сущесвто с четным количесвтом слов в его имени.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ]
    },
    {
        "artist": "David Sladek",
        "cmc": 2,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"You say you're capable of flying. You got any proof of that?\"",
        "id": "9757a5ba588d459ffb595b7d55a9606c15a79422",
        "imageName": "old guard",
        "layout": "normal",
        "manaCost": "{1}{W}",
        "multiverseid": 439405,
        "name": "Old Guard",
        "nameRus": "Старый охранник",
        "number": "16",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Cyborg",
            "Soldier"
        ],
        "text": "{W}, {T}: Tap target creature without reminder text. (Reminder text is still any italicized text in parentheses that explains rules you already know.)",
        "textRus": "{W}, {T}: Поверните целевое сущесвто без текста-подсказки (Текст-подсказка содержит курсивный текст в круглых скобках, который объяснет правила, которые вы уже знаете.)",
        "toughness": "1",
        "type": "Artifact Creature — Cyborg Soldier",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Andrea Radeck",
        "cmc": 3,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "94d8456cfadf9781927f2755fb077c04dde7c75f",
        "imageName": "ordinary pony",
        "layout": "normal",
        "manaCost": "{2}{W}",
        "multiverseid": 439406,
        "name": "Ordinary Pony",
        "nameRus": "Посредственный пони",
        "number": "17",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Horse"
        ],
        "text": "When this creature enters the battlefield, you may exile target non-Horse creature you control that wasn't put onto the battlefield with this ability this turn, then return it to the battlefield under its owner's control.",
        "textRus": "Когда это сущесвто выходит на поле боя, выможете изгнать целевое не являющееся Лошадью сущесвто под вашим контролем, которое не входило в игру от этой споосбности в этот ход, затем верните его на поле боя под контроль владельца.",
        "toughness": "3",
        "type": "Host Creature — Horse",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "YW Tang",
        "cmc": 0,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "b97b40e2830e81a22e92dcc134c5d8968741bd5e",
        "imageName": "rhino-",
        "layout": "normal",
        "multiverseid": 439407,
        "name": "Rhino-",
        "nameRus": "Носорог-",
        "number": "18",
        "power": "+1",
        "rarity": "Uncommon",
        "subtypes": [
            "Rhino"
        ],
        "text": "Whenever this creature blocks,\nAugment {3}{W} ({3}{W}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "Когда это сущесвто блокирует,\n Приростить {3}{W} ({3}{W},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+4",
        "type": "Creature — Rhino",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Mark A. Nelson",
        "cmc": 3,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"Turn a blender into an arc welder with a portable fusion reactor and a frozen yogurt dispenser? We can do it!\"",
        "id": "9f924fcae58d743347ee131234cd3a077f1d693d",
        "imageName": "riveting rigger",
        "layout": "normal",
        "manaCost": "{2}{W}",
        "multiverseid": 439408,
        "name": "Riveting Rigger",
        "nameRus": "Заклепочный такелажник",
        "number": "19",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Cyborg",
            "Rigger"
        ],
        "text": "When Riveting Rigger enters the battlefield, you may sacrifice another artifact. If you do, put two +1/+1 counters on Riveting Rigger and it assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда Заклепочный такелажник выходит на поле боя, вы можете пожертвовать другой артифакт. Если вы это делаете, положите два жетона +1/+1 на Заклепочного такелажника и соберите Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "2",
        "type": "Artifact Creature — Cyborg Rigger",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Sean Murray",
        "cmc": 5,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "0196f9bc90cb76748c9d8ca2dc72a046b1ce5123",
        "imageName": "rules lawyer",
        "layout": "normal",
        "manaCost": "{3}{W}{W}",
        "multiverseid": 439409,
        "name": "Rules Lawyer",
        "nameRus": "Адвокат правил",
        "number": "20",
        "power": "1",
        "rarity": "Rare",
        "subtypes": [
            "Cyborg",
            "Advisor"
        ],
        "text": "State-based actions don't apply to you or other permanents you control. (You don't lose the game due to having 0 or less life or drawing from an empty library. Your creatures aren't destroyed due to damage or deathtouch and aren't put into a graveyard due to having 0 or less toughness. Your planeswalkers aren't put into a graveyard if they have 0 loyalty. You don't put a legendary permanent into a graveyard if you control two with the same name. Counters aren't removed from your permanents due to game rules. Permanents you control attached or combined illegally remain on the battlefield. For complete rules and regulations, see rule 704.)",
        "textRus": "Правила состояний не применяются к вам и перманентам под вашим контролем. (В не проигрываете игру при 0 и менее жизней или при поптке взят ькарту из пустой библитеки. Ваши существа не уничтожаются от повреждений и смертельного касания и не перемещаются на кладбище если их выносливость авна 0 или менее. Выаши мироходцы не перемещаются на кладбиже если у них 0 жетоно преданости. Вы не кладете легендарный пермананет на кладбище если вы контролируете два с одинаковым именем. Жетоны не убираются с перманентов по правилам игры. Перманенты под вашим контролем прикрепленные не правильно остаются в игре. полныеправила смотрите в правиле 704.)",
        "toughness": "1",
        "type": "Artifact Creature — Cyborg Advisor",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Matt Gaser",
        "cmc": 3,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "In recursive chess, one piece can capture another only after beating it in a game of recursive chess.",
        "id": "9ffaa3a04e16132786e4e60be903fdeaa88f6d81",
        "imageName": "sacrifice play",
        "layout": "normal",
        "manaCost": "{2}{W}",
        "multiverseid": 439410,
        "name": "Sacrifice Play",
        "nameRus": "Пожертововать",
        "number": "21",
        "rarity": "Common",
        "text": "A person outside the game chooses an attacking or blocking creature target opponent controls. That player sacrifices that creature.",
        "textRus": "Человек вне игры выбирает атакующее или блокирующее сущесвто под контролем целевого игрока. Этот игрок жертвует это сущесвто.",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Kari Christensen",
        "cmc": 4,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "7a235bc598233c98e4c93f5f270a029f80eccf7f",
        "imageName": "shaggy camel",
        "layout": "normal",
        "manaCost": "{3}{W}",
        "multiverseid": 439411,
        "name": "Shaggy Camel",
        "nameRus": "Лохматый верблюд",
        "number": "22",
        "power": "3",
        "rarity": "Common",
        "subtypes": [
            "Camel"
        ],
        "text": "When this creature enters the battlefield, creatures you control get +1/+1 until end of turn.",
        "textRus": "Когда это сущесвто выодит на поле боя, существа под вашим контролем получают +1/+1 до конца хода.",
        "toughness": "3",
        "type": "Host Creature — Camel",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Alex Konstad",
        "cmc": 1,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "id": "2f03ec07ae907d66c5231587c1208108368af52c",
        "imageName": "side quest",
        "layout": "normal",
        "manaCost": "{W}",
        "multiverseid": 439412,
        "name": "Side Quest",
        "nameRus": "Побочный квест",
        "number": "23",
        "rarity": "Uncommon",
        "text": "Target player in a silver-bordered game you can see from your seat gains control of target creature you control until your next turn. At the beginning of your next upkeep, put two +1/+1 counters on that creature. (A creature is on the battlefield of only the game its controller is playing.)",
        "textRus": "Целевой игрок играющий в игру с серебяными рамками, котрого вы можете видеть с вашего месте получает контроль над целевым сущесвто под вашим контролем до конца вашего следующего хода. В начале вашего шага поддежки, положит два жетона +1/+1 на это сущесвто.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ]
    },
    {
        "artist": "Andrea Radeck",
        "cmc": 1,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"Those who witness my work often question its necessity. I've never understood that.\"\n—Dr. Julius Jumblemorph",
        "id": "72ffac1e1e20b8f4c948dd506b4b275f4119ad7f",
        "imageName": "success",
        "layout": "normal",
        "manaCost": "{W}",
        "multiverseid": 439413,
        "name": "Success!",
        "nameRus": "Успех!",
        "number": "24",
        "rarity": "Common",
        "text": "Target creature gets +2/+2 until end of turn. If it's a host or has augment, it gains lifelink until end of turn.",
        "textRus": "Целевое сущесвто получает +2/+2 до конца хода. Если это сущесвто Хозяин или имеет прирощение оно получает цепт жизни до конца хода.",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Mark Behm",
        "cmc": 2,
        "colorIdentity": [
            "W"
        ],
        "colors": [
            "White"
        ],
        "flavor": "\"First attempt: unsuccessful. Instead of an amphibious chicken, hybridization produced an aquaphobic fish.\"",
        "id": "19f3cfbed9b6814cd64b79cf3d7f28f22688b948",
        "imageName": "teachers pet",
        "layout": "normal",
        "manaCost": "{1}{W}",
        "multiverseid": 439414,
        "name": "Teacher's Pet",
        "nameRus": "Любимчик учителя",
        "number": "25",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Cat",
            "Bird",
            "Scientist"
        ],
        "text": "{2}{W}, Sacrifice Teacher's Pet: Search your library for a card with augment, combine it with target host you control, then shuffle your library.",
        "textRus": "{2}{W}, Пожертвуйте Любимчика учителя: Найдите в вашей библиотеки карту с прирощением, объедините ее с целевым хозяином под вашим контролем, затем перемшайте колоду.",
        "toughness": "1",
        "type": "Creature — Cat Bird Scientist",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Raymond Swanland",
        "cmc": 6,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "Sometimes the books hit back.",
        "id": "33e966139895bbeb803ca28d3517c2adea6be752",
        "imageName": "animate library",
        "layout": "normal",
        "manaCost": "{4}{U}{U}",
        "multiverseid": 439415,
        "name": "Animate Library",
        "nameRus": "Оживленная библиотека",
        "number": "26",
        "rarity": "Rare",
        "subtypes": [
            "Aura"
        ],
        "text": "Enchant your library\nEnchanted library is an artifact creature on the battlefield with power and toughness each equal to the number of cards in it. It's still a library.\nIf enchanted library would leave the battlefield, exile Animate Library instead.",
        "textRus": "Зачаруйте вашу библиотеку\nЗАчарованная библиотека становится артифактным сущесвто на поле боя с силой и выносливостью равной количеву карт в ней. Она остается библиотекой.\nЕсли зачарованная библиотека покидает поле боя, вместо этого изгоните Оживленную библиотеку",
        "type": "Enchantment — Aura",
        "types": [
            "Enchantment"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Jeff Miracola",
        "cmc": 1,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "a2715551b70ccb1086f20ba776f346f714efc413",
        "imageName": "blurry beeble",
        "layout": "normal",
        "manaCost": "{U}",
        "multiverseid": 439416,
        "name": "Blurry Beeble",
        "nameRus": "Близорукий библ",
        "number": "27",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Cyborg",
            "Beeble"
        ],
        "text": "Blurry (This creature can be blocked only if defending player was wearing glasses as it was cast.)\nWhenever Blurry Beeble deals combat damage to a player, you may draw a card. If you do, discard a card.",
        "textRus": "Близорукость (Это сущесвто может быть заблокировано толкьо елси защищающийся игрок носил очки когжа оно было разыграно)\nКогда Близорукий библ наносит повреждения игроку, вы можете взять карту. Если вы это делаете, сбросьте",
        "toughness": "1",
        "type": "Artifact Creature — Cyborg Beeble",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Dmitry Burmak",
        "cmc": 4,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "6e2f7e718cbe35bc6706c921dc53083aab92ddc5",
        "imageName": "chipper chopper",
        "layout": "normal",
        "manaCost": "{3}{U}",
        "multiverseid": 439417,
        "name": "Chipper Chopper",
        "nameRus": "Бодрый вертолетчик",
        "number": "28",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Cyborg",
            "Rigger"
        ],
        "text": "Flying\nWhen Chipper Chopper enters the battlefield, you may sacrifice another artifact. If you do, put two +1/+1 counters on Chipper Chopper and it assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Полет\nКогда Бодрый вертолетчик выходит на поле боя, вы можете пожертоваоать другой артифакт. если вы это делаете, положите +1/+1 на бодрого вертолетчка и собарите Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "1",
        "type": "Artifact Creature — Cyborg Rigger",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Marco Teixeira",
        "cmc": 5,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "d8a5cb9b297b01bc999519b38d2e1bf0666fb8a7",
        "imageName": "clocknapper",
        "layout": "normal",
        "manaCost": "{3}{U}{U}",
        "multiverseid": 439418,
        "name": "Clocknapper",
        "nameRus": "Похититель часов",
        "number": "29",
        "power": "2",
        "rarity": "Rare",
        "subtypes": [
            "Human",
            "Spy"
        ],
        "text": "When Clocknapper enters the battlefield, choose beginning phase, precombat main phase, combat phase, postcombat main phase, or ending phase. Steal that phase from target player during his or her next turn. (That phase occurs as though it's your turn instead.)",
        "textRus": "Когда Похититель часов выходит на поле боя, выберите начальную фазу, главную фазу до боя, боевую фазу, главную фазу после боя или фазу конца хода. Укарадите эту фазу у целевого игрока до конца вашего следующего хода. (Эта фаза будет играться так, как будто это ваша фаза.)",
        "toughness": "2",
        "type": "Creature — Human Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Mark Behm",
        "cmc": 3,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "a89be2fc64c22b613826744ebd4ad7c2e25ff066",
        "imageName": "crafty octopus",
        "layout": "normal",
        "manaCost": "{2}{U}",
        "multiverseid": 439419,
        "name": "Crafty Octopus",
        "nameRus": "Рукастый осьминог",
        "number": "30",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Octopus",
            "Rigger"
        ],
        "text": "When this creature enters the battlefield, this creature assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда это сущесвто вуходит на поле боя, это сущесвто собирает Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "3",
        "type": "Host Creature — Octopus Rigger",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "YW Tang",
        "cmc": 3,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "Storm crow lonely, boon for a birder.\nStorm crows together, likely a murder.",
        "id": "72ba92028167296bc5ccb6617861b0c02f927c36",
        "imageName": "crow storm",
        "layout": "normal",
        "manaCost": "{2}{U}",
        "multiverseid": 439420,
        "name": "Crow Storm",
        "nameRus": "Шторм ворон",
        "number": "31",
        "rarity": "Uncommon",
        "text": "Create a 1/2 blue Bird creature token with flying named Storm Crow.\nStorm (When you cast this spell, copy it for each spell cast before it this turn.)",
        "textRus": "Создайте фишку существа 1/2 синяя Птица с полетом с именем Штормовая ворона.\n Шторм (Когда вы разыгрываете это заклинание, скопируйте его за каждое заклинение сыграное перед этим в этот ход.)",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ]
    },
    {
        "artist": "Matt Dixon",
        "cmc": 3,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "Nothing gets by her . . . except the evidence, the motive, and the culprit.",
        "id": "c110136c38e5109b8d95732ecb2384434073f101",
        "imageName": "defective detective",
        "layout": "normal",
        "manaCost": "{2}{U}",
        "multiverseid": 439421,
        "name": "Defective Detective",
        "nameRus": "Дефективный детектив",
        "number": "32",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Human",
            "Spy"
        ],
        "text": "Defective Detective can't be blocked.\nWhen Defective Detective enters the battlefield, a person outside the game looks at target opponent's hand and chooses a card from it. That player reveals that card.",
        "textRus": "Дефективный детектив не может быть заблокирвоан. \nКогда Дефективный детектив выходит на поле боя, человек вне игры должен посмотерть карты в руке оппонента и выбраь одну и них. Этот игрок показывает эту карту.",
        "toughness": "1",
        "type": "Creature — Human Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Milivoj Ćeran",
        "cmc": 6,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "\"Dognapping is such an ugly word. I would characterize this as a unilateral redistribution of pets.\"",
        "id": "16b830fd7c40e495ced0b5ed354813671b2f2fd0",
        "imageName": "five-finger discount",
        "layout": "normal",
        "manaCost": "{4}{U}{U}",
        "multiverseid": 439422,
        "name": "Five-Finger Discount",
        "nameRus": "Скидка на пять пальцев",
        "number": "33",
        "rarity": "Uncommon",
        "text": "Put target nonland permanent into your hand. You may spend mana as though it were mana of any color the next time you cast that card.",
        "textRus": "Положите целевой перманент в вашу руку. Вы можеете использовать любую ману в следующий раз когда будет играть эту карту.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Bram Sels",
        "cmc": 6,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "You have to hang around the graveyard if you want to catch the talking dead.",
        "id": "e004b43925c8e96171f4e004e72f9810746f5f01",
        "imageName": "graveyard busybody",
        "layout": "normal",
        "manaCost": "{4}{U}{U}",
        "multiverseid": 439423,
        "name": "Graveyard Busybody",
        "nameRus": "Кладбищенский хлопотун",
        "number": "34",
        "power": "*",
        "rarity": "Rare",
        "subtypes": [
            "Human",
            "Spy"
        ],
        "text": "All graveyards are also your graveyards.\nGraveyard Busybody's power and toughness are each equal to the number of cards with flavor text in your graveyards.",
        "textRus": "Все кладбища так же являются вашими кладибщами\nСила и ванослиовать Кладбищенского хлопотуна числу карт с художественным тесктом на ваших кладбищах.",
        "toughness": "*",
        "type": "Creature — Human Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Brynn Metheney",
        "cmc": 0,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "31a28d4339c437d527d152c8c5a97b87ef15f3a0",
        "imageName": "half-shark, half-",
        "layout": "normal",
        "multiverseid": 439424,
        "name": "Half-Shark, Half-",
        "nameRus": "Полу акула, полу-",
        "number": "35",
        "power": "+3",
        "rarity": "Uncommon",
        "subtypes": [
            "Fish"
        ],
        "text": "At the beginning of your upkeep,\nAugment {5}{U} ({5}{U}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "В аначале вашего шага поддержки,\nПриростить {5}{U} ({5}{U},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+3",
        "type": "Creature — Fish",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "David Sladek",
        "cmc": 2,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "After a hundred failed patent applications, Cornelian was stunned to find that no one had ever created a steam-powered autonomous ice cream delivery system. He immediately designed a gnome with scoops for hands.",
        "id": "7eb601c927d3d149d2012926c1a458bdbec39ee2",
        "imageName": "incite insight",
        "layout": "normal",
        "manaCost": "{X}{U}{U}",
        "multiverseid": 439425,
        "name": "Incite Insight",
        "nameRus": "Пробуждения вдохновения",
        "number": "36",
        "rarity": "Rare",
        "text": "Assemble X Contraptions. (To assemble a Contraption, put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Соберите Х Штуковин. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Mark Behm",
        "cmc": 2,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "\"What's wrong, dear? Nothing a 44-to-22 bronze spur gear and reducer pairing couldn't fix, I bet.\"",
        "id": "a9cdcc22575aa05579bdfe79c86851e01ca79a9f",
        "imageName": "kindly cognician",
        "layout": "normal",
        "manaCost": "{1}{U}",
        "multiverseid": 439426,
        "name": "Kindly Cognician",
        "nameRus": "Добросердечный познователь",
        "number": "37",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Cyborg",
            "Artificer"
        ],
        "text": "Spells you cast that refer to artifacts or Contraptions in their rules text cost {1} less to cast.",
        "textRus": "Заклинания которые вы разыгрываете с упоинанием артифактов или Штуковин в их текстах стоят на {1} меньше.",
        "toughness": "3",
        "type": "Artifact Creature — Cyborg Artificer",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Carl Frank",
        "cmc": 3,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "267f20974fa8ccd4d3b5235049cd3ba3548fd2c4",
        "imageName": "magic word",
        "layout": "normal",
        "manaCost": "{2}{U}",
        "multiverseid": 439427,
        "name": "Magic Word",
        "nameRus": "Волшебное слово",
        "number": "38",
        "rarity": "Common",
        "subtypes": [
            "Aura"
        ],
        "text": "Enchant creature\nAs Magic Word enters the battlefield, choose a word.\nWhisper the chosen word: Tap enchanted creature.",
        "textRus": "Зачаруйте существо\nКогда волшебное слово выходит на поле боя, выберите слово.\nПрошепчите выбранное слово: Поверните зачарованное сущесвто.",
        "type": "Enchantment — Aura",
        "types": [
            "Enchantment"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Mark Behm",
        "cmc": 5,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "52c4ea3930cb61d9992dd424adf32ad212418a63",
        "imageName": "mer man",
        "layout": "normal",
        "manaCost": "{4}{U}",
        "multiverseid": 439428,
        "name": "Mer Man",
        "nameRus": "Водяной",
        "number": "39",
        "power": "3",
        "rarity": "Common",
        "subtypes": [
            "Human",
            "Fish"
        ],
        "text": "When this creature enters the battlefield, you may draw a card.",
        "textRus": "Когда это сущесвто выходит на оле боя, вы можете взять крату.",
        "toughness": "3",
        "type": "Host Creature — Human Fish",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Chris Seaman",
        "cmc": 1,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "Why was 5 afraid of 6? Because 678.",
        "id": "b6abff553f451784656d019e2f3092908c089dcc",
        "imageName": "more or less",
        "layout": "normal",
        "manaCost": "{U}",
        "multiverseid": 439429,
        "name": "More or Less",
        "nameRus": "Чуть больше, чуть меньше",
        "number": "40",
        "rarity": "Uncommon",
        "text": "Add or subtract 1 or one from a number or number word on target spell or permanent until end of turn.",
        "textRus": "Добавьте или вычтите 1 из числа или слова-числа на целеовом заклинании или перманенте до конца хода.",
        "type": "Instant",
        "types": [
            "Instant"
        ]
    },
    {
        "artist": "Tom Babbey",
        "cmc": 2,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "\"My grandmother had sold the rest of her jewelry long ago, but she left a particular necklace in my care: a golden chain, bearing a raven-shaped charm.\"",
        "id": "ec1869b38504e07a40df083a37068e0f8bae6610",
        "imageName": "novellamental",
        "layout": "normal",
        "manaCost": "{1}{U}",
        "multiverseid": 439430,
        "name": "Novellamental",
        "nameRus": "Новеламенталь",
        "number": "41",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Elemental"
        ],
        "text": "Flying\nNovellamental can block only creatures with flying.",
        "textRus": "Полет\nНовеламенталь может блокировать только сущесвт с полетом.",
        "toughness": "1",
        "type": "Creature — Elemental",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Matt Dixon",
        "cmc": 4,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "ae42424f75b1853df27a021b7df62bcd98179c59",
        "imageName": "numbing jellyfish",
        "layout": "normal",
        "manaCost": "{3}{U}",
        "multiverseid": 439431,
        "name": "Numbing Jellyfish",
        "nameRus": "Жалящая медуза",
        "number": "42",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Jellyfish"
        ],
        "text": "When this creature enters the battlefield, roll a six-sided die. Target player puts the top X cards of his or her library into his or her graveyard, where X is the result.",
        "textRus": "Когда это сущесвто выходит на поле боя, бросьте шестигранный кубик. Целевой игрок кладет Х верхних карт своей колоды на свое кладбище, где Х результат броска.",
        "toughness": "3",
        "type": "Host Creature — Jellyfish",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "John Thacker",
        "cmc": 2,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "dca79c909323bb9ff4929c211130fc3db2922931",
        "imageName": "s.n.e.a.k. dispatcher",
        "layout": "normal",
        "manaCost": "{1}{U}",
        "multiverseid": 439432,
        "name": "S.N.E.A.K. Dispatcher",
        "nameRus": "Диспетчер В.О.Р.И.Ш.К.А. ",
        "number": "43",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Human",
            "Spy"
        ],
        "text": "{2}{U}, {T}: Look at the top card of target player's library. If it has an Agents of S.N.E.A.K. watermark, you may reveal it and put it into your hand. Otherwise, put it on the top or bottom of its owner's library.",
        "textRus": "{2}{U}, {T}: Посмотрите врехнюю карты колоды целевого игрока. Эсли эта карта меет водяной знак Агенты В.О.Р.И.Ш.К.А., вы можете показать ее и положить в свою руку. В противном случае положите ее наверх или винз колоды владельца.",
        "toughness": "1",
        "type": "Creature — Human Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "David Sladek",
        "cmc": 1,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "93edc2a01930a06bac3d9e4fc2e3232f7507347a",
        "imageName": "socketed sprocketer",
        "layout": "normal",
        "manaCost": "{U}",
        "multiverseid": 439433,
        "name": "Socketed Sprocketer",
        "nameRus": "Звездочник с разъемом",
        "number": "44",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Cyborg",
            "Knight"
        ],
        "text": "{T}: Uninstall all results from Socketed Sprocketer, then roll a six-sided die. Install the result on Socketed Sprocketer. (Put the die on this card.)\nYou may uninstall a result from Socketed Sprocketer to use it for a die you rolled.\nUninstall a 6 from Socketed Sprocketer: Draw a card.",
        "textRus": "{T}: Удилите все результаты со Звездочника с разъемом, затем бросьте шестигранный кубик. Установиите результат на Звездочника с разъемом. (Положите кубик на эту карты.)\nВы можете удалить результат со Звездочника с разъемом, что бы использовать его для резльтата вашего броска кубика.\n Удалите результат 6 со Звездочника с рахъемом: Возьмите карту.",
        "toughness": "1",
        "type": "Artifact Creature — Cyborg Knight",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Michael Phillippi",
        "cmc": 4,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "S-U-C-K",
        "id": "4a8b04db77c1cfb235eb6d992edd19628454a08b",
        "imageName": "spell suck",
        "layout": "normal",
        "manaCost": "{2}{U}{U}",
        "multiverseid": 439434,
        "name": "Spell Suck",
        "nameRus": "Всосать заклинание",
        "number": "45",
        "rarity": "Common",
        "text": "Counter target spell, then assemble a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Отмените целевое заклинание, затем соберите Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Ben Wootten",
        "cmc": 4,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "\"That pigeon knows something, and we will find out what.\"\n—X",
        "id": "5a8a17c3599dbd3a6cc64c99154abf3abc49a1c3",
        "imageName": "spy eye",
        "layout": "normal",
        "manaCost": "{2}{U}{U}",
        "multiverseid": 439435,
        "name": "Spy Eye",
        "nameRus": "Шпионский глаз",
        "number": "46",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Eye",
            "Spy"
        ],
        "text": "Flying\nWhenever Spy Eye deals combat damage to a player, you may draw a card from that player's library.",
        "textRus": "Полет\nКогда Шпионский глаз наносит повреждения целевому игроку, вы можете взять карту из колоды этого игрока.",
        "toughness": "3",
        "type": "Creature — Eye Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Chris Seaman",
        "cmc": 5,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "\"Afternoon, folks. Lovely day for a stroll with my authentic human baby.\"",
        "id": "b96f70749bc098a8e4132af5732120002215a80c",
        "imageName": "suspicious nanny",
        "layout": "normal",
        "manaCost": "{4}{U}",
        "multiverseid": 439436,
        "name": "Suspicious Nanny",
        "nameRus": "Подозрительная няня",
        "number": "47",
        "power": "3",
        "rarity": "Uncommon",
        "subtypes": [
            "Human",
            "Spy",
            "Rigger"
        ],
        "text": "Whenever Suspicious Nanny deals combat damage to a player, it reassembles target Contraption that player controls. (Gain control of it and move it onto one of your sprockets.)",
        "textRus": "Когда Подозрительная няня наносит боевые повреждения игроку, она переразбирает целевую Штуковину под контролем этого игрока. (Получите контроль на ней и перемести ее на одну из своих звездочек.)",
        "toughness": "4",
        "type": "Creature — Human Spy Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Dave Allsop",
        "cmc": 5,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "Anyone other than a goblin would've gotten only a hand caught in the cookie jar.",
        "id": "b45940bf6979a251c6ec5426ad4d482718ed507a",
        "imageName": "time out",
        "layout": "normal",
        "manaCost": "{4}{U}",
        "multiverseid": 439437,
        "name": "Time Out",
        "nameRus": "Перерыв",
        "number": "48",
        "rarity": "Common",
        "text": "Roll a six-sided die. Put target nonland permanent into its owner's library just beneath the top X cards of that library, where X is the result.",
        "textRus": "Бросьте шестигранный кубик. Положите целевой перманент не являющийся землей в клоду владельца под Х верхних карт, где Х результат броска.",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Zoltan Boros",
        "cmc": 4,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "id": "b74b32de683c1062c928e507c947b4e49565bff7",
        "imageName": "very cryptic command",
        "layout": "normal",
        "manaCost": "{1}{U}{U}{U}",
        "multiverseid": 439438,
        "name": "Very Cryptic Command",
        "nameRus": "Очень загадочная команда",
        "number": "49",
        "rarity": "Rare",
        "text": "Choose two —\n• Untap two target permanents.\n• Tap each permanent target player controls with exactly one word in its name.\n• Discard all the cards in your hand, then draw that many cards.\n• Return target instant or sorcery card from your graveyard to your hand.",
        "textRus": "Выберите два —\n• Разверните два перманента.\n• Поверните каждый пермренте под контролем целевого игрока в имени кторого ровно одно слво.\n• Сбросьте все карты с руки, затем возьмите столько же карт.\n• Верните целевое мнгновенное заклинание (Instant) или заклинание волешбства (Sorcery) с вашего кладбища в вашу руку",
        "type": "Instant",
        "types": [
            "Instant"
        ]
    },
    {
        "artist": "Tom Babbey",
        "cmc": 2,
        "colorIdentity": [
            "U"
        ],
        "colors": [
            "Blue"
        ],
        "flavor": "\"You need a six? All right everyone, she needs a six!\"",
        "id": "0819e11a0fd314bd882f9900514d4d28334557f8",
        "imageName": "wall of fortune",
        "layout": "normal",
        "manaCost": "{1}{U}",
        "multiverseid": 439439,
        "name": "Wall of Fortune",
        "nameRus": "Стена удачи",
        "number": "50",
        "power": "0",
        "rarity": "Common",
        "subtypes": [
            "Wall"
        ],
        "text": "Defender\nYou may tap an untapped Wall you control to have any player reroll a die that player rolled.",
        "textRus": "Защитник\nВы можете повренуть неповренутую Стену под вашим контролем, чтобы заставить игрока перебросить кубик, который тот игрок бросил.",
        "toughness": "4",
        "type": "Artifact Creature — Wall",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Kari Christensen",
        "cmc": 4,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "1664fb6d213c082d59b6c990a2b42bcc2e5f9ca7",
        "imageName": "big boa constrictor",
        "layout": "normal",
        "manaCost": "{3}{B}",
        "multiverseid": 439440,
        "name": "Big Boa Constrictor",
        "nameRus": "Удав большой Боа",
        "number": "51",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Snake"
        ],
        "text": "When this creature enters the battlefield, roll a six-sided die. Target opponent loses life equal to the result.",
        "textRus": "Когда это сущесвто выходит на поле боя, бросьте шестигранный кубик. Целевой оппонент теряет жизни в колчистве равном значению броска.",
        "toughness": "2",
        "type": "Host Creature — Snake",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Matt Dixon",
        "cmc": 4,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "part basket case, all lowercase.",
        "id": "4b2880fb6417bec52544b038760c55b9a56c5d02",
        "imageName": "captialoffense",
        "layout": "normal",
        "manaCost": "{2}{B}{B}",
        "multiverseid": 439441,
        "name": "capital offense",
        "nameRus": "заглавное нападение",
        "number": "52",
        "rarity": "Common",
        "text": "target creature gets -x/-x until end of turn, where x is the number of times a capital letter appears in its rules text. (ignore reminder text and flavor text.)",
        "textRus": "целевое сущесвто получает -х/-х до конца хода, где х это количество заглавных букв встречающихся в его тексте. (игнорируйте напоминания и художественный текст.)",
        "type": "instant",
        "types": [
            "Instant"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Kari Christensen",
        "cmc": 2,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "ff325490c01309d08c50ca9a2e9ddc4445624460",
        "imageName": "dirty rat",
        "layout": "normal",
        "manaCost": "{1}{B}",
        "multiverseid": 439442,
        "name": "Dirty Rat",
        "nameRus": "Грязная крыса",
        "number": "53",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Rat"
        ],
        "text": "When this creature enters the battlefield, target opponent discards a card.",
        "textRus": "Когда это сущесвто выходит на поле боя, целевой оппонет сбрасывает карту.",
        "toughness": "1",
        "type": "Host Creature — Rat",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Emrah Elmasli",
        "cmc": 2,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "Brrrrrrrrrrrr . . .",
        "id": "900df69542615eb1d36c401cef84ff82363b7c10",
        "imageName": "extremely slow zombie",
        "layout": "normal",
        "manaCost": "{1}{B}",
        "multiverseid": 439443,
        "name": "Extremely Slow Zombie",
        "nameRus": "Экстримально медленный зомби",
        "number": "54",
        "power": "3",
        "rarity": "Common",
        "subtypes": [
            "Zombie"
        ],
        "text": "Last strike (This creature deals combat damage after creatures without last strike.)",
        "textRus": "Последний удар (Это сущесвто наносит боевые повреждения после существ без последнего удара.)",
        "toughness": "3",
        "type": "Creature — Zombie",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Mark Behm",
        "cmc": 6,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "The S.N.E.A.K. Code clearly permits looting corpses for parts. That just meant Agent 47.3 had to make sure her target was dead first.",
        "id": "c5e0986ab99abbcb98e59fb7396c495be54ec19a",
        "imageName": "finders, keepers",
        "layout": "normal",
        "manaCost": "{5}{B}",
        "multiverseid": 439444,
        "name": "Finders, Keepers",
        "nameRus": "Искатели, Хранители",
        "number": "55",
        "rarity": "Common",
        "text": "Destroy target creature, then assemble a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Уничтожьте целевое сущесвто, затем соберите Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Alex Konstad",
        "cmc": 1,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "63672eda54f6e1a4d86b6a4907f834e686427dee",
        "imageName": "hangman",
        "layout": "normal",
        "manaCost": "{B}",
        "multiverseid": 439445,
        "name": "Hangman",
        "nameRus": "Палач",
        "number": "56",
        "power": "1",
        "rarity": "Rare",
        "subtypes": [
            "Human",
            "Villain"
        ],
        "text": "As Hangman enters the battlefield, secretly note a word with six to eight letters.\n{1}: Target player who doesn't control Hangman guesses the noted word or an unguessed letter in that word. If he or she guesses wrong, put a +1/+1 counter on Hangman. Any player may activate this ability.\nWhen a player guesses the noted word or all of its letters, sacrifice Hangman.",
        "textRus": "Когда Палач выходит на поле боя, секретно запишите слово длиной от шести до восьми символов.\n{1}: Целевой игрок который не контролирует Палача угадывает записанное слово или ранее непредложенную букву из этого слова. Если его догадка неверна, положите жетон +1/+1 на Палача. Любой игрок может активтировать эту способность.\nКогда игрок угадывает записанное слово или все его буквы, пожертвуйте Палача.",
        "toughness": "1",
        "type": "Creature — Human Villain",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Michael Phillippi",
        "cmc": 4,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "f691b295f552fbeb825f2302d48a6a169da72f0e",
        "imageName": "hazmatsuitused",
        "layout": "normal",
        "manaCost": "{3}{B}",
        "multiverseid": 439446,
        "name": "Hazmat Suit",
        "nameRus": "Общевойсковой защитный комплект (БУ)",
        "number": "57",
        "rarity": "Common",
        "subtypes": [
            "Aura"
        ],
        "text": "Enchant creature\nEnchanted creature gets +2/+1 and has menace.\nWhenever a player's skin or fingernail touches enchanted creature, that player loses 2 life.",
        "textRus": "Зачаруйте сущесвто\nЗачарованное сущесвто получает +2/+1 и имеет угрозу.\nКогда игрок касается кожей или ногтем зачарованное сущесвто, этот игрок теряет 2 жизни.",
        "type": "Enchantment — Aura",
        "types": [
            "Enchantment"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Alex Konstad",
        "cmc": 3,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "Zarv no longer trusted the kitten posters telling him to \"hang in there.\"",
        "id": "31e62768a05e8a7ab910db33d2a7b9bcff5cafb8",
        "imageName": "hoisted hireling",
        "layout": "normal",
        "manaCost": "{2}{B}",
        "multiverseid": 439447,
        "name": "Hoisted Hireling",
        "nameRus": "Поднятый на лебедке наемник",
        "number": "58",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Zombie"
        ],
        "text": "Hoisted Hireling has flying as long as it's being held above the battlefield.",
        "textRus": "Поднятый на лебедке наемник имеет полет до тех пока его держат над полем боя.",
        "toughness": "1",
        "type": "Creature — Zombie",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Matt Dixon",
        "cmc": 2,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "For the mind-minded mastermind.",
        "id": "395740ff7caf7ea2f9da98ba0b6b6be99b060cb2",
        "imageName": "inhumaniac",
        "layout": "normal",
        "manaCost": "{1}{B}",
        "multiverseid": 439448,
        "name": "Inhumaniac",
        "nameRus": "Негуманномоньяк",
        "number": "59",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Brainiac"
        ],
        "text": "At the beginning of your upkeep, roll a six-sided die. On a 3 or 4, put a +1/+1 counter on Inhumaniac. On a 5 or higher, put two +1/+1 counters on it. On a 1, remove all +1/+1 counters from Inhumaniac.",
        "textRus": "В начале вашей фазы поддержки, бросьте шестигранный кубик. На 3 или 4 положите жетон +1/+1 на Негуманоманньяка. На 5 или более, положите два жетона +1/+1 на него. На 1, удалите все жетоны +1/+1 с Негуманоманньяка",
        "toughness": "1",
        "type": "Creature — Brainiac",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Matt Gaser",
        "cmc": 3,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "14a6af046cf0c0b6d5cdc5818bb35854d0c6f4f7",
        "imageName": "masterful ninja",
        "layout": "normal",
        "manaCost": "{2}{B}",
        "multiverseid": 439449,
        "name": "Masterful Ninja",
        "nameRus": "Мастер ниндзя",
        "number": "60",
        "power": "1",
        "rarity": "Rare",
        "subtypes": [
            "Troll",
            "Ninja"
        ],
        "text": "Haste\nReveal Masterful Ninja from your hand: Masterful Ninja is on the battlefield and in your hand until end of turn.\n{1}{B}: Masterful Ninja gets +1/+1 until end of turn.",
        "textRus": "Ускорение\nПокажите Мастера ниндзя с вашей руки: Мастре ниндзя находится на столе и в вашей руке до конца хода.\n{1}{B}: Мастер ниндзя получает +1/+1 до конца хода.",
        "toughness": "1",
        "type": "Creature — Troll Ninja",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "David Sladek",
        "cmc": 0,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "a797c14be88f27aa2eef813cb9b382fffac1acbe",
        "imageName": "ninja",
        "layout": "normal",
        "multiverseid": 439450,
        "name": "Ninja",
        "nameRus": "Ниндзя",
        "number": "61",
        "power": "+1",
        "rarity": "Uncommon",
        "subtypes": [
            "Ninja"
        ],
        "text": "You may activate Ninja's augment ability any time you could cast an instant.\nWhenever this creature deals combat damage to a player,\nAugment {2}{B} ({2}{B}, Reveal this card from your hand: Combine it with target host. Augment only as—oh, nevermind.)",
        "textRus": "Вы можете активровать споособность прироста Ниндзя в то время когда вы можете играть мнговенные заклинания.\nКогда это сущесвто наносит боевые повреждения игроку,\nПриростить {2}{B} ({2}{B},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Наращивайте только как  - ох, забудь.)",
        "toughness": "+0",
        "type": "Creature — Ninja",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Simon Dominic",
        "cmc": 5,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "\"Stalking hard or hardly stalking, am I right?\"",
        "id": "7da81122b7dfe8f8d60a378ef21978b845d12db3",
        "imageName": "old-fashioned vampire",
        "layout": "normal",
        "manaCost": "{3}{B}{B}",
        "multiverseid": 439451,
        "name": "Old-Fashioned Vampire",
        "nameRus": "Старомодный вампир",
        "number": "62",
        "power": "3",
        "rarity": "Uncommon",
        "subtypes": [
            "Vampyre"
        ],
        "text": "Flying\nOld-Fashioned Vampire gets +2/+2 and has deathtouch as long as it's dark outdoors.",
        "textRus": "Полет\nСтаромодный вампир получает +2/+2 и смертельное касание пока на улице темно.",
        "toughness": "3",
        "type": "Creature — Vampyre",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Even Amundsen",
        "cmc": 6,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "5d10852c4ced5abbb304aaad1a4bc29630e6a623",
        "imageName": "over my dead bodies",
        "layout": "normal",
        "manaCost": "{4}{B}{B}",
        "multiverseid": 439452,
        "name": "Over My Dead Bodies",
        "nameRus": "Над моими мертвыми телами",
        "number": "63",
        "rarity": "Rare",
        "text": "Creature cards in graveyards can attack and block as though they were on the battlefield, can block or be blocked only by creature cards in graveyards, are Zombies in addition to their other types, and have undeathtouch. (If they would deal damage to a creature card, exile that creature card instead.)\nCreature cards in your graveyard have haste.",
        "textRus": "Карты существ на кладбищах могут атаковать и блокировать так, как будто они на поле боя, могут блоикровать и быть заблокироваными только существами на кладбищах, являются Зомби в дополнение к остальным типам и имеют несмертельное касание. (Если они будут наносить повреждения карте существа, вместо этого изгоните эту карту.)\nСущества на вашем кладбище имеют ускорение.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Bram Sels",
        "cmc": 4,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "Saw her coming. Didn't matter.",
        "id": "50e067acfde5c2dcfa86760b328ee50cbe2e50ed",
        "imageName": "overt operative",
        "layout": "normal",
        "manaCost": "{3}{B}",
        "multiverseid": 439453,
        "name": "Overt Operative",
        "nameRus": "Оперативник без прикрытия",
        "number": "64",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Human",
            "Ninja",
            "Rigger"
        ],
        "text": "Menace\nWhenever Overt Operative deals combat damage to a player, it assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Угроза\nКогда Оперативник без прикытия наносит боевые повреждения игроку, он собирает Штуковинк. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "3",
        "type": "Creature — Human Ninja Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Alex Konstad",
        "cmc": 3,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "By the fourth funeral, the mooks had gotten pretty good at them.",
        "id": "d345f7cb7b9388213afca0b8982806b1f9e130a8",
        "imageName": "rumors of my death . . .",
        "layout": "normal",
        "manaCost": "{2}{B}",
        "multiverseid": 439454,
        "name": "\"Rumors of My Death . . .\"",
        "nameRus": "\"Слухи о моей смерти . . .\"",
        "number": "65",
        "rarity": "Uncommon",
        "text": "{3}{B}, Exile a permanent you control with a League of Dastardly Doom watermark: Return a permanent card with a League of Dastardly Doom watermark from your graveyard to the battlefield.",
        "textRus": "{3}{B}, Изгоните пермананет под вашим контроле с водным знаком Лиги подлой судьбы: Верните карту перманента с водным знаком Лиги подлой судьбы из вашего кладбища на поле боя.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Mike Burns",
        "cmc": 6,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "No body is ready for this kind of power.",
        "id": "dc31dde433af7ee633043a35a011e9db48ac8183",
        "imageName": "skull saucer",
        "layout": "normal",
        "manaCost": "{4}{B}{B}",
        "multiverseid": 439455,
        "name": "Skull Saucer",
        "nameRus": "Черепная тарелка",
        "number": "66",
        "power": "4",
        "rarity": "Uncommon",
        "subtypes": [
            "Zombie",
            "Head"
        ],
        "text": "Flying\nWhen Skull Saucer enters the battlefield, destroy target creature and put your head on the table. Sacrifice Skull Saucer when your head stops touching the table.",
        "textRus": "Полет\nКогда Черепная тарелка выходит на поле боя, уничтожьте целевое сущесвто и положите свою голову на стол. Как только вы оторвете свою голову от стола пожертвуйте Черпеную тарелку.",
        "toughness": "1",
        "type": "Creature — Zombie Head",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Michael Phillippi",
        "cmc": 3,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "The Agents of S.N.E.A.K.—Serious, Nonstop Espionage and Kidnapping.",
        "id": "e6088778ad7f7895ec6d1e376bb468bd1e08caea",
        "imageName": "sly spy",
        "layout": "normal",
        "manaCost": "{2}{B}",
        "multiverseid": 439456,
        "name": "Sly Spy",
        "nameRus": "Хитрый шпион",
        "number": "67",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Human",
            "Spy"
        ],
        "text": "Whenever Sly Spy deals combat damage to a player, that player reveals his or her hand. You choose a card from it with the longest name. That player discards that card.",
        "textRus": "Когда Хитрый шпион наносит боевые поврежедения игроку, этот игрок показывает свою руку. Вы выбираете из них карту с самым длинным именем. Этот игрок сбрасывает эту карту.",
        "toughness": "2",
        "type": "Creature — Human Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Michael Phillippi",
        "cmc": 1,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "\"In this line of work, you've got to know how to squirrel things away. Quite literally, in my case.\"",
        "id": "cab6836c1a951030ac6e1512a30ef44d1d388eea",
        "imageName": "snickering squirrel",
        "layout": "normal",
        "manaCost": "{B}",
        "multiverseid": 439457,
        "name": "Snickering Squirrel",
        "nameRus": "Хихикающая белка",
        "number": "68",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Squirrel",
            "Advisor"
        ],
        "text": "You may tap Snickering Squirrel to increase the result of a die any player rolled by 1.",
        "textRus": "Вы можете повренуть Хихикающую белку что бы увеличить значание выпавшее на куьике на 1.",
        "toughness": "1",
        "type": "Creature — Squirrel Advisor",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Zoltan Boros",
        "cmc": 4,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "\"Just wait—I have a response.\"",
        "id": "7378bfffd12ed08550db2b7acb175f4d71f7e8e4",
        "imageName": "spike, tournament grinder",
        "layout": "normal",
        "manaCost": "{2}{B/P}{B/P}",
        "multiverseid": 439458,
        "name": "Spike, Tournament Grinder",
        "nameRus": "Спайк, Турнирная дробилка",
        "number": "69",
        "power": "1",
        "rarity": "Rare",
        "subtypes": [
            "Human",
            "Gamer"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "({B/P} can be paid with either {B} or 2 life.)\n{B/P}{B/P}{B/P}{B/P}: Choose a card you own from outside the game that has been banned or restricted in a Constructed format, reveal that card, and put it into your hand.",
        "textRus": "({B/P} может быть уплачена как {B} или как 2 жизни.)\n{B/P}{B/P}{B/P}{B/P}: Выберите карты которой вы владеете вне игру и которая запрещена или ограничега в Констрактеде, покажите ее и положите в свою руку.",
        "toughness": "1",
        "type": "Legendary Creature — Human Gamer",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Even Amundsen",
        "cmc": 3,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "Lucinda didn't know which she enjoyed most: the science, the squirrels, or the maniacal laughter.",
        "id": "d8c09c7a4489ce50daaaf36754b1e414b481b6b5",
        "imageName": "squirrel-powered scheme",
        "layout": "normal",
        "manaCost": "{2}{B}",
        "multiverseid": 439459,
        "name": "Squirrel-Powered Scheme",
        "nameRus": "Система на белечьем ходу",
        "number": "70",
        "rarity": "Uncommon",
        "text": "Increase the result of each die you roll by 2.",
        "textRus": "Увеличьте каждый результат вашего броска кубика на 2.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Carl Frank",
        "cmc": 3,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "A mook's life span is just long enough to get just good enough to get careless.",
        "id": "7821e8e65b0bad740cc74ae8b003fceaed0ea2e3",
        "imageName": "steady-handed mook",
        "layout": "normal",
        "manaCost": "{2}{B}",
        "multiverseid": 439460,
        "name": "Steady-Handed Mook",
        "nameRus": "Осторожнорукий мук",
        "number": "71",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Human",
            "Rigger"
        ],
        "text": "Deathtouch\nWhen Steady-Handed Mook enters the battlefield, it assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Смертельное касание\nКогда Осторожнорукий мук выходит на поле боя, он собирает штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "1",
        "type": "Creature — Human Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "YW Tang",
        "cmc": 5,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "45980f14f3aeb113391234a791b10a8930f569e4",
        "imageName": "stinging scorpion",
        "layout": "normal",
        "manaCost": "{4}{B}",
        "multiverseid": 439461,
        "name": "Stinging Scorpion",
        "nameRus": "Жалящий скорпион",
        "number": "72",
        "power": "3",
        "rarity": "Common",
        "subtypes": [
            "Scorpion"
        ],
        "text": "When this creature enters the battlefield, target creature an opponent controls gets -1/-1 until end of turn.",
        "textRus": "Когда это существо выходит на поле боя, целевое существо под контролем оппонента получает -1/-1 до конца хода.",
        "toughness": "2",
        "type": "Host Creature — Scorpion",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Hector Ortiz",
        "cmc": 1,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "flavor": "Martha was in and out in exactly two minutes—thirty seconds to administer the poison plus a minute and a half to properly refold the napkins.",
        "id": "512c4dcf77a771d037b67525f87ae5343415ef67",
        "imageName": "subcontract",
        "layout": "normal",
        "manaCost": "{B}",
        "multiverseid": 439462,
        "name": "Subcontract",
        "nameRus": "Субподряд",
        "number": "73",
        "rarity": "Common",
        "text": "A person outside the game looks at target opponent's hand and chooses a nonland card from it. That player discards that card.",
        "textRus": "Человек вне игры смотрит руку целевом игроку и выбирает из нее одну карту не являющуюся землей. Этот игрок сбрасывает эту карту.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Matt Cavotta",
        "cmc": 8,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "88d529609efeadade03728a65bc5968582ac1691",
        "imageName": "summon the pack",
        "layout": "normal",
        "manaCost": "{7}{B}",
        "multiverseid": 439463,
        "name": "Summon the Pack",
        "nameRus": "Призыв бустера",
        "number": "74",
        "rarity": "Mythic Rare",
        "text": "Open a sealed Magic booster pack, reveal the cards, and put all creature cards revealed this way onto the battlefield under your control. They're Zombies in addition to their other types. (Remove those cards from your deck before beginning a new game.)",
        "textRus": "Откройте запечатаный бустер Magic, покажите карты и положите все карты существ показанных таким образом на поле боя под ваш контроль. Они являются Зомби в дополнение к их типам. (удалите эти карты из вашей колоды перед новой игрой.)",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Kev Walker",
        "cmc": 0,
        "colorIdentity": [
            "B"
        ],
        "colors": [
            "Black"
        ],
        "id": "1b1f9cf5274739637dc5524af7334ec89f9cd49b",
        "imageName": "zombified",
        "layout": "normal",
        "multiverseid": 439464,
        "name": "Zombified",
        "nameRus": "Зомбированный",
        "number": "75",
        "power": "+2",
        "rarity": "Uncommon",
        "subtypes": [
            "Zombie"
        ],
        "text": "{4}{B}: Combine Zombified from your graveyard with target host.\n{2}{B}, Exile a creature card from your graveyard:\nAugment {4}{B} ({4}{B}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "{4}{B}: Объедините Зомбированный на вашем кладбище с целевым Хозяином.\n{2}{B}, Изгоните карту сущеста с вашего кладбища:\nПриростить {4}{B} ({4}{B},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+2",
        "type": "Creature — Zombie",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Bram Sels",
        "cmc": 6,
        "colorIdentity": [
            "R",
            "B"
        ],
        "colors": [
            "Red"
        ],
        "id": "9bcce3da22f727711b882c84e3b103d5f85b53a8",
        "imageName": "the big idea",
        "layout": "normal",
        "manaCost": "{4}{R}{R}",
        "multiverseid": 439465,
        "name": "The Big Idea",
        "nameRus": "Больша идея",
        "number": "76",
        "power": "4",
        "rarity": "Rare",
        "subtypes": [
            "Brainiac",
            "Villain"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "{2}{B/R}{B/R}, {T}: Roll a six-sided die. Create a number of 1/1 red Brainiac creature tokens equal to the result.\nTap three untapped Brainiacs you control: The next time you would roll a six-sided die, instead roll two six-sided dice and use the total of those results.",
        "textRus": "{2}{B/R}{B/R}, {T}: Бросьте шестигранный кубик. Создайте фишки существе 1/1 красный Брейняк в колчиесвте равном выпавшему результату.\nПоверните три неповренутых Брейняка под вашим контролем: В следующий раз когда вы будете кидать шестигранный кубик, вместо этого бросьте два шестигранных кубика и используйте общий результат.",
        "toughness": "4",
        "type": "Legendary Creature — Brainiac Villain",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Chris Seaman",
        "cmc": 6,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "Skrab tried to warn his fellow goblins that the hammer was bait for a trap, but they stopped listening at \"hammer.\"",
        "id": "27361b358071f47e795029454284511026c968c9",
        "imageName": "box of free-range goblins",
        "layout": "normal",
        "manaCost": "{4}{R}{R}",
        "multiverseid": 439466,
        "name": "Box of Free-Range Goblins",
        "nameRus": "Коробка для диких гоблинов",
        "number": "77",
        "rarity": "Common",
        "text": "Roll a six-sided die. Create a number of 1/1 red Goblin creature tokens equal to the result.",
        "textRus": "Бросьте шестигранный кубик. Создайте фишки существе 1/1 красный Гоблин в колчиесвте равном выпавшему результату.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "YW Tang",
        "cmc": 4,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "id": "1fcc997b1920269b34ce45067778a20f8eacbe5b",
        "imageName": "bumbling pangolin",
        "layout": "normal",
        "manaCost": "{3}{R}",
        "multiverseid": 439467,
        "name": "Bumbling Pangolin",
        "nameRus": "Неуклюжий ящер",
        "number": "78",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Beast"
        ],
        "text": "When this creature enters the battlefield, you may destroy target artifact.",
        "textRus": "Когда это сущесвто выходит на поле боя, вы можете уничтожить целевой артифакт.",
        "toughness": "2",
        "type": "Host Creature — Beast",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Brynn Metheney",
        "cmc": 2,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "id": "7d7bd0ee44bcd4e1d0f74f6441a2435d03a729ca",
        "imageName": "common iguana",
        "layout": "normal",
        "manaCost": "{1}{R}",
        "multiverseid": 439468,
        "name": "Common Iguana",
        "nameRus": "Обычная игуана",
        "number": "79",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Lizard"
        ],
        "text": "When this creature enters the battlefield, you may discard a card. If you do, draw a card.",
        "textRus": "Когда это сущесвто выходит на поле боя, вы можете сбросить карту. Если вы это делаете, возьмите карту.",
        "toughness": "3",
        "type": "Host Creature — Lizard",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Jesper Ejsing",
        "cmc": 5,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "id": "41aa53a3de6095329e7765d218c48f651d5f3439",
        "imageName": "the countdown is at one",
        "layout": "normal",
        "manaCost": "{3}{R}{R}",
        "multiverseid": 439469,
        "name": "The Countdown Is at One",
        "nameRus": "Обратный отсчет от одного",
        "number": "80",
        "rarity": "Rare",
        "text": "Players play a Magic subgame, starting at 1 life and using their libraries as their decks. For the rest of the main game, if a source would deal damage to a player who didn't win the subgame, it deals double that damage to that player instead.",
        "textRus": "Игроки играют в подпартию в Magic, начиная с 1 жизни и используя свои библиотеки как колоды. До конца игры, если источник будет наносит урон игроку проигравшему в подигру, вместо этого он нансоит удвоеный урон.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Kari Christensen",
        "cmc": 5,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "id": "ac8495b2c391d8cd879846baad5c070ebbc26691",
        "imageName": "feisty stegosaurus",
        "layout": "normal",
        "manaCost": "{4}{R}",
        "multiverseid": 439470,
        "name": "Feisty Stegosaurus",
        "nameRus": "Энергичный стегозавр",
        "number": "81",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Dinosaur"
        ],
        "text": "When this creature enters the battlefield, roll a six-sided die. This creature deals damage equal to the result to target creature an opponent controls.",
        "textRus": "Когда это существо выходит на поле боя, бросьте шестигранный кубик. Это существо наносит повреждения равные выпавшему результату целевому существу под контролем оппонента.",
        "toughness": "1",
        "type": "Host Creature — Dinosaur",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Hector Ortiz",
        "cmc": 5,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "id": "3952338bd8845824766ecbf50442aeed126391b1",
        "imageName": "garbage elemental",
        "layout": "normal",
        "manaCost": "{4}{R}",
        "multiverseid": 439471,
        "name": "Garbage Elemental",
        "nameRus": "Мусорный элементаль",
        "number": "82",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Elemental"
        ],
        "text": "Frenzy 2 (Whenever this creature attacks and isn't blocked, it gets +2/+0 until end of turn.)\nGarbage Elemental can't be blocked by wordy creatures. (A creature is wordy if it has four or more lines of rules text.)",
        "textRus": "Неистовство 2 (Когда это сущесвто атакует и незаблокированно, онополучает +2/+0 до конца хода.)\nМусорный элементаль не может быть заблокирован многословными существами (Сущесвто многословное если в его тексте 4 или более строк.)",
        "toughness": "4",
        "type": "Creature — Elemental",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Jesper Ejsing",
        "cmc": 3,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "An accessory in every sense of the word.",
        "id": "05600229b1bf187aa724ab452451e5bf820c539a",
        "imageName": "goblin haberdasher",
        "layout": "normal",
        "manaCost": "{2}{R}",
        "multiverseid": 439472,
        "name": "Goblin Haberdasher",
        "nameRus": "Гоблин галантерейщик",
        "number": "83",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Goblin",
            "Hatificer"
        ],
        "text": "Menace (This creature can't be blocked except by two or more creatures.)\nOther creatures you control wearing hats in their art have menace.",
        "textRus": "Угроза\n Другие сущесвта под вашим контролем носящие шляпы на их рисунках имеют угрозу.",
        "toughness": "2",
        "type": "Creature — Goblin Hatificer",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Kev Walker",
        "cmc": 0,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "id": "fd984bfee4b30ce7398bedb912e438b329f7121a",
        "imageName": "half-orc, half-",
        "layout": "normal",
        "multiverseid": 439473,
        "name": "Half-Orc, Half-",
        "nameRus": "Полу-орк, полу-",
        "number": "84",
        "power": "+3",
        "rarity": "Uncommon",
        "subtypes": [
            "Orc",
            "Warrior"
        ],
        "text": "Trample\nAt the beginning of each end step, if an opponent was dealt damage this turn,\nAugment {1}{R}{R} ({1}{R}{R}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "Пробивной удар\nВ начале вашего заершающего шага, если опонент получал повреждения в этот ход,\nПриростить {1}{R}{R} ({1}{R}{R},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+1",
        "type": "Creature — Orc Warrior",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Dave Allsop",
        "cmc": 4,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "\"Need a hammer? Gotta get your fix? I know a guy.\"",
        "id": "60885568c559b65d9c7df40d879c335956e03457",
        "imageName": "hammer helper",
        "layout": "normal",
        "manaCost": "{3}{R}",
        "multiverseid": 439474,
        "name": "Hammer Helper",
        "nameRus": "Подай-приниси",
        "number": "85",
        "rarity": "Common",
        "text": "Gain control of target creature until end of turn. Untap that creature and roll a six-sided die. Until end of turn, it gains haste and gets +X/+0, where X is the result.",
        "textRus": "Получите контроль на целевым сущесвтом до конца хода. Разверните это сущесвто и бросьте шестигранный куьик. До конца хода, это существо получает +Х/+0, где Х это результат броска.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Wayne Reynolds",
        "cmc": 4,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "id": "a2da896ae8390a5bc465f744b9d19aaff0db7581",
        "imageName": "hammer jammer",
        "layout": "normal",
        "manaCost": "{3}{R}",
        "multiverseid": 439475,
        "name": "Hammer Jammer",
        "nameRus": "Глушитель молотков",
        "number": "86",
        "power": "0",
        "rarity": "Uncommon",
        "subtypes": [
            "Goblin",
            "Warrior"
        ],
        "text": "As Hammer Jammer enters the battlefield, roll a six-sided die. Hammer Jammer enters the battlefield with a number of +1/+1 counters on it equal to the result.\nWhenever you roll a die, remove all +1/+1 counters from Hammer Jammer, then put a number of +1/+1 counters on it equal to the result.",
        "textRus": "Когда Глушитель молотков выходит на поле боя, бросьте шестигранный кубик. Глушитель молотков выходит на поле боя с жетонами +1/+1 в количесвте равном результату броска.\nКогда вы бросаете кость, удалите все жетоны +1/+1 с Глушителя молотков, затем положите на него жетоны +1/+1 в количесвте равном результату броска.",
        "toughness": "0",
        "type": "Creature — Goblin Warrior",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Dave Allsop",
        "cmc": 5,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "It's less \"music\" and more \"straightforward hearing damage.\"",
        "id": "e917b5ebc8947c186289a4bdd1a02ea7d3208cc2",
        "imageName": "hammerfest boomtacular",
        "layout": "normal",
        "manaCost": "{3}{R}{R}",
        "multiverseid": 439476,
        "name": "Hammerfest Boomtacular",
        "nameRus": "Взырывоставление на Молотфесте",
        "number": "87",
        "rarity": "Uncommon",
        "text": "Whenever you cast a spell with a Goblin Explosioneers watermark, Hammerfest Boomtacular deals 2 damage to target creature or player.",
        "textRus": "Когда вы разыгрываете заклинание с водным знаком Гоблионов Взрывоонеров, Взрывоставление на Молтфесте наносит 2 повреждения целевому игроку или существу.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Seb McKinnon",
        "cmc": 7,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "It's so infinite that its flavor text says, \"It's so infinite that its flavor text says, \"It's so infinite that its flavor text says, \"It's so infinite that its flavor text says, \"It's so infinite that its flavor text says, \"It's so infinite that its flavor text says, \"It's so infinite that its flavor text says, \"It's so infinite that its flavor text says, \"It's so infinite that its flavor text says,",
        "id": "9801926f171cb4ec2faa8b3110fea890e5e94e9d",
        "imageName": "infinity elemental",
        "layout": "normal",
        "manaCost": "{4}{R}{R}{R}",
        "multiverseid": 439477,
        "name": "Infinity Elemental",
        "nameRus": "Элементаль бесконечности",
        "number": "88",
        "power": "∞",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Elemental"
        ],
        "text": "(This creature has INFINITE POWER.)",
        "textRus": "(Это сущесвто имееет БЕСКОНЕЧНУЮ СИЛУ)",
        "toughness": "5",
        "type": "Creature — Elemental",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Jesper Ejsing",
        "cmc": 6,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "\"Give me . . . some skin.\"",
        "id": "3a639bf0924d93316a89a65ac58e1b25b594a9aa",
        "imageName": "it that gets left hanging",
        "layout": "normal",
        "manaCost": "{5}{R}",
        "multiverseid": 439478,
        "name": "It That Gets Left Hanging",
        "nameRus": "",
        "number": "89",
        "power": "5",
        "rarity": "Common",
        "subtypes": [
            "Elemental",
            "Horror"
        ],
        "text": "When It That Gets Left Hanging enters the battlefield, ask a person outside the game to high-five you. If he or she won't, It That Gets Left Hanging gains haste until end of turn.",
        "textRus": "Когда It That Gets Left Hanging выходит на поле боя, попросить человека вне игры дать вам пять. Если он не даст, It That Gets Left Hanging получает ускорение доя конца хода.",
        "toughness": "4",
        "type": "Creature — Elemental Horror",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Zoltan Boros",
        "cmc": 2,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "\"It's time to put the 'die' in 'diameter!'\"\n—Flaky the Irrational",
        "id": "d35641cd891f21e1454c8ff822459b29417f13d9",
        "imageName": "just desserts",
        "layout": "normal",
        "manaCost": "{1}{R}",
        "multiverseid": 439479,
        "name": "Just Desserts",
        "nameRus": "На десерт",
        "number": "90",
        "rarity": "Common",
        "text": "Just Desserts deals π damage to target creature. (π is the ratio of a circle's circumference to its diameter. (It's a smidgen more than 3.))",
        "textRus": "На десерт наносит π повреждений целевому сущесвту.",
        "type": "Instant",
        "types": [
            "Instant"
        ]
    },
    {
        "artist": "McLean Kendree",
        "cmc": 3,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "\"You're about to be struck by a brilliant idea!\"",
        "id": "20db95dc2e7964f1f3c539974fde1e849dfa28ad",
        "imageName": "painiac",
        "layout": "normal",
        "manaCost": "{2}{R}",
        "multiverseid": 439480,
        "name": "Painiac",
        "nameRus": "Страданиманьяк",
        "number": "91",
        "power": "0",
        "rarity": "Common",
        "subtypes": [
            "Brainiac"
        ],
        "text": "At the beginning of your upkeep, roll a six-sided die. Painiac gets +X/+0 until end of turn, where X is the result.",
        "textRus": "В начале вашего шага поддержки, бросьте шестигранный кубик. Страданиманьяк получает +Х/+0 до конца хода, где Х равен результату броска.",
        "toughness": "3",
        "type": "Creature — Brainiac",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Mike Burns",
        "cmc": 5,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "No rest. No mercy. No reservations.",
        "id": "d98cfe2a7799788aba3e73f3610438acfd09910a",
        "imageName": "party crasher",
        "layout": "normal",
        "manaCost": "{4}{R}",
        "multiverseid": 439481,
        "name": "Party Crasher",
        "nameRus": "Взломщик вечеринок",
        "number": "92",
        "power": "3",
        "rarity": "Uncommon",
        "subtypes": [
            "Goblin",
            "Berserker"
        ],
        "text": "Haste\nYou can attack with Party Crasher once each combat during each opponent's turn.",
        "textRus": "Ускорение\nВы можете атаковать Взломщиком вечеринок каждую атаку во время хода вашего опопонента.",
        "toughness": "3",
        "type": "Creature — Goblin Berserker",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Warren Mahy",
        "cmc": 4,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "\"Don't quit now, we're almost done.\nThen we'll build another one!\"",
        "id": "b2a2dab489d61162ba4afecb13b92355beb175ed",
        "imageName": "steamflogger boss",
        "layout": "normal",
        "manaCost": "{3}{R}",
        "multiverseid": 439482,
        "name": "Steamflogger Boss",
        "nameRus": "Бос парастегатель",
        "number": "93",
        "power": "3",
        "rarity": "Rare",
        "subtypes": [
            "Goblin",
            "Rigger"
        ],
        "text": "Other Riggers you control get +1/+0 and have haste.\nIf a Rigger you control would assemble a Contraption, it assembles two Contraptions instead.",
        "textRus": "Другие Rigger под вашим контролем получают +1/+0 и имеют ускорение.\nЕсли Rigger под вашем контролем будет собирать Штуковину, он собирает две Штуковины вместо этого.",
        "toughness": "3",
        "type": "Creature — Goblin Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Warren Mahy",
        "cmc": 5,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "The perks aren't great.",
        "id": "a2fd464a440b66ec3f2c740b2fda0c5b0c0844fe",
        "imageName": "steamflogger of the month",
        "layout": "normal",
        "manaCost": "{3}{R}{R}",
        "multiverseid": 439483,
        "name": "Steamflogger of the Month",
        "nameRus": "Парастегатель месяца",
        "number": "94",
        "power": "3",
        "rarity": "Rare",
        "subtypes": [
            "Goblin",
            "Rigger"
        ],
        "text": "When Steamflogger of the Month enters the battlefield, it assembles a Contraption for each Contraption you control. (To assemble a Contraption, put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда Парастегатль месяца входит на поле боя, он собирает Штуковину за каждую Штуковину под вашим контролем. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "3",
        "type": "Creature — Goblin Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Jeff Miracola",
        "cmc": 2,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "When you're dumber than a hammer, every problem looks like one of those things you hit with a hammer.",
        "id": "d763f1b58d098f1065c7d54437f66c34f2bb7b9f",
        "imageName": "steamflogger temp",
        "layout": "normal",
        "manaCost": "{1}{R}",
        "multiverseid": 439484,
        "name": "Steamflogger Temp",
        "nameRus": "Временный паростягяталь",
        "number": "95",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Goblin",
            "Rigger"
        ],
        "text": "{6}, {T}: Steamflogger Temp assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "{6}, {T}: Временный паростягатель собирает Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "1",
        "type": "Creature — Goblin Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Emrah Elmasli",
        "cmc": 6,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "Goblins only have two speeds: hard loaf and full-on hammer freak-out.",
        "id": "a17be656db4034960dade833aad17b3b5b6b2ae8",
        "imageName": "steamfloggery",
        "layout": "normal",
        "manaCost": "{4}{R}{R}",
        "multiverseid": 439485,
        "name": "Steamfloggery",
        "nameRus": "Паростягательство",
        "number": "96",
        "rarity": "Uncommon",
        "text": "Roll a six-sided die. Assemble a number of Contraptions equal to the result. (To assemble a Contraption, put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Бросьте шестигранный кубик. Соберите Штуковины в количестве равном выпавшему рузультату. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Even Amundsen",
        "cmc": 3,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "\"Comin' through!\"",
        "id": "968da4925d9d1991de548c2a2bcf273668a728d9",
        "imageName": "super-duper death ray",
        "layout": "normal",
        "manaCost": "{2}{R}",
        "multiverseid": 439486,
        "name": "Super-Duper Death Ray",
        "nameRus": "Супер-дупер смертельный луч",
        "number": "97",
        "rarity": "Uncommon",
        "text": "Trample (This spell can deal excess damage to its target's controller.)\nSuper-Duper Death Ray deals 4 damage to target creature.",
        "textRus": "Пробивающий удар\nСупер-дупер смертельный луч наносит 4 повреждения целевому существу.",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Warren Mahy",
        "cmc": 2,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "\"Not again!\"",
        "id": "6d5864ab6b2d721cb752b17bf5748af51015f0bb",
        "imageName": "target minotaur",
        "layout": "normal",
        "manaCost": "{1}{R}",
        "multiverseid": 439487,
        "name": "Target Minotaur",
        "nameRus": "Целевой минотавр",
        "number": "98",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Minotaur",
            "Warrior"
        ],
        "text": "Prowess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)",
        "textRus": "Мастерство (Когда вы разыгрываете заклинание не являющееся сущесвтом, это сущесвто получает +1/+1 до конца хода.)",
        "toughness": "1",
        "type": "Creature — Minotaur Warrior",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Mike Burns",
        "cmc": 5,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "It's true that two heads are better than one, but after that you run into diminishing returns.",
        "id": "8faa02991135b723e9f08e93b9f391067be65320",
        "imageName": "three-headed goblin",
        "layout": "normal",
        "manaCost": "{3}{R}{R}",
        "multiverseid": 439488,
        "name": "Three-Headed Goblin",
        "nameRus": "Трехголовый гоблин",
        "number": "99",
        "power": "3",
        "rarity": "Rare",
        "subtypes": [
            "Goblin",
            "Mutant"
        ],
        "text": "Triple strike (This creature deals first-strike, regular, and last-strike combat damage.)",
        "textRus": "Тройной удар (Это сущесвто наносит урон первым удар, обычный урон и урон поелсдний ударом.)",
        "toughness": "3",
        "type": "Creature — Goblin Mutant",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Carl Frank",
        "cmc": 4,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "Ig and Burf discovered the technique by accident when Burf reached for his hammer and missed.",
        "id": "98c8bee0c8ceb1a73c1fc7f2d5b15d40eb094779",
        "imageName": "work a double",
        "layout": "normal",
        "manaCost": "{2}{R}{R}",
        "multiverseid": 439489,
        "name": "Work a Double",
        "nameRus": "Работа в паре",
        "number": "100",
        "rarity": "Common",
        "text": "Assemble two Contraptions. (Put the top card of your Contraption deck face up onto one of your sprockets. Then repeat this process.)",
        "textRus": "Соберите две Штуковиныю (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Jesper Ejsing",
        "cmc": 1,
        "colorIdentity": [
            "R"
        ],
        "colors": [
            "Red"
        ],
        "flavor": "Goblin innovator, goblin corpse. Tomayto, tomahto.",
        "id": "8884473a508d2c6e8dc7e8186be4b21b012b804f",
        "imageName": "wrench-rigger",
        "layout": "normal",
        "manaCost": "{R}",
        "multiverseid": 439490,
        "name": "Wrench-Rigger",
        "nameRus": "Гаечный такелажник",
        "number": "101",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Goblin",
            "Rigger"
        ],
        "text": "When Wrench-Rigger enters the battlefield, it assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда Гаечный такелажник выходит на поле боя, он собирает Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "1",
        "type": "Creature — Goblin Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Milivoj Ćeran",
        "cmc": 1,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "8d2722825dfa475154e0c87ba72c47528c4cf485",
        "imageName": "as luck would have it",
        "layout": "normal",
        "manaCost": "{G}",
        "multiverseid": 439491,
        "name": "As Luck Would Have It",
        "nameRus": "Как повезет",
        "number": "102",
        "rarity": "Rare",
        "text": "Hexproof\nWhenever you roll a die, put a number of luck counters on As Luck Would Have It equal to the result. Then if there are 100 or more luck counters on As Luck Would Have It, you win the game. (Count both rolls if you reroll a die.)",
        "textRus": "Порчеустойчивость\nКогда вы бросаете кубик, положите на Как повезет столько же жетонов удачи сколько выпало в результате. Затем если на Как повезет есть 100 или более жетонов удачи, вы выигрываете игру. (Если выперебрасываете кубик, учитывайте оба браска)",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ]
    },
    {
        "artist": "Mike Burns",
        "cmc": 6,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "\"A stunning example of the breed! Flawless plating, ruthlessly efficient death stroke, and an excellent drool shimmer.\"",
        "id": "ded5f5388a826ec5b9ab9619334f6d987faa1f73",
        "imageName": "beast in show",
        "layout": "normal",
        "manaCost": "{4}{G}{G}",
        "multiverseid": 439492,
        "name": "Beast in Show",
        "nameRus": "Зверь в шоу",
        "number": "103",
        "power": "6",
        "rarity": "Common",
        "subtypes": [
            "Beast"
        ],
        "text": "Trample",
        "textRus": "Пробивной удар",
        "toughness": "4",
        "type": "Creature — Beast",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Kari Christensen",
        "cmc": 4,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "One fateful night, bright-eyed and bushy-tailed, they rose.",
        "id": "c2249f13507fd8e4ac807054a94a6d960b113b25",
        "imageName": "chittering doom",
        "layout": "normal",
        "manaCost": "{3}{G}",
        "multiverseid": 439493,
        "name": "Chittering Doom",
        "nameRus": "Читерский рок",
        "number": "104",
        "rarity": "Uncommon",
        "text": "Whenever you roll a 4 or higher on a die, create a 1/1 green Squirrel creature token.",
        "textRus": "Когда вы выкидываете на кубике 4 или более, создайте вишку зеленого существа Белка 1/1.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ]
    },
    {
        "artist": "Kev Walker",
        "cmc": 2,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "At Crossbreed Labs, \"heads or tails\" has nothing to do with coins.",
        "id": "111f0194b8f3bceb4f5aedad4fdb23bc82da216d",
        "imageName": "clever combo",
        "layout": "normal",
        "manaCost": "{1}{G}",
        "multiverseid": 439494,
        "name": "Clever Combo",
        "nameRus": "Умное комбо",
        "number": "105",
        "rarity": "Uncommon",
        "text": "Search your library for a host card or a card with augment, reveal it, put it into your hand, then shuffle your library.",
        "textRus": "Найдите в вашей библиотеке карту Хозяина или карты с Приращиванием, покажите ее и положите в свою руку, затем перемешайте колоду.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Simon Dominic",
        "cmc": 3,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "Others try to be the best in their class. She strives to be the best in her phylum.",
        "id": "62c0d4b7dd49a96f0bd0392e6e437bf4945f0f25",
        "imageName": "druid of the sacred beaker",
        "layout": "normal",
        "manaCost": "{2}{G}",
        "multiverseid": 439495,
        "name": "Druid of the Sacred Beaker",
        "nameRus": "Друид священной минзурки",
        "number": "106",
        "power": "2",
        "rarity": "Uncommon",
        "subtypes": [
            "Deer",
            "Bird",
            "Ape",
            "Druid"
        ],
        "text": "{T}: Add {G} to your mana pool for each Crossbreed Labs watermark among permanents you control.",
        "textRus": "{T}: Добавьте {G} в вшае хранилище маны за каждый водный знак Скрещивающих лабораторий среди перманентов под вашим контролем.",
        "toughness": "2",
        "type": "Creature — Deer Bird Ape Druid",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Andrea Radeck",
        "cmc": 3,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "c1397025383d403910a2e699990d993c6640e888",
        "imageName": "eager beaver",
        "layout": "normal",
        "manaCost": "{2}{G}",
        "multiverseid": 439496,
        "name": "Eager Beaver",
        "nameRus": "Нетерпеливый бобер",
        "number": "107",
        "power": "3",
        "rarity": "Common",
        "subtypes": [
            "Beaver"
        ],
        "text": "When this creature enters the battlefield, you may untap target permanent.",
        "textRus": "Когда это сущесвто выходит на поле боя, вы можете развернуть целевой перманент.",
        "toughness": "2",
        "type": "Host Creature — Beaver",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Milivoj Ćeran",
        "cmc": 6,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "3fda6deadbaa42c4aea668a106e8d5b3e2bb5558",
        "imageName": "earl of squirrel",
        "layout": "normal",
        "manaCost": "{4}{G}{G}",
        "multiverseid": 439497,
        "name": "Earl of Squirrel",
        "nameRus": "Граф белок",
        "number": "108",
        "power": "4",
        "rarity": "Rare",
        "subtypes": [
            "Squirrel",
            "Advisor"
        ],
        "text": "Squirrellink (Damage dealt by this creature also causes you to create that many 1/1 green Squirrel creature tokens.)\nCreature tokens you control are Squirrels in addition to their other creature types.\nOther Squirrels you control get +1/+1.",
        "textRus": "Цепь белок (Повреждения наносимые этим существом так же создают столько же фишек сущесвт зеленых Белок 1/1)\nВсе существа под вашим контролем являются Белками в дополнение к свои типам.\nДругие белки под вашим контролем получают +1/+1.",
        "toughness": "4",
        "type": "Creature — Squirrel Advisor",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "John Thacker",
        "cmc": 4,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "Picking hammers is dangerous, but it's still safer than harvesting saw bushes.",
        "id": "d1eb44020776e482eeddaf48f1f363dcffff18b3",
        "imageName": "first pick",
        "layout": "normal",
        "manaCost": "{3}{G}",
        "multiverseid": 439498,
        "name": "First Pick",
        "nameRus": "Бери эту карту первой",
        "number": "109",
        "rarity": "Uncommon",
        "text": "Destroy target artifact or enchantment. Assemble a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Уничтожьте целевой артифакт (artifact) или чары (enchantment). Соберите Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Instant",
        "types": [
            "Instant"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Warren Mahy",
        "cmc": 2,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "People came from miles away just to see the head of the hammer.",
        "id": "b673ec0115898a751dae633eba2457360c813a96",
        "imageName": "ground pounder",
        "layout": "normal",
        "manaCost": "{1}{G}",
        "multiverseid": 439499,
        "name": "Ground Pounder",
        "nameRus": "Земледробитель",
        "number": "110",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Goblin",
            "Warrior"
        ],
        "text": "{3}{G}: Roll a six-sided die. Ground Pounder gets +X/+X until end of turn, where X is the result.\nWhenever you roll a 5 or higher on a die, Ground Pounder gains trample until end of turn.",
        "textRus": "{3}{G}: Бросьте шестигранный кубик. Земледробитель получает +Х/+Х до конца хода, где Х это результат броска.\nКогда вы выбрасываете на кубике 5 или больше, Земелдробитель получает пробивной удар до конца хода.",
        "toughness": "2",
        "type": "Creature — Goblin Warrior",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Andrea Radeck",
        "cmc": 0,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "65d8afa020949aaf54d6e08634e3ce07d2ee75fe",
        "imageName": "half-squirrel, half-",
        "layout": "normal",
        "multiverseid": 439500,
        "name": "Half-Squirrel, Half-",
        "nameRus": "Полу-белск, полу-",
        "number": "111",
        "power": "-1",
        "rarity": "Uncommon",
        "subtypes": [
            "Squirrel"
        ],
        "text": "Whenever a nontoken creature enters the battlefield,\nAugment {G} ({G}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "Когда сущесвто не являющееся фишкой выходит на поле боя,\nПриростить {G} ({G},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "-0",
        "type": "Creature — Squirrel",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Mathias Kollros",
        "cmc": 2,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "Less housebroken than housebreaking.",
        "id": "df7f7342fc9e52e06b18e0ada203f4ea11711d88",
        "imageName": "hydradoodle",
        "layout": "normal",
        "manaCost": "{X}{X}{G}{G}",
        "multiverseid": 439501,
        "name": "Hydradoodle",
        "nameRus": "Гидраболван",
        "number": "112",
        "power": "0",
        "rarity": "Rare",
        "subtypes": [
            "Hydra",
            "Hound"
        ],
        "text": "As Hydradoodle enters the battlefield, roll X six-sided dice. Hydradoodle enters the battlefield with a number of +1/+1 counters on it equal to the total of those results.\nReach, trample",
        "textRus": "Когда Гидроболван выходит на поле боя, бросьте Х шестигранных кубиков. Гидроболван выходит на поле боя с жетонами +1/+1 в количесвте равном сумме полученных результатов.\nЗахват, Пробивной удар",
        "toughness": "0",
        "type": "Creature — Hydra Hound",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Milivoj Ćeran",
        "cmc": 2,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "\"Hallowed be this assemblage of various stuff!\"",
        "id": "be2c7cb7b4a9491fc334969d64510d37ac66992c",
        "imageName": "ineffable blessing",
        "layout": "normal",
        "manaCost": "{1}{G}",
        "multiverseid": 439502,
        "name": "Ineffable Blessing",
        "nameRus": "Невыразимое благословение",
        "number": "113",
        "rarity": "Rare",
        "text": "As Ineffable Blessing enters the battlefield, choose Flavorful or Bland.\n• Flavorful — Whenever a creature with flavor text enters the battlefield under your control, draw a card.\n• Bland — Whenever a creature without flavor text enters the battlefield under your control, draw a card.",
        "textRus": "Когда Невыразимое благословение выходит на поле боя, выберите Художесвтенный или Безвкусный\n• Художесвтенный — Когда сущесвто с художественным текстом выходит а поле боя под вашим контролем, возьмите карту.\n• Безвкусный — Когда сущесвто без художественного текста выходит а поле боя под вашим контролем, возьмите карту.",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ]
    },
    {
        "artist": "Wayne Reynolds",
        "cmc": 4,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "chitty-chitty-BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG BANG!",
        "id": "925f4b2f74e8b35fd407682ec43256e5fe3ddef7",
        "imageName": "joyride rigger",
        "layout": "normal",
        "manaCost": "{3}{G}",
        "multiverseid": 439503,
        "name": "Joyride Rigger",
        "nameRus": "Такелажник покатушник",
        "number": "114",
        "power": "3",
        "rarity": "Common",
        "subtypes": [
            "Goblin",
            "Rigger"
        ],
        "text": "When Joyride Rigger enters the battlefield, it assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда Такелажник покатушник выходит на поле боя, он собирает Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "3",
        "type": "Creature — Goblin Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Andrea Radeck",
        "cmc": 0,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "ceab00528bfec23416268c5956456bbe78527490",
        "imageName": "monkey-",
        "layout": "normal",
        "multiverseid": 439504,
        "name": "Monkey-",
        "nameRus": "Обезьяна-",
        "number": "115",
        "power": "+2",
        "rarity": "Uncommon",
        "subtypes": [
            "Monkey"
        ],
        "text": "Whenever a nontoken creature you control dies,\nAugment {2}{G} ({2}{G}, Reveal this card from your hand: Combine it with target  host. Augment only as a sorcery.)",
        "textRus": "Когда не являющееся фишкой существо под вашим контролем умирает,\nПриростить {2}{G} ({2}{G},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+2",
        "type": "Creature — Monkey",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Andrea Radeck",
        "cmc": 5,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "6e898ac5ae331719c4a20413ab07f79168c748ba",
        "imageName": "mother kangaroo",
        "layout": "normal",
        "manaCost": "{4}{G}",
        "multiverseid": 439505,
        "name": "Mother Kangaroo",
        "nameRus": "Мама кенугур",
        "number": "116",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Kangaroo"
        ],
        "text": "When this creature enters the battlefield, roll a six-sided die. Put a number of +1/+1 counters on this creature equal to the result.",
        "textRus": "Когда это сущесвто выходит на поле боя, бросьте шестигранный кубик. положите на это сущесвто жетоны +1/+1 в количесвте равном результату броска.",
        "toughness": "1",
        "type": "Host Creature — Kangaroo",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "YW Tang",
        "cmc": 0,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "9b4d9800a67fdd0005c2421ca0d2fb02766c3cdc",
        "imageName": "multi-headed",
        "layout": "normal",
        "multiverseid": 439506,
        "name": "Multi-Headed",
        "nameRus": "Мнгоголовый",
        "number": "117",
        "power": "+4",
        "rarity": "Common",
        "subtypes": [
            "Hydra"
        ],
        "text": "At the beginning of each end step, if you rolled a die this turn,\nAugment {4}{G} ({4}{G}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "В начале каждого шага завершения, если вы бросали куибик в этот ход,\nПриростить {4}{G} ({4}{G},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+4",
        "type": "Creature — Hydra",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Ben Wootten",
        "cmc": 2,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "It smarts more than the average bear.",
        "id": "ca48268e3dd387f0ebfac5fbc2438bb3dba97913",
        "imageName": "really epic punch",
        "layout": "normal",
        "manaCost": "{1}{G}",
        "multiverseid": 439507,
        "name": "Really Epic Punch",
        "nameRus": "Реально эпичный удар",
        "number": "118",
        "rarity": "Common",
        "text": "Target creature you control gets +2/+2 if it's a host or has augment. Then it fights target creature you don't control.",
        "textRus": "Целевое сущесвто под вашим контролем получает +2/+2 если оно Хозяин или имеет прирощение. Затем оно сражатеся с целевым сущесвтом не под вашим контролем.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Chris Seaman",
        "cmc": 2,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "\"Be sure to get the tree in the picture.\"",
        "id": "9a7d5aef61b09db4b26034df881549fbab1eb7f5",
        "imageName": "selfie preservation",
        "layout": "normal",
        "manaCost": "{1}{G}",
        "multiverseid": 439508,
        "name": "Selfie Preservation",
        "nameRus": "Селфи сохранения",
        "number": "119",
        "rarity": "Common",
        "text": "Search your library for a basic land card and reveal it. If there's a tree in its art, put it onto the battlefield tapped. Otherwise, put it into your hand. Then shuffle your library.",
        "textRus": "Найдите в вашей библиотеке карту базовой земли и покажите ее. Если на ее рисунке есть дерево, положите ее в игру повернутой. Иначе, пложите ее в свою руку. Затем перемешайте колоду.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ]
    },
    {
        "artist": "Kari Christensen",
        "cmc": 0,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "93fe6f1170b7de30ecfd733e51689737d709596d",
        "imageName": "serpentine",
        "layout": "normal",
        "multiverseid": 439509,
        "name": "Serpentine",
        "nameRus": "Змеевидный",
        "number": "120",
        "power": "+3",
        "rarity": "Rare",
        "subtypes": [
            "Wurm"
        ],
        "text": "Whenever a land enters the battlefield under your control,\nAugment {2}{G} ({2}{G}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "Когда земля выходит на поле боя под ваш контроль,\nПриростить {2}{G} ({2}{G},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+3",
        "type": "Creature — Wurm",
        "types": [
            "Creature"
        ]
    },
    {
        "artist": "Hector Ortiz",
        "cmc": 3,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "4599f09ee2a3ae4edfda32c45fe1a2013a3a0450",
        "imageName": "shellephant",
        "layout": "normal",
        "manaCost": "{1}{G}{G}",
        "multiverseid": 439510,
        "name": "Shellephant",
        "nameRus": "Панцерный слон",
        "number": "121",
        "power": "?",
        "rarity": "Uncommon",
        "subtypes": [
            "Turtle",
            "and/or",
            "Elephant"
        ],
        "text": "{0}: Choose one. You may activate this ability while Shellephant is in any zone.\n• Shellephant has base power and toughness 1/4.\n• Shellephant has base power and toughness 3/3.",
        "textRus": "{0}: Выберите одно. Вы можеет активировать эту способность пока Панцерный слон находится в любой зоне.\n• Панцерный слон имеет силу и вынослиовать 1/4\n• Панцерный слон имеет силу и вынослиовать 3/3",
        "toughness": "?",
        "type": "Creature — Turtle and/or Elephant",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Ben Wootten",
        "cmc": 7,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "bd13a4a966f64f8f1ad3ef8c153ac7af3aba2121",
        "imageName": "slaying mantis",
        "layout": "normal",
        "manaCost": "{5}{G}{G}",
        "multiverseid": 439511,
        "name": "Slaying Mantis",
        "nameRus": "Убойный богомол",
        "number": "122",
        "power": "6",
        "rarity": "Uncommon",
        "subtypes": [
            "Insect",
            "Wrestler"
        ],
        "text": "Just a second (As long as this spell is on the stack, players can't move cards on the battlefield.)\nSlaying Mantis enters the battlefield by being thrown from a distance of at least three feet.\nWhen Slaying Mantis enters the battlefield, it fights each creature an opponent controls that it touched as it entered.",
        "textRus": "Секундочку (Пока это заклинание находится в цепочку, игроки не могут двигать карт на поле боя.)\nУбойный богомол выходит на поле боя буду брошенным с растояния не меньше чем 3 фута (91,44 см). Когда Убойный богомол выходит на поле боя, он сражается с каждым сущесвтом под контролем оппонента которого коснулся выходя на поле боя.",
        "toughness": "6",
        "type": "Creature — Insect Wrestler",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Bram Sels",
        "cmc": 1,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "\"You see that sheen on the fur? The glint in their eyes? Top quality. These are the real deal.\"",
        "id": "f7e59ef7f48b6da2ab66339ccb0267cf927d1f35",
        "imageName": "squirrel dealer",
        "layout": "normal",
        "manaCost": "{G}",
        "multiverseid": 439512,
        "name": "Squirrel Dealer",
        "nameRus": "Белкоторговец",
        "number": "123",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Raccoon",
            "Lizard",
            "Bird"
        ],
        "text": "When Squirrel Dealer enters the battlefield, ask a person outside the game \"Do you like Squirrels?\" If he or she does, create a 1/1 green Squirrel creature token.",
        "textRus": "Когда белкоторговец выходит на поле боя, спросите у человека вне игры \"Ты любишь белок?\". Если он или она любит, создайте фишку зеленого существа Белка 1/1.",
        "toughness": "1",
        "type": "Creature — Raccoon Lizard Bird",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Warren Mahy",
        "cmc": 3,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "flavor": "It's more like a hard day of lunch with a work break between shifts.",
        "id": "878f739439ad2993c6ed520d99e41d9a8f11d6b7",
        "imageName": "steamflogger service rep",
        "layout": "normal",
        "manaCost": "{2}{G}",
        "multiverseid": 439513,
        "name": "Steamflogger Service Rep",
        "nameRus": "Срвистный мастер паростягатель",
        "number": "124",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Goblin",
            "Rigger"
        ],
        "text": "Whenever another Goblin enters the battlefield under your control, you may pay {1}. If you do, Steamflogger Service Rep assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда другой Гоблин выходит на поле боя под вашим контролем, вы можете заплатить {1}. Если вы это деалете, Сервисный мастер паростягатель собирает Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "toughness": "1",
        "type": "Creature — Goblin Rigger",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Brynn Metheney",
        "cmc": 2,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "e6e906b6418b065454ae650b68673c3dd80bb0bb",
        "imageName": "wild crocodile",
        "layout": "normal",
        "manaCost": "{1}{G}",
        "multiverseid": 439514,
        "name": "Wild Crocodile",
        "nameRus": "Дикий крокодил",
        "number": "125",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Crocodile"
        ],
        "text": "When this creature enters the battlefield, search your library for a basic land card, reveal it, put it into your hand, then shuffle your library.",
        "textRus": "Когда это сущесвто выходит на поле боя, найдите в вашей колоде карту базовой земли, покажите ее и положите в свою руку. Затем перемешайте колоду.",
        "toughness": "1",
        "type": "Host Creature — Crocodile",
        "types": [
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Dmitry Burmak",
        "cmc": 3,
        "colorIdentity": [
            "G"
        ],
        "colors": [
            "Green"
        ],
        "id": "84459d7760cda1b6789f011006e95facaf33be54",
        "imageName": "willing test subject",
        "layout": "normal",
        "manaCost": "{2}{G}",
        "multiverseid": 439515,
        "name": "Willing Test Subject",
        "nameRus": "Подопытный доброволец",
        "number": "126",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Spider",
            "Monkey",
            "Scientist"
        ],
        "text": "Reach\nWhenever you roll a 4 or higher on a die, put a +1/+1 counter on Willing Test Subject.\n{6}: Roll a six-sided die.",
        "textRus": "Захват\nКогда вы выкидываете накубике 4 или более, положите на Подопытного добровольца жетон +1/+1.\n{6}: Бросьте шестигранный кубик.",
        "toughness": "2",
        "type": "Creature — Spider Monkey Scientist",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Jesper Ejsing",
        "cmc": 3,
        "colorIdentity": [
            "B",
            "R"
        ],
        "colors": [
            "Black",
            "Red"
        ],
        "id": "52a9efd6430bbdd2bccfe640bfe8d3a50fe4528c",
        "imageName": "baron von count",
        "layout": "normal",
        "manaCost": "{1}{B}{R}",
        "multiverseid": 439516,
        "name": "Baron Von Count",
        "nameRus": "Барон вон Счет",
        "number": "127",
        "power": "3",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Human",
            "Villain"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "Baron Von Count enters the battlefield with a doom counter on \"5.\"\nWhenever you cast a spell with the indicated numeral in its mana cost, text box, power, or toughness, move the doom counter one numeral to the left.\nWhen the doom counter moves from \"1,\" destroy target player and put that doom counter on \"5.\"",
        "textRus": "Барон вон счет выходит на поле боя со счетчиком судьбы высталвенным на \"5\".\nКогда в играете залкинание с указанным числом в мананстоимости, тектовым блоке, силе или выносливаоти сдвиньте счетчик судбы на одно число в меньшую сторону.\nЕсли счеткчик судьбы сдвигается с \"1\", уничтожьте целевого игрока и уствновите счетчик судьбы на \"5\"",
        "toughness": "3",
        "type": "Legendary Creature — Human Villain",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Alex Konstad",
        "cmc": 2,
        "colorIdentity": [
            "W",
            "G"
        ],
        "colors": [
            "White",
            "Green"
        ],
        "id": "02606cd85bc8918f9a8afdf10638d927c02fb8c6",
        "imageName": "better than one",
        "layout": "normal",
        "manaCost": "{G}{W}",
        "multiverseid": 439517,
        "name": "Better Than One",
        "nameRus": "Лучше чем один",
        "number": "128",
        "rarity": "Rare",
        "text": "A person outside the game becomes your teammate. (Choose any number of cards in your hand, on top of your library, or on the battlefield under your control. Those cards become your teammate's hand, library, and permanents, respectively.)",
        "textRus": "Человек вне игры становится вашим сокомандником. (Выберите любое чило карт в вашей руке, сверху вашей колоды и на поле боя. Эти карты стновятся для вашего сокомандника рукой, библиотекой и перменентами соотвественно.)",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Ben Wootten",
        "cmc": 6,
        "colorIdentity": [
            "R",
            "G"
        ],
        "colors": [
            "Red",
            "Green"
        ],
        "id": "d468df1d03e986aad45c9debadf0c3addd1a22e1",
        "imageName": "cramped bunker",
        "layout": "normal",
        "manaCost": "{4}{R}{G}",
        "multiverseid": 439518,
        "name": "Cramped Bunker",
        "nameRus": "Тесный бункер",
        "number": "129",
        "rarity": "Rare",
        "text": "At the beginning of each opponent's upkeep, that player moves a permanent he or she controls to touch Cramped Bunker and no other permanents. If he or she can't, destroy each permanent that player controls that isn't touching Cramped Bunker, then sacrifice it.",
        "textRus": "В начале каждой фазы подержки вашего оппонента, этот игрок перемещает перманент под его контролем, так что бы он касался Тесного бункера и не касался других пермнентов. Если он не может, уничтожьте все перманенты не касающиеся Тесного бункера под контролем этого игрока. Затем пожертвуйте его",
        "type": "Enchantment",
        "types": [
            "Enchantment"
        ]
    },
    {
        "artist": "Simon Dominic",
        "cmc": 4,
        "colorIdentity": [
            "W",
            "G"
        ],
        "colors": [
            "White",
            "Green"
        ],
        "id": "b365c187725c797ae24b724793ae612380b1af5e",
        "imageName": "dr. julius jumblemorph",
        "layout": "normal",
        "manaCost": "{2}{G}{W}",
        "multiverseid": 439519,
        "name": "Dr. Julius Jumblemorph",
        "nameRus": "Д-р Джулиус Джумблепорф",
        "number": "130",
        "power": "4",
        "rarity": "Mythic Rare",
        "supertypes": [
            "Legendary"
        ],
        "text": "Dr. Julius Jumblemorph is every creature type (even if this card isn't on the battlefield).\nWhenever a host enters the battlefield under your control, you may search your library and/or graveyard for a card with augment and combine it with that host. If you search your library this way, shuffle it.",
        "textRus": "Д-р Джулиус Джумблепорф имеет все типы существ (даже если эта карта не на поле боя).\nКогда Хозяин выходит на поле боя под ваш контроль, вы можете найти в вашей библиотеке и/или кладбище карту с приращиванием и соединить ее в этим Хозяином. Если вы ищите в вашей библиотеке таким образом, перемешайте ее.",
        "toughness": "4",
        "type": "Legendary Creature",
        "types": [
            "Creature"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Sean Murray",
        "cmc": 2,
        "colorIdentity": [
            "W",
            "U"
        ],
        "colors": [
            "White",
            "Blue"
        ],
        "id": "a8e3abf0c0eaf80b7b6b82b5c171583f725dc178",
        "imageName": "the grand calcutron",
        "layout": "normal",
        "manaCost": "{W}{U}",
        "multiverseid": 439520,
        "name": "The Grand Calcutron",
        "nameRus": "Великий вычислитель",
        "number": "131",
        "rarity": "Mythic Rare",
        "supertypes": [
            "Legendary"
        ],
        "text": "When The Grand Calcutron enters the battlefield, each player's hand becomes a program (an ordered row of revealed cards).\nPlayers can only play the first card of their program.\nIf a card would be put into a player's hand from anywhere, that player reveals it and places it anywhere within his or her program instead.\nAt the beginning of each player's end step, if that player's program has fewer than five cards, he or she draws cards equal to the difference.",
        "textRus": "Когда великий вычислитель выходит на поле боя, рука каждого игрока стновится программой (упорядочный ряд показанных карт).\nИгроки могут играть только первую карту в своей программе.\nЕсли карта должна быть положена в руку игрока откуда угодно, вместо этого этот игрок показывает ее кладет в любое мето его программы.\nВ начале каждого заключительного этапа, если у игрока в программе меньше пяти карьт, он берет карты в кличестве равном разнице.",
        "type": "Legendary Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Mathias Kollros",
        "cmc": 5,
        "colorIdentity": [
            "B",
            "R"
        ],
        "colors": [
            "Black",
            "Red"
        ],
        "id": "8f119578115ab321897c58bea2d357b9ea88fcff",
        "imageName": "grusilda, monster masher",
        "layout": "normal",
        "manaCost": "{3}{B}{R}",
        "multiverseid": 439521,
        "name": "Grusilda, Monster Masher",
        "nameRus": "Грузильда, месиво монстров",
        "number": "132",
        "power": "4",
        "rarity": "Rare",
        "subtypes": [
            "Zombie",
            "Villain"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "Combined, enchanted, and equipped creatures you control have menace.\n{3}{B}{R}, {T}: Put two target creature cards from graveyards onto the battlefield combined into one creature under your control. (Its power is equal to their total power, its toughness is equal to their total toughness, and it has their names, mana costs, types, text boxes, etc.)",
        "textRus": "Соединенные, зачарованные или экипированные существа под вашим контролем имеют Угрозу.\n{3}{B}{R}, {T}: Положите тве целевые карты с кладбищ на поле боя соединенные в одно сущесвто под вашим контролем. (Его сила равна сумме сил, его выносливаоть равно сумме выносливостей, то же самое с именами, манастоимотью, типами, текстовыми блоками и прочим.)",
        "toughness": "4",
        "type": "Legendary Creature — Zombie Villain",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "David Sladek",
        "cmc": 6,
        "colorIdentity": [
            "W",
            "U"
        ],
        "colors": [
            "White",
            "Blue"
        ],
        "flavor": "It's not a carpet moth, it's a feature.",
        "id": "5a3eb9b0b3a88763f672eda4e5cbf878dd2ac65c",
        "imageName": "hot fix",
        "layout": "normal",
        "manaCost": "{4}{W}{U}",
        "multiverseid": 439522,
        "name": "Hot Fix",
        "nameRus": "Быстрые исправления",
        "number": "133",
        "rarity": "Rare",
        "text": "You have ten seconds to look at and rearrange the cards in your library. At the end of those ten seconds, if you're touching one or more of those cards, shuffle your library.",
        "textRus": "У вас есть десять секунд на то что бы изменить порядок карт в вашей библиотеке. Если через десять секунд вы касаетесь одной или более из тех карт, перемешайте колоду.",
        "type": "Sorcery",
        "types": [
            "Sorcery"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Wayne Reynolds",
        "cmc": 2,
        "colorIdentity": [
            "R",
            "G"
        ],
        "colors": [
            "Red",
            "Green"
        ],
        "id": "542e2aee278a58a72235e3b1621eae26aacb0831",
        "imageName": "olbuzzbark",
        "layout": "normal",
        "manaCost": "{X}{R}{G}",
        "multiverseid": 439523,
        "name": "Ol' Buzzbark",
        "nameRus": "Ол' Буззбарк",
        "number": "134",
        "power": "3",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Goblin",
            "Warrior"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "When Ol' Buzzbark enters the battlefield, roll X six-sided dice onto the battlefield from a height of at least X inches. For each die, put a number of +1/+1 counters equal to the result on each creature you control that die is touching. For each die, Ol' Buzzbark deals damage equal to the result to each creature an opponent controls that die is touching.",
        "textRus": "Когда Ол' Буззбарк выходит на поле боя, бросьте Х шестигранных кубика на поле боя с высоты Х дюймов. За каждый кубик, положите жетон +1/+1 в количесвтве равном выпавшему результату на каждое сущесвто под вашим контролем которое касается этого кубика. За каждый кубик, Ол' Буззбарк наносит повеждения равные выпавшему результату каждому существу под контролем оппонента, которого этот кубик касается.",
        "toughness": "3",
        "type": "Legendary Creature — Goblin Warrior",
        "types": [
            "Creature"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 3,
        "colorIdentity": [
            "U",
            "B"
        ],
        "colors": [
            "Blue",
            "Black"
        ],
        "flavor": "This space intentionally left blank.",
        "id": "706f53610f016bfee503cd5e070b9dab2087a3a2",
        "imageName": "phoebe, head of s.n.e.a.k.",
        "layout": "normal",
        "manaCost": "{1}{U}{B}",
        "multiverseid": 439524,
        "name": "Phoebe, Head of S.N.E.A.K.",
        "nameRus": "Фиби, Глава В.О.Р.И.Ш.К.А.",
        "number": "135",
        "power": "2",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Human",
            "Spy"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "Phoebe, Head of S.N.E.A.K. can't be blocked by creatures with flavor text.\n{2}{U}{B}: Phoebe permanently steals target creature's text box. (That creature loses all rules text, flavor text, and watermarks. This creature gains them.)",
        "textRus": "Фиби, Глава В.О.Р.И.Ш.К.А. не может быть заблокирована существами с художественным текстом.\n{2}{U}{B}: Фиби, Глава В.О.Р.И.Ш.К.А. навсегда крадет текстовый блок целевого существа. (То сущесвто теряет все правила, художествнный текст и водный знак. Это сущесвто получает их.)",
        "toughness": "3",
        "type": "Legendary Creature — Human Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Terese Nielsen",
        "cmc": 5,
        "colorIdentity": [
            "W",
            "U",
            "B",
            "R",
            "G"
        ],
        "colors": [
            "White",
            "Blue",
            "Black",
            "Red",
            "Green"
        ],
        "id": "a3923c94fbb5534e419d59a08977d498319a69c2",
        "imageName": "urza, academy headmaster",
        "layout": "normal",
        "manaCost": "{W}{U}{B}{R}{G}",
        "multiverseid": 439525,
        "name": "Urza, Academy Headmaster",
        "nameRus": "Урза, Глава академии",
        "number": "136",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Urza"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "+1: Head to AskUrza.com and click +1.\n-1: Head to AskUrza.com and click -1.\n-6: Head to AskUrza.com and click -6.",
        "textRus": "+1: Перейдите на AskUrza.com и кликните на  +1.\n-1: Перейдите на AskUrza.com и кликните на  -1.\n-6: Перейдите на AskUrza.com и кликните на  -6.",
        "type": "Legendary Planeswalker — Urza",
        "types": [
            "Planeswalker"
        ]
    },
    {
        "artist": "Dmitry Burmak",
        "cmc": 2,
        "colorIdentity": [
            "U",
            "B"
        ],
        "colors": [
            "Blue",
            "Black"
        ],
        "id": "b4340a578475edd9a68deaee223155e387f7f405",
        "imageName": "x",
        "layout": "normal",
        "manaCost": "{U}{B}",
        "multiverseid": 439526,
        "name": "X",
        "nameRus": "Х",
        "number": "137",
        "power": "2",
        "rarity": "Rare",
        "subtypes": [
            "Human",
            "Spy"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "As long as X is in X's owner's opponent's hand, X's owner may cast X and activate X's abilities. That opponent can't cast X and plays with his or her hand revealed.\n{U}{B}, {T}: Put X into target opponent's hand.\n{3}{U}{B}: You may play a card in the same hand as X without paying its mana cost.",
        "textRus": "Пока Х в руке оппонента владельца Х, владелец Х может разыгрывать Х и активировать способности Х. Этот оппонент не может играть Х и играет с открытой рукой.\n{U}{B}, {T}: Положите Х в руку целевого оппонента.\n{3}{U}{B}: Вы можете разыграть карты из той же руки где лежит Х без уплаты ее манастоимости.",
        "toughness": "2",
        "type": "Legendary Creature — Human Spy",
        "types": [
            "Creature"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Simon Dominic",
        "cmc": 6,
        "colorIdentity": [
            "B",
            "R"
        ],
        "colors": [
            "Black",
            "Red"
        ],
        "id": "a68075aad4210d49292e4bda17c53983f619de44",
        "imageName": "mary okill",
        "layout": "normal",
        "manaCost": "{5}{B/R}",
        "multiverseid": 439527,
        "name": "Mary O'Kill",
        "nameRus": "Мэри О'Килл",
        "number": "138",
        "power": "5",
        "rarity": "Rare",
        "subtypes": [
            "Human",
            "Villain"
        ],
        "supertypes": [
            "Legendary"
        ],
        "text": "{1}{B/R}: Switch a Killbot or Mary O'Kill in your hand with one on the battlefield. (If a creature is tapped, the switched creature is tapped. The same is true for untapped, attacking, blocking, enchanted, equipped, and targeted. Any counters on a creature are on the switched creature instead.)",
        "textRus": "{1}{B/R}: Поменяйте Killbot или Мэри О'Килл в вашей руке на одного из них на поле боя. (Если существо повернуто, замененное существо тоже будет повернуто, то же самое с равзернутым, атакующим, блокирующим. зачарованным, экипированным и целевым. Все жетоны с того существа на замещающем существе.)",
        "toughness": "5",
        "type": "Legendary Creature — Human Villain",
        "types": [
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Carl Critchlow",
        "cmc": 8,
        "id": "7e185cc67b340c337049d65a60cdd25f4b126135",
        "imageName": "angelic rocket",
        "layout": "normal",
        "manaCost": "{8}",
        "multiverseid": 439528,
        "name": "Angelic Rocket",
        "nameRus": "Агельская ракета",
        "number": "139",
        "power": "4",
        "rarity": "Rare",
        "subtypes": [
            "Angel"
        ],
        "text": "Flying\nWhen this creature enters the battlefield, you may destroy target nonland permanent.",
        "textRus": "Полет\nКогда это существо выходит на поле боя, вы можете уничтожить целевой перменент не являющейся землей.",
        "toughness": "4",
        "type": "Artifact Host Creature — Angel",
        "types": [
            "Artifact",
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Chris Seaman",
        "cmc": 4,
        "id": "07342a93a23bb538dcddb6e9f14e6fc6e372e11b",
        "imageName": "border guardian",
        "layout": "normal",
        "manaCost": "{4}",
        "multiverseid": 439529,
        "name": "Border Guardian",
        "nameRus": "Пограничный стражник",
        "number": "140",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Knight"
        ],
        "text": "Whenever you cast a silver-bordered spell, put a +1/+1 counter on Border Guardian.\nWhenever you cast a black-bordered spell, Border Guardian can't be blocked this turn.\nWhenever you cast a white-bordered spell, Border Guardian gains double strike until end of turn.",
        "textRus": "Когда вы разыгрываете заклинание с серебряной рамкой, положите жетон +1/+1 на Пограничного стражника.\nКогда вы разыгрываете заклинание с черной рамкой, Пограничный стражник не может быть блокированв этом ходу.\nКогда вы разыгрываете заклинание с белой рамкой, Пограничный стражник получает Двойной удар до конца хода.",
        "toughness": "1",
        "type": "Artifact Creature — Knight",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Mark A. Nelson",
        "cmc": 4,
        "id": "db1de58c576f09560b0934ed764245c53ec85782",
        "imageName": "buzzing whack-a-doodle",
        "layout": "normal",
        "manaCost": "{4}",
        "multiverseid": 439530,
        "name": "Buzzing Whack-a-Doodle",
        "nameRus": "Жужжащий Ударь-болван",
        "number": "141",
        "rarity": "Uncommon",
        "text": "As Buzzing Whack-a-Doodle enters the battlefield, you and an opponent each secretly choose Whack or Doodle. Then those choices are revealed. If the choices match, Buzzing Whack-a-Doodle has that ability. Otherwise, it has Buzz.\n• Whack — {T}: Target player loses 2 life.\n• Doodle — {T}: You gain 3 life.\n• Buzz — {2}, {T}: Draw a card.",
        "textRus": "Когда Жужжащий Ударь-болван выходит на поле боя, вы и ваш оппонент секретно выбираете Ударь или Болван. Затем вы раскрываете свой выбор. Если вы выбрали одинакво, Жужжащий Ударь-болван имеет эту спопобность. Иначе он имеет Жажжуние.\n• Ударь — {T}: Целевой игрок теряет 2 жизни.\n• Болван — {T}: Вы получаете 3 жизни.\n• Жужжание — {2}, {T}: Возьмите карту.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ]
    },
    {
        "artist": "Tom Babbey",
        "cmc": 4,
        "flavor": "\"Perhaps you believe, even in these final moments, that you will be saved. But doom has no snooze button, you fools!\"\n—Baron Von Count",
        "id": "d1702d8b65b9527d4e41fcb5126de5328dd2ee1b",
        "imageName": "clockofdoom",
        "layout": "normal",
        "manaCost": "{4}",
        "multiverseid": 439531,
        "name": "Clock of DOOOOOOOOOOOOM!",
        "nameRus": "Часы РООООООООООООКА!",
        "number": "142",
        "rarity": "Uncommon",
        "text": "{4}, {T}: Move the CRANK counter to your Contraption deck's next sprocket and crank any number of that sprocket's Contraptions.",
        "textRus": "{4}, {T}: Переместите жетон заводной рукоятки вашей колоды Штуковин на следюущую звездочку и заведите любое число Штуковин на этой звездочке.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Matt Gaser",
        "cmc": 1,
        "flavor": "\"Cogs on cats / Cogs on dogs / Cogs on hats / And cogs on cogs.\"\n—Song of the Cogmentor",
        "id": "31791d8a3ff973ed08fb63c77a7a854c52151c58",
        "imageName": "cogmentor",
        "layout": "normal",
        "manaCost": "{1}",
        "multiverseid": 439532,
        "name": "Cogmentor",
        "nameRus": "Руководитель зубцов",
        "number": "143",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Gnome",
            "Rigger"
        ],
        "text": "Flying\n{4}: Reassemble target Contraption you control. (Move it onto another one of your sprockets.)",
        "textRus": "Полет\n{4}: Пересоберите целевую Штуковину под вашим контролем. (Переместите ее на другую звездочку.)",
        "toughness": "1",
        "type": "Artifact Creature — Gnome Rigger",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Mike Burns",
        "cmc": 4,
        "flavor": "Common side effects include headaches, ringing in ears, and excessive smithereens. In some cases, a small hole in space-time may develop.",
        "id": "0143e16ede1ba9baab26a5e895c20a70c03fc955",
        "imageName": "contraption cannon",
        "layout": "normal",
        "manaCost": "{4}",
        "multiverseid": 439533,
        "name": "Contraption Cannon",
        "nameRus": "Штуковинная пушка",
        "number": "144",
        "rarity": "Uncommon",
        "text": "{2}, Sacrifice Contraption Cannon: It deals damage to target creature or player equal to the number of Contraptions you control.",
        "textRus": "{2}, Пожертвуйте Штуковинную пушку: Она наносит повреждения целевому существу или игроку равные количесвте Штуковин под вашим контролем.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Alex Konstad",
        "cmc": 2,
        "flavor": "\"whirrrr . . . beep . . . click . . . click?\"",
        "id": "a48a1c8acd377f492275b36064d8a274c8e07564",
        "imageName": "curious killbot",
        "layout": "normal",
        "manaCost": "{2}",
        "multiverseid": 439534,
        "name": "Curious Killbot",
        "nameRus": "Любознательный бот убийца",
        "number": "145",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Killbot"
        ],
        "toughness": "1",
        "type": "Artifact Creature — Killbot",
        "types": [
            "Artifact",
            "Creature"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Tom Babbey",
        "cmc": 0,
        "id": "3de1418ac06337c2c488850a7673d803a5a433a6",
        "imageName": "entirely normal armchair",
        "layout": "normal",
        "multiverseid": 439535,
        "name": "Entirely Normal Armchair",
        "nameRus": "Асболютно обычное кресло",
        "number": "146",
        "rarity": "Uncommon",
        "text": "During your turn, if Entirely Normal Armchair is in your hand, you may hide it on the battlefield.\n{0}: Return Entirely Normal Armchair to its owner's hand. Only any opponent may activate this ability and only if he or she sees Entirely Normal Armchair.\n{2}, Sacrifice Entirely Normal Armchair: Destroy target attacking creature.",
        "textRus": "Во время вашего хода, если Асболютно обычное кресло в вашей руке, вы можете спрятать его на поле боя.\n{0}: Верните Асболютно обычное кресло в руку владельца. Только оппонент может активировать эту способность и только если он видит Асболютно обычное кресло\n{2}, Пожертвуйте Асболютно обычное кресло: Уничтожте целевое атакующее существо.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Chris Seaman",
        "cmc": 5,
        "id": "ff66e9b7b6c4a738046e52ad398d3ee40b0246d5",
        "imageName": "everythingamajig",
        "layout": "normal",
        "manaCost": "{5}",
        "multiverseid": 439536,
        "name": "Everythingamajig",
        "nameRus": "Всевозможность",
        "number": "147",
        "rarity": "Rare",
        "text": "{2}, {T}: Move a counter from one permanent onto another. If the second permanent refers to any kind of counter, the moved counter becomes one of those counters. Otherwise, it becomes a +1/+1 counter.\n{3}, {T}: Put a +1/+1 counter on target creature.\n{4}, {T}: Proliferate. (You choose any number of permanents and/or players with counters on them, then give each another counter of a kind already there.)",
        "textRus": "{2}, {T}: Переместите жетон с одного перманента на другой перманент. Если второй перманент упоминает любой вид жетона, перемещенный жетон становится жетоном такого вида. Иначе он становится жетоном +1/+1.\n{3}, {T}: Положите жетон +1/+1 на целевое сущесвто.\n{4}, {T}: Пролиферировать (Вы выбираете любое число объектов и/или игроков с жетонами, затем они получает дополнительный жетон того вида что у них уже есть.)",
        "type": "Artifact",
        "types": [
            "Artifact"
        ]
    },
    {
        "artist": "Sean Murray",
        "cmc": 4,
        "id": "37a698716207213e7f6112cf265366805f4f309d",
        "imageName": "gnome-made engine",
        "layout": "normal",
        "manaCost": "{4}",
        "multiverseid": 439537,
        "name": "Gnome-Made Engine",
        "nameRus": "Производящая гномов машина",
        "number": "148",
        "power": "2",
        "rarity": "Common",
        "subtypes": [
            "Construct"
        ],
        "text": "When this creature enters the battlefield, create a 1/1 colorless Gnome artifact creature token.",
        "textRus": "Когда это сущесвто выходит на поле боя, создайте фишку бесцветного артифактного существа Гнома 1/1.",
        "toughness": "2",
        "type": "Artifact Host Creature — Construct",
        "types": [
            "Artifact",
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Mike Burns",
        "cmc": 3,
        "flavor": "Early testing failed because the clones were all thumbs.",
        "id": "ea4f5833db494ab3e2afbd7e89e31ff7ad461f07",
        "imageName": "handy dandy clone machine",
        "layout": "normal",
        "manaCost": "{3}",
        "multiverseid": 439538,
        "name": "Handy Dandy Clone Machine",
        "nameRus": "Удобная машина клонаирования Дэнди",
        "number": "149",
        "rarity": "Rare",
        "text": "{2}, {T}: Create a 2/2 colorless Homunculus creature token. It must be represented by a unique hand and two fingers at all times, or it ceases to exist.",
        "textRus": "{2}, {T}: Создайте фишку бесцветного существа Гомункула 2/2. Оно должно быть представлено рукой и двумя пальцам всегда, иначе оно исчезает.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Zoltan Boros",
        "cmc": 5,
        "flavor": "\"Just relax—I brought in a substitute.\"",
        "id": "d67440091d9f6c427940f91b398993f8d8a5f9f7",
        "imageName": "kindslaver",
        "layout": "normal",
        "manaCost": "{5}",
        "multiverseid": 439539,
        "name": "Kindslaver",
        "nameRus": "Добрый работорговец",
        "number": "150",
        "rarity": "Rare",
        "supertypes": [
            "Legendary"
        ],
        "text": "{5}, {T}, Sacrifice Kindslaver: A person outside the game controls target player during that player's next turn. Neither player may advise that person until the end of that turn.",
        "textRus": "{5}, {T}, Пожертвуйте Доброго работорговца: Человек вне игры контролирует следующий ход целевого игрока. До конца этого хода никто не может подсказывать ему.",
        "type": "Legendary Artifact",
        "types": [
            "Artifact"
        ]
    },
    {
        "artist": "Jeff Miracola",
        "cmc": 2,
        "flavor": "Krark was the kind of goblin who'd lose his thumb in a wager and come right back with \"Double or nothing!\"",
        "id": "a9f95ef6c103e02e751fc7b7209f11940b689e66",
        "imageName": "krarks other thumb",
        "layout": "normal",
        "manaCost": "{2}",
        "multiverseid": 439540,
        "name": "Krark's Other Thumb",
        "nameRus": "Другой большой палец Крарка",
        "number": "151",
        "rarity": "Uncommon",
        "supertypes": [
            "Legendary"
        ],
        "text": "If you would roll a die, instead roll two of those dice and ignore one of those results.",
        "textRus": "Если вы бросаете кубик, вместо этого бросьте два кубика и проигнориуйте один из результатов.",
        "type": "Legendary Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Carl Critchlow",
        "cmc": 5,
        "id": "168e1103bde66ae444e1e83049ac75261d4c557e",
        "imageName": "labro bot",
        "layout": "normal",
        "manaCost": "{5}",
        "multiverseid": 439541,
        "name": "Labro Bot",
        "nameRus": "Лабро Бот",
        "number": "152",
        "power": "3",
        "rarity": "Uncommon",
        "subtypes": [
            "Hound"
        ],
        "text": "When this creature enters the battlefield, return target host card or card with augment from your graveyard to your hand.",
        "textRus": "Когда это сущесвто выходит на поле боя, верните целевую карту Хозяина или карту с прирощением из вашего кладбища в вашу руку.",
        "toughness": "3",
        "type": "Artifact Host Creature — Hound",
        "types": [
            "Artifact",
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Dmitry Burmak",
        "cmc": 2,
        "flavor": "\"Time for you to meet the brains of this operation!\"\n—The Big Idea",
        "id": "199ff0e0b78e83ce343a58a7f441c6dd37b1a94a",
        "imageName": "lobe lobber",
        "layout": "normal",
        "manaCost": "{2}",
        "multiverseid": 439542,
        "name": "Lobe Lobber",
        "nameRus": "Катапульта лобных долей",
        "number": "153",
        "rarity": "Uncommon",
        "subtypes": [
            "Equipment"
        ],
        "text": "Equipped creature has \"{T}: This creature deals 1 damage to target player. Roll a six-sided die. On a 5 or higher, untap it.\"\nEquip {2}",
        "textRus": "Экипированное сущесвто имеет \"{T}: Это сущесвто наносит 1 повреждение целевому сущесвту или игроку. Бросьте шестигранный кубик, если выпало 5 или больше, разверните его.\"\nЭкипровать {2}",
        "type": "Artifact — Equipment",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Carl Frank",
        "cmc": 3,
        "flavor": "\"When it comes down to it, science is more art than science.\"",
        "id": "3945f06d069cce828a2635550b2bcf597d9ae94e",
        "imageName": "mad science fair project",
        "layout": "normal",
        "manaCost": "{3}",
        "multiverseid": 439543,
        "name": "Mad Science Fair Project",
        "nameRus": "Проект для ярмарки безумных ученых",
        "number": "154",
        "rarity": "Common",
        "text": "{T}: Roll a six-sided die. On a 3 or lower,\ntarget player adds oC to his or her mana\npool. Otherwise, that player adds one\nmana of any color he or she chooses to\nhis or her mana pool.",
        "textRus": "{T}: Бросьте шестигранный кубик. На 3 и меньше целевой игрок добавлчет себе {C} в его хранилище маны. В противном случе, этот игрок добавляет в его хранилище маны одну ману любого цвета.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Alex Konstad",
        "cmc": 7,
        "id": "37e79552ae1dae5ff05f69b5966d381010d6dc4e",
        "imageName": "modular monstrosity",
        "layout": "normal",
        "manaCost": "{7}",
        "multiverseid": 439544,
        "name": "Modular Monstrosity",
        "nameRus": "Модульное чудовище",
        "number": "155",
        "power": "3",
        "rarity": "Rare",
        "subtypes": [
            "Construct"
        ],
        "text": "Whenever an opponent casts a spell, you have five seconds to choose a keyword you haven't chosen for a card named Modular Monstrosity today that's been printed on a creature card. If you do, Modular Monstrosity gains that ability. Otherwise, Modular Monstrosity loses all keyword abilities.",
        "textRus": "Когда оппонент играет заклинаниеу вас есть пять секнд, что бы выбрать ключевое слово которое вы еще не выбирали для карты с именм Модульное чудовище, которое было напечатано на карте существа. Если вы это делаете, Модульное чудовище получает эту способность. Иначе, модульное чудовище теряет все ключевые слова.",
        "toughness": "3",
        "type": "Artifact Creature — Construct",
        "types": [
            "Artifact",
            "Creature"
        ]
    },
    {
        "artist": "Tom Babbey",
        "cmc": 1,
        "id": "8f43bde7f2d2eb6c6f3b7cc4a4285794f93745f2",
        "imageName": "proper laboratory attire",
        "layout": "normal",
        "manaCost": "{1}",
        "multiverseid": 439545,
        "name": "Proper Laboratory Attire",
        "nameRus": "Правильная лабораторная одежда",
        "number": "156",
        "rarity": "Uncommon",
        "subtypes": [
            "Equipment"
        ],
        "text": "Equipped creature gets +2/+1 and has protection from die rolls. (Nothing that lets a player roll a die can block, target, deal damage to, or attach to equipped creature.)\nEquip {2}",
        "textRus": "Экипрованное сущесвто получает +2/+1 и защиту от бросков кубиков. (Ничего из того что указывает игроку бросить кубик не может блокировать, наносить повреждения, зачаровывать, прикрепляться к экипрованному существе)\nЭкипировать {2}",
        "type": "Artifact — Equipment",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Matt Dixon",
        "cmc": 0,
        "id": "357d68bb8afd1603ececfca3d69322ef0b4ed986",
        "imageName": "robo-",
        "layout": "normal",
        "multiverseid": 439546,
        "name": "Robo-",
        "nameRus": "Робо-",
        "number": "157",
        "power": "+1",
        "rarity": "Uncommon",
        "subtypes": [
            "Construct"
        ],
        "text": "At the beginning of each end step, if an artifact entered the battlefield under your control this turn,\nAugment {2} ({2}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "В начале вашего завершающего шага, если артифакт вышел на поле боя под вашим контролем в этот ход,\nПриростить {2} ({2},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+1",
        "type": "Artifact Creature — Construct",
        "types": [
            "Artifact",
            "Creature"
        ]
    },
    {
        "artist": "Simon Dominic",
        "cmc": 4,
        "id": "9e94d05f0b4d76ed5385f9c175e8440549c4e8d8",
        "imageName": "split screen",
        "layout": "normal",
        "manaCost": "{4}",
        "multiverseid": 439547,
        "name": "Split Screen",
        "nameRus": "Разделенный экран",
        "number": "158",
        "rarity": "Rare",
        "text": "When Split Screen enters the battlefield, shuffle your library and deal it into four libraries. If anything refers to your library, choose one of your libraries for it.\nPlay with your libraries' top cards revealed.\nWhen Split Screen leaves the battlefield, shuffle your libraries together.",
        "textRus": "Когда Разделенный экран выходит на поле битвы, перемешйте вашу библиотеку разделите ее на четыре части. Если что то указывает на вашу библиотеку, выберите одну из них.\nВы играете с открытой верхей картой ваших библиотек. Когда Разделенный экран покидает поле боя, замешайте ваши библиотеки вместе.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Daniel Ljunggren",
        "cmc": 3,
        "flavor": "A symbol of _________ in _________ times.",
        "id": "4ef7ea7de5f6985f55fdc0568eb65e0a45448b5e",
        "imageName": "staff of the letter magus",
        "layout": "normal",
        "manaCost": "{3}",
        "multiverseid": 439548,
        "name": "Staff of the Letter Magus",
        "nameRus": "Принадлежности буквенного мага",
        "number": "159",
        "rarity": "Uncommon",
        "text": "As Staff of the Letter Magus enters the battlefield, choose a consonant other than N, R, S, or T.\nWhenever a player casts a spell, you gain 1 life for each time the chosen letter appears in that spell's name.",
        "textRus": "Когда Принадлежности буквенного мага выходят на поле боя, выберите согласную букву отличную от  N, R, S, или T.\nКогда игрок разыгрывает заклинание, вы получаете 1 жизнб за каждое вхождение выбранной буквы в имени этого заклинания.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ]
    },
    {
        "artist": "Zoltan Boros",
        "cmc": 3,
        "flavor": "A truly symbolic advantage.",
        "id": "7f72f7830f750a3e8b6de78cc357ad10bd985832",
        "imageName": "stamp of approval",
        "layout": "normal",
        "manaCost": "{3}",
        "multiverseid": 439549,
        "name": "Stamp of Approval",
        "nameRus": "Печать \"Утверждено\"",
        "number": "160",
        "rarity": "Uncommon",
        "text": "As Stamp of Approval enters the battlefield, choose a watermark.\nCreatures you control with the chosen watermark get +1/+1.",
        "textRus": "Когда Печать \"Утверждено\" выходит на поле боя, выберите водный знак.\nСущества под вашим контролем с выбранным водным занком получают +1/+1.",
        "type": "Artifact",
        "types": [
            "Artifact"
        ]
    },
    {
        "artist": "Carl Critchlow",
        "cmc": 0,
        "id": "5fbdc708fa987186b43fc9cc560c6a914d3a2ef5",
        "imageName": "steam-powered",
        "layout": "normal",
        "multiverseid": 439550,
        "name": "Steam-Powered",
        "nameRus": "Паровой",
        "number": "161",
        "power": "+0",
        "rarity": "Uncommon",
        "subtypes": [
            "Construct"
        ],
        "text": "{5}:\nAugment {4} ({4}, Reveal this card from your hand: Combine it with target host. Augment only as a sorcery.)",
        "textRus": "{5}:\nПриростить {2}{W} ({2}{W},Покажите эту карты из своей руки: Объедините ее с целевым носителем. Приращивайте только как волшебство.)",
        "toughness": "+4",
        "type": "Artifact Creature — Construct",
        "types": [
            "Artifact",
            "Creature"
        ]
    },
    {
        "artist": "Carl Critchlow",
        "cmc": 2,
        "flavor": "Q: Where does a mechanical squirrel hide its nuts?\nA: In a bolt hole.",
        "id": "235fed54f2b1a5e2cec9d08e264e3e828ab5eeca",
        "imageName": "steel squirrel",
        "layout": "normal",
        "manaCost": "{2}",
        "multiverseid": 439551,
        "name": "Steel Squirrel",
        "nameRus": "Стальная белка",
        "number": "162",
        "power": "1",
        "rarity": "Uncommon",
        "subtypes": [
            "Squirrel"
        ],
        "text": "Whenever you roll a 5 or higher on a die, Steel Squirrel gets +X/+X until end of turn, where X is the result.\n{6}: Roll a six-sided die.",
        "textRus": "Когда вы выбрасываете на кубике 5 или более, Стальная белка получает +Х/+Х до конца хода, где Х это резльтат броска.\n{6}: Бросьте шестигранный кубик.",
        "toughness": "1",
        "type": "Artifact Creature — Squirrel",
        "types": [
            "Artifact",
            "Creature"
        ]
    },
    {
        "artist": "Chris Rahn",
        "cmc": 3,
        "id": "16b6ae18f9d44b3933dcf94958fce4a8a7f9937d",
        "imageName": "sword of dungeons and dragons",
        "layout": "normal",
        "manaCost": "{3}",
        "multiverseid": 439552,
        "name": "Sword of Dungeons & Dragons",
        "nameRus": "Мечь Подземелий и Драконов",
        "number": "163",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Equipment"
        ],
        "text": "Equipped creature gets +2/+2 and has protection from Rogues and from Clerics.\nWhenever equipped creature deals combat damage to a player, create a 4/4 gold Dragon creature token with flying and roll a d20 (a twenty-sided die). If you roll a 20, repeat this process.\nEquip {2}",
        "textRus": "Экипированное сущесвто получает +2/+2 и защиту от Плутов И Священнико.\nКогда экипированное сущесвто наносит боевые повреждения игроку, создайте фишку существа 4/4 золотой Дракон с полетом  и бросьте двадцатигранный кубик. Если вы выбросиле 20, повторите этот процесс.\nЭкипировать {2}",
        "type": "Artifact — Equipment",
        "types": [
            "Artifact"
        ]
    },
    {
        "artist": "Matt Dixon",
        "cmc": 3,
        "id": "968b0d189a3c10a3a72efdb7b37b195226963542",
        "imageName": "voracious vacuum",
        "layout": "normal",
        "manaCost": "{3}",
        "multiverseid": 439553,
        "name": "Voracious Vacuum",
        "nameRus": "Прожорливый пылесос",
        "number": "164",
        "power": "1",
        "rarity": "Common",
        "subtypes": [
            "Construct"
        ],
        "text": "When this creature enters the battlefield, put a +1/+1 counter on target creature.",
        "textRus": "Когда это сущесвто выходит на поле боя, положите жетон +1/+1 на целевое сущесвто.",
        "toughness": "1",
        "type": "Artifact Host Creature — Construct",
        "types": [
            "Artifact",
            "Host",
            "Creature"
        ]
    },
    {
        "artist": "Matt Gaser",
        "cmc": 0,
        "flavor": "The location of S.N.E.A.K. HQ is a closely guarded secret.",
        "id": "9417cfb206fb28e9ebd5a9494659134e3816fe4d",
        "imageName": "secret base",
        "layout": "normal",
        "multiverseid": 439554,
        "name": "Secret Base",
        "nameRus": "Секретная база",
        "number": "165",
        "rarity": "Common",
        "text": "{T}: Add {C} to your mana pool.\n{T}: Add one mana of any color to your mana pool. Spend this mana only to cast a spell that shares a watermark with Secret Base.",
        "textRus": "{T}: Добавьте {C} в ваше хранилище маны.\n{T}: Добавьте в ваше хранилище маны одну ману любого цвета. Тратье эту ману только на разыгрывание заклинаний с таким же водяным знаком как и у Секретной базы.",
        "type": "Land",
        "types": [
            "Land"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Simon Dominic",
        "cmc": 0,
        "flavor": "Shopping List\nLamp-hand attachment\nX-ray contact lenses\nDiscount death ray\nTwo-headed hammer\nKitten-fish",
        "id": "2f9b2d42e65df39092dae0bafa48ab29b9cbf140",
        "imageName": "watermarket",
        "layout": "normal",
        "multiverseid": 439555,
        "name": "Watermarket",
        "nameRus": "Воднознакомагазин",
        "number": "166",
        "rarity": "Rare",
        "text": "{T}: Add {C}{C} to your mana pool. Spend this mana only to cast spells with watermarks.",
        "textRus": "{T}: Добавьте {C}{C} в ваше хранилище маны. Тратье эту ману только на разыгрывание заклинаний с водным знаком.",
        "type": "Land",
        "types": [
            "Land"
        ]
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "2265c9e282460835b64ada8256b3a185e4b3a79d",
        "imageName": "accessories to murder",
        "layout": "normal",
        "multiverseid": 439556,
        "name": "Accessories to Murder",
        "nameRus": "Орудия убийсива",
        "number": "167",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Accessories to Murder, target creature gets +X/+0 until end of turn, where X is the number of creatures you control.",
        "textRus": "Когда вы заводите Орудия убийства, целевое сущесвто получает +Х/+0 до конца хода, где Х это число существ под вашим контролем.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "041ad3ed79b514e436227bc85c88a7d64c18051a",
        "imageName": "applied aeronautics",
        "layout": "normal",
        "multiverseid": 439557,
        "name": "Applied Aeronautics",
        "nameRus": "Прикладная аэронавтика",
        "number": "168",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Applied Aeronautics, until end of turn, target creature gets +1/+0, gains flying, and becomes an artifact in addition to its other types.",
        "textRus": "Когда вы заводите Прикладную аэронавтику, до конца хода, целевое сущесвто получает +1/+0, полет и становится артифактом в дополенние своим другим типам.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "c3bde661357bf81b6f5d6a6e8abeed3cd6041e16",
        "imageName": "arms depot",
        "layout": "normal",
        "multiverseid": 439558,
        "name": "Arms Depot",
        "nameRus": "Склад рук",
        "number": "169",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Arms Depot, put two +1/+1 counters on target creature.",
        "textRus": "Когда вы заводите Склад рук, положите два жетона +1/+1 на целевое сущесвто.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "68e47c298b1ce72d89f0c99bc7228f9f16334a72",
        "imageName": "auto-key",
        "layout": "normal",
        "multiverseid": 439559,
        "name": "Auto-Key",
        "nameRus": "Автоключ",
        "number": "170",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Auto-Key, until end of turn, target creature becomes an artifact in addition to its other types and gains \"{T}: You gain 3 life.\"",
        "textRus": "Когда вы заводите Атовключ, до конца хода, целевое сущесвто становится атрифактом в дополнение к свои типам и получает \"{T}: Вы получаете 3 жизни.\"",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "89a4c40c5e80ffd2deff8c1188e62ae5c03fc133",
        "imageName": "bee-bee gun",
        "layout": "normal",
        "multiverseid": 439560,
        "name": "Bee-Bee Gun",
        "nameRus": "Пчеломет",
        "number": "171",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Bee-Bee Gun, until end of turn, target creature gains \"{2}: This creature fights another target creature.\"",
        "textRus": "Когда вы заводите Пчеломет, до конца хода, целевое сущесвто получает \"{2}: Это сущесвто сражается с другим уелевм существом.\"",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "365357f14dd2aa09babb7667cda71fe45f8f6b23",
        "imageName": "boomflinger",
        "layout": "normal",
        "multiverseid": 439561,
        "name": "Boomflinger",
        "nameRus": "Бумометатель",
        "number": "172",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Boomflinger, roll two six-sided dice. Boomflinger deals damage to target player equal to the difference between those results.",
        "textRus": "Когда вы заводите Бумометатель, бросьте два шестигранных кубика. Бумометатель наносит повреждения целевом игроку равные разнице между результатами бросков.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "64ccfb31fa7d36b33877c2459bdc4d0f9b3143fb",
        "imageName": "buzz buggy",
        "layout": "normal",
        "multiverseid": 439562,
        "name": "Buzz Buggy",
        "nameRus": "Жужжащий багги",
        "number": "173",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Buzz Buggy, target creature gets +2/+0 and gains trample until end of turn.",
        "textRus": "Когда вы заводите Жужжащий багги, целевое сущесвто получает +2/+0 и пробивной удар до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "b83a64b6fcdb1d3a8aa69272db90c5a9d78707ed",
        "imageName": "deadly poison sampler",
        "layout": "normal",
        "multiverseid": 439563,
        "name": "Deadly Poison Sampler",
        "nameRus": "Пробник смертельного яда",
        "number": "174",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Deadly Poison Sampler, until end of turn, target creature gains \"Whenever this creature deals combat damage to a player, destroy target creature that player controls.\"",
        "textRus": "Когда вы заводите Пробник смертелного яда, до конца хода, целевое сущесвто получает \"Когда это сущесвто наносит повреждения игроку, уничтожьте целевое сущесвто под контролем того игрока.\"",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "a1bc419cba15a1648ae375ce2ee9e507b12ef5d2",
        "imageName": "dictation quillograph",
        "layout": "normal",
        "multiverseid": 439564,
        "name": "Dictation Quillograph",
        "nameRus": "",
        "number": "175",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Dictation Quillograph, until end of turn, target creature gains \"Whenever this creature deals combat damage to a player, you may draw a card. If you do, discard a card.\"",
        "textRus": "Когда вы заводите Диктофонный квиллограф, до конца хода, целевео существо получает\"Когда это сущесвто наносит боевые повреждения игроку, вы можете взять карту. Если вы это далаете, сбросьте карту.\"",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "7cbfd6afdcc211c44c7b5d611d5630bf3ea60d97",
        "imageName": "dispatch dispensary",
        "layout": "normal",
        "multiverseid": 439565,
        "name": "Dispatch Dispensary",
        "nameRus": "Диспетчер отправки",
        "number": "176",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Dispatch Dispensary, create a 2/2 black Rogue creature token with menace.",
        "textRus": "Когда вы заводите Диспетчер отправки, создайте фишку черного сущеста Плут 2/2 с угрозой.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "bb61f608e45580e7030c6df20785ab4532c5e5cc",
        "imageName": "division table",
        "layout": "normal",
        "multiverseid": 439566,
        "name": "Division Table",
        "nameRus": "Раздельный стол",
        "number": "177",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Division Table, target player loses 2 life.",
        "textRus": "Когда вы заводите Раздельный стол, целевой игрок теряет 2 жизни.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "ad41b1c8bf220e1ec6f925147709d4faa3dd700f",
        "imageName": "dogsnail engine",
        "layout": "normal",
        "multiverseid": 439567,
        "name": "Dogsnail Engine",
        "nameRus": "Песулиточный мотор",
        "number": "178",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Dogsnail Engine, target player gains life equal to the greatest power among creatures you control.",
        "textRus": "Когда вы заводите Песулиточный мотор, целевой игрок получает жизни равные наиввысшему значению силы среди существ под его контролем.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "959865fb83edc39c92266332e8108d2909876884",
        "imageName": "dual doomsuits",
        "layout": "normal",
        "multiverseid": 439568,
        "name": "Dual Doomsuits",
        "nameRus": "Парные костюмы гибели",
        "number": "179",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Dual Doomsuits, each time a source you control would deal damage this turn, it deals double that damage instead.",
        "textRus": "Когда вы заводите Парные костюмы гибели, каждый раз когда истоник под вашим контролем должен нанести урон до конца этого хода, вместо этого он наносит удвоеный урон.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "c229d2102e98e23375146b6d041d907088476e7b",
        "imageName": "duplication device",
        "layout": "normal",
        "multiverseid": 439569,
        "name": "Duplication Device",
        "nameRus": "Дуплицирующее устройство",
        "number": "180",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Duplication Device, until end of turn, target creature becomes a copy of any creature on the battlefield, except it's an artifact in addition to its other types.",
        "textRus": "Каждый раз когда вы заводите Дуплицирующее устройство, до конца хода, целевое сущесвто становится копией любого сущесвта на поле боя, за исключением того что оно артифакт в дополнение к своим типам.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "45fa68a6897c4d176766cfea6cb86f38230a4900",
        "imageName": "faerie aerie",
        "layout": "normal",
        "multiverseid": 439570,
        "name": "Faerie Aerie",
        "nameRus": "Выводок фей",
        "number": "181",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Faerie Aerie, create two 1/1 blue Faerie Spy creature tokens with flying, haste, and \"Whenever this creature deals combat damage to a player, draw a card.\" Exile them at the beginning of the next end step.",
        "textRus": "Когда вы заводите Выводок фей, создайте две фишки синего существа Фея Шпион 1/1 с полетом, ускорением и способностью \"Когда это сущесвто наносит боевые повреждения игроку, возьмите карту.\" Изгоните их в начале завершающего шага.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "11a34de031d88abeb4d5b85092fca2aac1315685",
        "imageName": "genetic recombinator",
        "layout": "normal",
        "multiverseid": 439571,
        "name": "Genetic Recombinator",
        "nameRus": "Генетический рекомбинатор",
        "number": "182",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Genetic Recombinator, up to two target creatures each get +2/+2 until end of turn.",
        "textRus": "Когда вы заводите Генетический рекомбинатор, до двух целевых сущесвт погут получть +2/+2 до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "3286a006834fc79c1fe792ca28cd03951c0f695f",
        "imageName": "gift horse",
        "layout": "normal",
        "multiverseid": 439572,
        "name": "Gift Horse",
        "nameRus": "Лошадка в подарок",
        "number": "183",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Gift Horse, roll two six-sided dice. Create a number of 1/1 red Goblin creature tokens equal to the difference between those results.",
        "textRus": "Когда вы заводите Лошадку в подарок, бросьте два шестигранных кубика. Создайте фишки красного существа Гоблин 1/1 в количестве равном разнице между результатами.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "5b5e87aa5bfdb98195d231ec6571ba1782ef717a",
        "imageName": "gnomeball machine",
        "layout": "normal",
        "multiverseid": 439573,
        "name": "Gnomeball Machine",
        "nameRus": "Машина гномошаров",
        "number": "184",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Gnomeball Machine, create two 1/1 colorless Gnome artifact creature tokens.",
        "textRus": "Когда вы заводите Машину гномошаров, создайте две фишки существа 1/1 бесцветный артифактиный Гном.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "bb340eb8e2a983cc704f21db5d7b8fffb5d3dc51",
        "imageName": "goblin slingshot",
        "layout": "normal",
        "multiverseid": 439574,
        "name": "Goblin Slingshot",
        "nameRus": "Гоблинская рогатка",
        "number": "185",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Goblin Slingshot, creatures you control get +2/+0 and gain trample until end of turn.",
        "textRus": "Когда вы заводите Гоблинскую рогатку, существа под вашим контролем получают +2/+0 и пробивной удар до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "8ca215b0f3709659d4194ad19910f38bc87a2e21",
        "imageName": "guest list",
        "layout": "normal",
        "multiverseid": 439575,
        "name": "Guest List",
        "nameRus": "Список гостей",
        "number": "186",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Guest List, target creature gets -X/-X until end of turn, where X is the number of creature cards in its controller's graveyard.",
        "textRus": "Когда вы заводите Список гостей, целевое сущесвто получает -Х/-Х до конца хода, где Х это количесвто карт на кладбище контролирющего его игрока.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "a261ffa964673aeb5319c86a1d115b724ba9436a",
        "imageName": "hard hat area",
        "layout": "normal",
        "multiverseid": 439576,
        "name": "Hard Hat Area",
        "nameRus": "Касочная зона",
        "number": "187",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Hard Hat Area, roll two six-sided dice. Hard Hat Area assembles a number of Contraptions equal to the difference between those results. (To assemble a Contraption, put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда вы заводите Касочную зону, бросьте два шестигранных кубика. Касочная зона собирает Штуковины в количестве равном разнице межде выпавшими результатами. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "d79d140740c5e73dcbb7beee8720337e64fe45ae",
        "imageName": "head banger",
        "layout": "normal",
        "multiverseid": 439577,
        "name": "Head Banger",
        "nameRus": "Бах-башка",
        "number": "188",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Head Banger, target creature must be blocked this turn if able.",
        "textRus": "Когда вы заводите Бах-башку, целевое существо должно быть заблокировано в этот ход если это возможно.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "4b778397f643a33564b8d210cdfb60f8530eae88",
        "imageName": "hypnotic swirly disc",
        "layout": "normal",
        "multiverseid": 439578,
        "name": "Hypnotic Swirly Disc",
        "nameRus": "Гипнотический спиральный диск",
        "number": "189",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Hypnotic Swirly Disc, target player puts the top X cards of his or her library into his or her graveyard, where X is the number of creatures you control.",
        "textRus": "Когда вы заводите Гипнотический спиральный диск, целевой игрок кладет Х врехних карт из его библиотеки на его кладбище, где Х это количесвто существ под вашим контролем.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "76bbf758a65bb7da70fbaec1f226701a8e63fe8b",
        "imageName": "inflation station",
        "layout": "normal",
        "multiverseid": 439579,
        "name": "Inflation Station",
        "nameRus": "Надувная станция",
        "number": "190",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Inflation Station, target creature gets +3/+3 until end of turn.",
        "textRus": "Когда вы заводите Надувную станцию, целевеое сущесвто получает +3/+3 до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "2fb35ff5f2a9aac379ab71dcd7f3e0339b97a7d2",
        "imageName": "insufferable syphon",
        "layout": "normal",
        "multiverseid": 439580,
        "name": "Insufferable Syphon",
        "nameRus": "Неудовлетворительный сифон",
        "number": "191",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Insufferable Syphon, target player discards a card.",
        "textRus": "Когда вы заводите Неудовлетворительный сифон, целевой игрок сбрасывает карту.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "b8310818757084878f3fdb40cbdc72f38afce16c",
        "imageName": "jamming device",
        "layout": "normal",
        "multiverseid": 439581,
        "name": "Jamming Device",
        "nameRus": "Вареньеварка",
        "number": "192",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Jamming Device, creatures target player controls get -1/-1 until end of turn.",
        "textRus": "Когда вы заводите Вареньеварку, существа под контролем оппонента получают -1/-1 до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "a002f184ee29f2c2fed3bc1d8c4adfdd024945f6",
        "imageName": "lackey recycler",
        "layout": "normal",
        "multiverseid": 439582,
        "name": "Lackey Recycler",
        "nameRus": "Лакей переработчик",
        "number": "193",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Lackey Recycler, put target creature card from your graveyard on top of your library.",
        "textRus": "Когда вы заводите Лакея переработчика, положите карту целевого существа из вашего кладбища наверх вашей колоды. ",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "f4bdd792e0fa796f13f7c5c6bf8f8232b4d6482b",
        "imageName": "mandatory friendship shackles",
        "layout": "normal",
        "multiverseid": 439583,
        "name": "Mandatory Friendship Shackles",
        "nameRus": "Обязательные кандалы дружбы",
        "number": "194",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Mandatory Friendship Shackles, target creature gets -1/-1 until end of turn.",
        "textRus": "Когда вы заводите Обязательные кандалы дружбы, целевое сущесвто получает -1/-1 до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "bc86d080700a03e006ca9b9bf494729a2a7ff543",
        "imageName": "neural network",
        "layout": "normal",
        "multiverseid": 439584,
        "name": "Neural Network",
        "nameRus": "Нейронная сеть",
        "number": "195",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Neural Network, gain control of target creature an opponent controls with power less than or equal to the number of creature cards in its controller's graveyard until end of turn. Untap that creature. It gains haste until end of turn.",
        "textRus": "Когда вы заводите Нейронную сеть, получите контроль на целевым сущесвтом под контролем оппонента с силой меньше или равной чем число карт сущесвт у на кладбище контролирующего его игрока. Разверните это сущесвто. Оно получает ускорение до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "fcd4f74f82e7b4a8a7dd192042e8134b29848a7b",
        "imageName": "oaken power suit",
        "layout": "normal",
        "multiverseid": 439585,
        "name": "Oaken Power Suit",
        "nameRus": "Дубовая силовая броня",
        "number": "196",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Oaken Power Suit, target creature gets +X/+X until end of turn, where X is the greatest power among creatures you control.",
        "textRus": "Когда вы заводите Дубовую силовую броню, целевое сущесвто получает +Х/+Х до конца хода, где Х наивысшее значение силы среди сущесвт под вашим контролем.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "be9420da2b8d14f99b987c9e88247da1077443fc",
        "imageName": "optical optimizer",
        "layout": "normal",
        "multiverseid": 439586,
        "name": "Optical Optimizer",
        "nameRus": "Оптический оптимизатор",
        "number": "197",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Optical Optimizer, until end of turn, target creature becomes an artifact in addition to its other types and gains \"{T}: Draw a card.\"",
        "textRus": "Когда вы заводите Оптический оптимизатор, до конца хода, целевое сущесвто стновится артифактным в дополнениек своим другим типам и получает \"{T}: Возьмите карту.\"",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "b86d7223619c1b91494d35170d00c4f01c890d7d",
        "imageName": "pet project",
        "layout": "normal",
        "multiverseid": 439587,
        "name": "Pet Project",
        "nameRus": "Домашний проект",
        "number": "198",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Pet Project, put target creature card from an opponent's graveyard onto the battlefield under your control.",
        "textRus": "Когда вы заводите Домашний проект, положите карту целевого существа с кладбища вашего оппонента на поле боя под ваш контроль.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "eac42cbd74f74c5307a288c261ad840788638928",
        "imageName": "quick-stick lick trick",
        "layout": "normal",
        "multiverseid": 439588,
        "name": "Quick-Stick Lick Trick",
        "nameRus": "Трюк с длинным липким языком",
        "number": "199",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Quick-Stick Lick Trick, target creature gets +1/+1 and gains lifelink until end of turn.",
        "textRus": "Когда вы заводите Трюк с длинным липким языком, целевое сущесвтопоучает +1/+1 и цепь жизни док конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "da709435393afbd8e03471b85a31f9930d6464f8",
        "imageName": "rapid prototyper",
        "layout": "normal",
        "multiverseid": 439589,
        "name": "Rapid Prototyper",
        "nameRus": "Быстрый прототип",
        "number": "200",
        "rarity": "Mythic Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Rapid Prototyper, create an X/X colorless Construct artifact creature token, where X is the number of artifacts you control.",
        "textRus": "Когда вы заводите Быстрый прототип, создайте фишку бесцветного артифактного сущеста Конструкт Х/Х, где Х это число артифактов под вашим контролем.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "9308e3f80e38020757b82aca527c412fab10d10f",
        "imageName": "record store",
        "layout": "normal",
        "multiverseid": 439590,
        "name": "Record Store",
        "nameRus": "Хранилище записей",
        "number": "201",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Record Store, look at the top X cards of your library, where X is the number of artifacts you control. Put one of those cards into your hand and the rest on the bottom of your library in a random order.",
        "textRus": "Когда вы заводите Хранилище записей, посмотрите Х верхних карт вашей колоды, где Х это число артифактов под вашимконтролем. Положите одну из них в вашу руку, а остальные вниз вашей колоды в случайном порядке.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "id": "0c0838789fc73e5b1dd414bea0ce54b3e4bcd13d",
        "imageName": "refibrillator",
        "layout": "normal",
        "multiverseid": 439591,
        "name": "Refibrillator",
        "nameRus": "Рефибрилятор",
        "number": "202",
        "rarity": "Rare",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Refibrillator, return target creature card from your graveyard to your hand.",
        "textRus": "Когда вы заводите Рефибрилятор, верните карту целевого сущесвта с вашего кладбища в вашу руку.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Chuck Lukacs",
        "cmc": 0,
        "colorIdentity": [
            "G"
        ],
        "id": "dba4f52d8840a09c51d1fd98ef1aaf7a51daf17a",
        "imageName": "sap sucker",
        "layout": "normal",
        "multiverseid": 439592,
        "name": "Sap Sucker",
        "nameRus": "Сокосос",
        "number": "203",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Sap Sucker, add {G} to your mana pool. Until end of turn, this mana doesn't empty from your mana pool as steps and phases end.",
        "textRus": "Когда вы заводите Сокосос, добавьте {G} в ваше хранилище маны. До конца хода, эта мана не исчезает из вашего хранилища маны в конце фаз хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Crossbreed Labs"
    },
    {
        "artist": "Franz Vohwinkel",
        "cmc": 0,
        "id": "a8913b8c450ef8fee4c1edbb57b7fb86d3c7ccec",
        "imageName": "sundering fork",
        "layout": "normal",
        "multiverseid": 439593,
        "name": "Sundering Fork",
        "nameRus": "Отбойный камертон",
        "number": "204",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Sundering Fork, destroy target artifact.",
        "textRus": "Когда вы заводите Отбойный камертон, уничтожьте целевой артифакт.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "League of Dastardly Doom"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "dadd12c062603976c5b20d45e5272d42c4f7d1d7",
        "imageName": "targeting rocket",
        "layout": "normal",
        "multiverseid": 439594,
        "name": "Targeting Rocket",
        "nameRus": "Нацеливание ракеты",
        "number": "205",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Targeting Rocket, target creature blocks this turn if able.",
        "textRus": "Когда вы заводите Нацеливание ракеты, целевое существо блокирует в этом ходу, если это возможно.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "9a0b37b8a7ac6cd22dc3ea83132281b099f3b951",
        "imageName": "thud-for-duds",
        "layout": "normal",
        "multiverseid": 439595,
        "name": "Thud-for-Duds",
        "nameRus": "Стук-по-Рвань",
        "number": "206",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Thud-for-Duds, roll two six-sided dice. Thud-for-Duds deals damage to target creature equal to the difference between those results.",
        "textRus": "Когда вы заводите Стук-по-Рвань, бросьте два шестигранных кубика. Стук-по-Рвань наносит повреждения целевому сущесвту равные разнице между полученными результатами.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "d7a45c6406c2af46df8bb871c1a4029a88dd9e67",
        "imageName": "top-secret tunnel",
        "layout": "normal",
        "multiverseid": 439596,
        "name": "Top-Secret Tunnel",
        "nameRus": "Сверх секретный тунель",
        "number": "207",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Top-Secret Tunnel, target creature can't be blocked this turn.",
        "textRus": "Когда вы заводите Сверх секретный тунель, целевое сущесвто не может быть заблокировано в этот ход.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "c6c6a2b86a9cd2c3b0faa03fd9fc7ea27470dc4d",
        "imageName": "tread mill",
        "layout": "normal",
        "multiverseid": 439597,
        "name": "Tread Mill",
        "nameRus": "Беговая дорожка",
        "number": "208",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Tread Mill, until end of turn, target creature gets +1/+2, gains vigilance, and becomes an artifact in addition to its other types.",
        "textRus": "Когда вы заводите Беговую дорожку, до конца хода, целевое сущесвто получает +1/+2, бдительность и становится артифактным в доплнение к своим другим типам.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "Steve Prescott",
        "cmc": 0,
        "id": "040cd82d38b6a494412debf1d10f399324d463ee",
        "imageName": "turbo-thwacking auto-hammer",
        "layout": "normal",
        "multiverseid": 439598,
        "name": "Turbo-Thwacking Auto-Hammer",
        "nameRus": "Автомолот турботумаков",
        "number": "209",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Turbo-Thwacking Auto-Hammer, target creature gains double strike until end of turn.",
        "textRus": "Когда вы заводите Автомолот турботумаков, целевое сущесвто получает двойной удар до конца хода.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Goblin Explosioneers"
    },
    {
        "artist": "Ralph Horsley",
        "cmc": 0,
        "id": "925e4181932af33d72a85a11582cb5f120e030b8",
        "imageName": "twiddlestick charger",
        "layout": "normal",
        "multiverseid": 439599,
        "name": "Twiddlestick Charger",
        "nameRus": "Твидовове зарядное устройство",
        "number": "210",
        "rarity": "Common",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Twiddlestick Charger, tap or untap target creature.",
        "textRus": "Когда вы заводите Твидовове зарядное устройство, поверните или разверните целевое сущесвто.",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Agents of S.N.E.A.K."
    },
    {
        "artist": "Jason Felix",
        "cmc": 0,
        "id": "62f8f9fafbc6f5c3560fd2c7e189514c22ae976d",
        "imageName": "widget contraption",
        "layout": "normal",
        "multiverseid": 439600,
        "name": "Widget Contraption",
        "nameRus": "Взаимозаменяемость",
        "number": "211",
        "rarity": "Uncommon",
        "subtypes": [
            "Contraption"
        ],
        "text": "Whenever you crank Widget Contraption, it assembles a Contraption. (Put the top card of your Contraption deck face up onto one of your sprockets.)",
        "textRus": "Когда вы заводите Взаимозаменяемость, она собирает Штуковину. (Для сборки Штуковины, положите верхнию карты вашей колоды Штуковин лицом вверх на одну из ваших цепных звездочек.)",
        "type": "Artifact — Contraption",
        "types": [
            "Artifact"
        ],
        "watermark": "Order of the Widget"
    },
    {
        "artist": "John Avon",
        "cmc": 0,
        "colorIdentity": [
            "W"
        ],
        "id": "501440ed1f0814e9ba812ad9f36ff69053fd0b42",
        "imageName": "plains2",
        "layout": "normal",
        "multiverseid": 439601,
        "name": "Plains",
        "nameRus": "Ранины",
        "number": "212",
        "rarity": "Basic Land",
        "subtypes": [
            "Plains"
        ],
        "supertypes": [
            "Basic"
        ],
        "type": "Basic Land — Plains",
        "types": [
            "Land"
        ],
        "watermark": "White"
    },
    {
        "artist": "John Avon",
        "cmc": 0,
        "colorIdentity": [
            "U"
        ],
        "id": "c745293c1f00ec9a2f78155322b74dc85ec4f3cb",
        "imageName": "island2",
        "layout": "normal",
        "multiverseid": 439602,
        "name": "Island",
        "nameRus": "Остров",
        "number": "213",
        "rarity": "Basic Land",
        "subtypes": [
            "Island"
        ],
        "supertypes": [
            "Basic"
        ],
        "type": "Basic Land — Island",
        "types": [
            "Land"
        ],
        "watermark": "Blue"
    },
    {
        "artist": "John Avon",
        "cmc": 0,
        "colorIdentity": [
            "B"
        ],
        "id": "7210d09e2bd2613adb39795e0f216cc20c6dba0c",
        "imageName": "swamp2",
        "layout": "normal",
        "multiverseid": 439603,
        "name": "Swamp",
        "nameRus": "Болото",
        "number": "214",
        "rarity": "Basic Land",
        "subtypes": [
            "Swamp"
        ],
        "supertypes": [
            "Basic"
        ],
        "type": "Basic Land — Swamp",
        "types": [
            "Land"
        ],
        "watermark": "Black"
    },
    {
        "artist": "John Avon",
        "cmc": 0,
        "colorIdentity": [
            "R"
        ],
        "id": "83345253cf2ac7c3ea2fce2fa186f7afd6a8447c",
        "imageName": "mountain2",
        "layout": "normal",
        "multiverseid": 439604,
        "name": "Mountain",
        "nameRus": "Гора",
        "number": "215",
        "rarity": "Basic Land",
        "subtypes": [
            "Mountain"
        ],
        "supertypes": [
            "Basic"
        ],
        "type": "Basic Land — Mountain",
        "types": [
            "Land"
        ],
        "watermark": "Red"
    },
    {
        "artist": "John Avon",
        "cmc": 0,
        "colorIdentity": [
            "G"
        ],
        "id": "70523a1e8264d75a44d6d18af66f813dda4e7960",
        "imageName": "forest2",
        "layout": "normal",
        "multiverseid": 439605,
        "name": "Forest",
        "nameRus": "Лес",
        "number": "216",
        "rarity": "Basic Land",
        "subtypes": [
            "Forest"
        ],
        "supertypes": [
            "Basic"
        ],
        "type": "Basic Land — Forest",
        "types": [
            "Land"
        ],
        "watermark": "Green"
    }
];


/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\" class=\"form-control\">\n</div>\n<h2>{{ hero.name | uppercase }} Details</h2>\n<div><span>id: </span>{{hero.id}}</div>\n<div><span>name: </span>{{hero.name}}</div>\n<h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_heroes__ = __webpack_require__("../../../../../src/app/mock-heroes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = (function () {
    function HeroesComponent() {
        this.heroes = __WEBPACK_IMPORTED_MODULE_1__mock_heroes__["a" /* HEROES */];
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes',
            template: __webpack_require__("../../../../../src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-heroes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "../../../../../src/app/translate/translate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/translate/translate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\">\n      <p>\n          <img src=\"http://mythicspoiler.com/ust/cards/{{getImageName(card)}}.jpg\" width=\"100%\">\n      </p>\n  </div>\n  <div class=\"col\">\n      <h4>{{getName(card)}}</h4>\n      <p *ngFor=\"let line of getTextLinesRus(card)\">\n        {{line}}\n      </p>\n      <h4>{{card.name}}</h4>\n      <p *ngFor=\"let line of getTextLines(card)\">\n        {{line}}\n      </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/translate/translate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_service__ = __webpack_require__("../../../../../src/app/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TranslateComponent = (function () {
    function TranslateComponent(route, location, cardService) {
        this.route = route;
        this.location = location;
        this.cardService = cardService;
    }
    TranslateComponent.prototype.ngOnInit = function () {
        this.getCard();
    };
    TranslateComponent.prototype.getCard = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.card = this.cardService.getCard(id);
    };
    TranslateComponent.prototype.getImageName = function (card) {
        return this.cardService.getImageName(card);
    };
    TranslateComponent.prototype.getTextLines = function (card) {
        if (!card.text)
            return [];
        return card.text.split('\n');
    };
    TranslateComponent.prototype.getTextLinesRus = function (card) {
        if (!card.text)
            return [];
        if (card.textRus)
            return card.textRus.split('\n');
        return card.text.split('\n');
    };
    TranslateComponent.prototype.getName = function (card) {
        return card.nameRus ? card.nameRus : card.name;
    };
    TranslateComponent.prototype.getNextCardId = function (card) {
        return card.multiverseid + 1;
    };
    TranslateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-translate',
            template: __webpack_require__("../../../../../src/app/translate/translate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/translate/translate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__card_service__["a" /* CardService */]])
    ], TranslateComponent);
    return TranslateComponent;
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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