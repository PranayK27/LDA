import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import ButtonComponent from "./button.component";

@NgModule({
  imports: [CommonModule, ButtonComponent],
  exports: [ButtonComponent],
  declarations: [],
})
export class ButtonModule {}
