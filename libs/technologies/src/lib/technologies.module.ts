import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { CategoryDetailsComponent } from './technologies/category-details/category-details.component';
import {ListComponent} from "./technologies/list/list.component";
import {MatCardModule} from "@angular/material/card";
import {PagesModule} from "../../../pages/src/lib/pages.module";

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    MatCardModule,
    PagesModule,
  ],
  declarations: [
    ListComponent,
    CategoryDetailsComponent
  ],
  exports: [],
})
export class TechnologiesModule {}
