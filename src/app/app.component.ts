import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OcrPostFinal';

  constructor() {
const firebaseConfig = {
    apiKey: "AIzaSyCT7OfXNwzd74wS2iUJNINZf4fu2lF2_ko",
    authDomain: "angulartest-ebd5a.firebaseapp.com",
    databaseURL: "https://angulartest-ebd5a.firebaseio.com",
    projectId: "angulartest-ebd5a",
    storageBucket: "gs://angulartest-ebd5a.appspot.com",
    messagingSenderId: "887457910308",
    appId: "1:887457910308:web:47c1aece709d7fb6"
  };

  firebase.initializeApp(firebaseConfig);
  }
}


