import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { HistoryPage } from '../history/history';
import { LandingPage } from '../landing/landing';
import { AppUsersProvider } from '../../providers/app-users/app-users';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  token: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public appUsers: AppUsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

  takeTest() {
    this.navCtrl.push(QuestionPage);
  }
  
  viewHistory() {
    this.navCtrl.push(HistoryPage);
  }
  
  logoutUser() {
    // this.token = window.localStorage.getItem('token');
    // console.log(this.token);
    // this.appUsers.logout(this.token)
    this.appUsers.logout(window.localStorage.getItem('token'))
      .map(res => res.json())
      .subscribe(res => {
                  // handle successful responses and decide what happens next
                  // if(res === 204) {
                    this.navCtrl.setRoot(LandingPage);
                  // }
                },
                error => {
                  //inform the user of any known problems that arose, otherwise give a generic failed message
                  switch(error.status) {
                    case 404:
                      alert("not found");
                      break;
                    case 422:
                      alert("email is already taken");
                      break;
                    case 500:
                      alert("the world has ended, or the server just isn't online");
                      break;
                }
      })
  }
}
