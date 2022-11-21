import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { CategoryDetailsComponent } from './technologies/category-details/category-details.component';
import {MatCardModule} from "@angular/material/card";
import {PagesModule} from "@lda/pages";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ButtonModule} from "primeng/button";

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ButtonModule,
    PagesModule
  ],
  declarations: [
    CategoryDetailsComponent,
  ],
  exports: [],
})
export class TechnologiesModule {}
