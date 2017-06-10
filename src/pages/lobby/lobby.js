"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var question_1 = require('../question/question');
var history_1 = require('../history/history');
/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LobbyPage = (function () {
    function LobbyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LobbyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LobbyPage');
    };
    LobbyPage.prototype.takeTest = function () {
        this.navCtrl.push(question_1.QuestionPage);
    };
    LobbyPage.prototype.viewHistory = function () {
        this.navCtrl.push(history_1.HistoryPage);
    };
    LobbyPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-lobby',
            templateUrl: 'lobby.html'
        })
    ], LobbyPage);
    return LobbyPage;
}());
exports.LobbyPage = LobbyPage;
