import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestResultsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TestResultsProvider {
  baseUrl: string = "http://for-students-jbrownssf.c9users.io:8080/api";
  path: string = "/TestResults";

  constructor(public http: Http) {
    console.log('Hello TestResultsProvider Provider');
  }

  saveTest(test, token) {
    return this.http.post(
        this.baseUrl + this.path + "?access_token=" + token,
          test
      );
  }

  getTests(token, userId) {
    return this.http.get(
        // this.baseUrl + this.path + '?filter[where][userId]=' + userId + "?access_token=" + token
        this.baseUrl + this.path + '?filter%7B%22where%22%3A%7B%22userId%22%3A%22' + userId + "%22%7D%7D&access_token=" + token
        // this.baseUrl + this.path + "?access_token=" + token
      );
  }
}
