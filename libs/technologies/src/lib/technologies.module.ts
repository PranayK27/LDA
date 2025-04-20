import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { CategoryDetailsComponent } from './technologies/category-details/category-details.component';
import {PagesModule} from "@lda/pages";
import {ListComponent} from "./technologies/list/list.component";
import {TechnologiesComponent} from "./technologies/technologies.component";
import {HttpClientModule} from "@angular/common/http";
import { SimpleNotificationsModule } from 'angular2-notifications';
import {ComponentsModule} from "@lda/common";

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    PagesModule,
    HttpClientModule,
    SimpleNotificationsModule,
    ComponentsModule,
    TechnologiesComponent,
    ListComponent,
  ],
  declarations: [
    CategoryDetailsComponent,
  ],
  exports: [],
})
export class TechnologiesModule {}
