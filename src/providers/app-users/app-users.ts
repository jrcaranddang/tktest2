import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUsersProvider {
  baseUrl: string = "http://for-students-jbrownssf.c9users.io:8080/api";
  path: string = "/AppUsers";
  
  constructor(public http: Http) {
    console.log('Hello AppUsersProvider Provider');
  }

  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path, 
      newUserData
    );
  }
  
  login(user) {
    return this.http.post(
      this.baseUrl + this.path + "/login", 
      user
    );
  }
  
  logout(token) {
    return this.http.post(
      this.baseUrl + this.path + "/logout" + "?access_token=" + token,
        {} // You have to pass an empty object because this is using the post method and it is expecting two parameters of this function call
    );
  }
}
