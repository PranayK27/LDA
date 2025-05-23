import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button';
import PageComponent from "../pages/page.component";
import HeaderComponent from "../header/header.component";

@NgModule({
  imports: [CommonModule, ButtonModule, PageComponent, HeaderComponent],
  exports: [
    ButtonModule,
    PageComponent,
    HeaderComponent
  ],
  declarations: []
})
export class ComponentsModule {}
