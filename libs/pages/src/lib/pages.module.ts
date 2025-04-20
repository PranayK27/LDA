import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ComponentsModule } from '@lda/common';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RegistrationComponent } from './registration/registration.component';
import {Page500Component} from "./page500/page500.component";
import {StoreModule} from "@ngrx/store";
import {pagesReducer} from "./+state/pages.reducer";
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./services/InMemoryDataService.service";
import {EffectsModule} from "@ngrx/effects";
import {PagesEffects} from "./+state/pages.effects";

@NgModule({
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterOutlet,
    SimpleNotificationsModule,
    ComponentsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forFeature('pages', pagesReducer),
    EffectsModule.forFeature([PagesEffects]),
  ],
  exports: [
    PagesRoutingModule,
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    Page500Component,

  ],
})
export class PagesModule {}
