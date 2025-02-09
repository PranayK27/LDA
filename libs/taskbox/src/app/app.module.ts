import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TaskModule} from "../task/task.module";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import InboxScreenComponent from "../task/inbox-screen.component";
import PureInboxScreenComponent from "../task/pure-inbox-screen.component";

@NgModule({
  declarations: [
    AppComponent,
    InboxScreenComponent,
    PureInboxScreenComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
        NgxsModule.forRoot([], {
           developmentMode: !environment.production,
     }),
   NgxsReduxDevtoolsPluginModule.forRoot(),
     NgxsLoggerPluginModule.forRoot({
         disabled: environment.production,
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
