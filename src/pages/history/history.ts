import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';
import { TestResultsProvider } from '../../providers/test-results/test-results';

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  tests: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public testResults: TestResultsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.testResults.getTests(window.localStorage.getItem("token"), window.localStorage.getItem("userId"))
      .map(res => res.json())
      .subscribe(res => {
                  this.tests = res.filter(function(test) {
                    return test.userId === window.localStorage.getItem("userId");
                  });
                  console.log(this.tests);
                },
                error => {
                  alert("Warning Will Robinson!");
                }
      )
  }

  goToResults(test) {
    this.navCtrl.push(ResultsPage, {
      test: test,
      showHome: false
    });
  }
}
