"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var lobby_1 = require('../lobby/lobby');
/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResultsPage = (function () {
    function ResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.test = {};
        this.showHome = false;
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
        this.test = this.navParams.get("test");
        this.showHome = this.navParams.get("showHome");
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: [
                    'Avoiding',
                    'Accommodating',
                    'Compromising',
                    'Competing',
                    'Collaborating'
                ],
                datasets: [{
                        data: [
                            55,
                            70,
                            33,
                            65,
                            90
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                max: 100
                            }
                        }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    };
    ResultsPage.prototype.toLobby = function () {
        this.navCtrl.setRoot(lobby_1.LobbyPage);
    };
    __decorate([
        core_1.ViewChild('barCanvas')
    ], ResultsPage.prototype, "barCanvas");
    ResultsPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-results',
            templateUrl: 'results.html'
        })
    ], ResultsPage);
    return ResultsPage;
}());
exports.ResultsPage = ResultsPage;
