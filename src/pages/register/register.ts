import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUsersProvider } from '../../providers/app-users/app-users';
import { LobbyPage } from '../lobby/lobby';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: any = {};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signupForm(form) {
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    
    this.appUsers.register(this.user)
      .map(res => res.json())
      .subscribe(res => {
                  // handle successful responses and decide what happens next
                  window.localStorage.setItem('token', res.token);
                  window.localStorage.setItem('userId', res.id);
                  this.navCtrl.setRoot(LobbyPage);
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
