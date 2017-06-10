"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var results_1 = require('../results/results');
/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
        this.tests = JSON.parse(window.localStorage.getItem("tests")) || [];
        console.log(this.tests);
    };
    HistoryPage.prototype.goToResults = function (test) {
        this.navCtrl.push(results_1.ResultsPage, {
            test: test,
            showHome: false
        });
    };
    HistoryPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-history',
            templateUrl: 'history.html'
        })
    ], HistoryPage);
    return HistoryPage;
}());
exports.HistoryPage = HistoryPage;
