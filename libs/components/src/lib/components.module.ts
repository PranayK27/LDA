import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button';
import PageComponent from "../pages/page.component";
import HeaderComponent from "../header/header.component";
import ButtonComponent from "../button/button.component";

@NgModule({
  imports: [CommonModule, ButtonModule, PageComponent],
  exports: [
    ButtonModule,
    PageComponent,
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class ComponentsModule {}
