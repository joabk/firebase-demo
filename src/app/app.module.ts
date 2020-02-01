import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { appConfig } from './configs/config.ts'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    //AngularFirestoreModule,
    AngularFireModule.initializeApp(
      //appConfig.firestoreLogin
      appConfig.firestore
    ),
    AngularFireDatabaseModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
