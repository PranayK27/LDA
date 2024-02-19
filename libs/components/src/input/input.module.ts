import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LdaInputDirective } from "./input.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [LdaInputDirective],
  exports: [LdaInputDirective],
})
export class InputModule {}
