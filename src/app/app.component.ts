import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(db: AngularFireDatabase){

  }
}
