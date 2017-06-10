import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionPage } from '../pages/question/question';
import { HistoryPage } from '../pages/history/history';
import { ResultsPage } from '../pages/results/results';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { AppUsersProvider } from '../providers/app-users/app-users';
import { QuestionsProvider } from '../providers/questions/questions';
import { TestResultsProvider } from '../providers/test-results/test-results';

const injections: any[] = [
    MyApp,
    LobbyPage,
    QuestionPage,
    HistoryPage,
    ResultsPage,
    LandingPage,
    LoginPage,
    RegisterPage
];

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUsersProvider,
    QuestionsProvider,
    TestResultsProvider
  ]
})
export class AppModule {}
