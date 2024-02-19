import { NgModule } from "@angular/core";

import { SharedModule } from "../shared";

import { FormControlComponent } from "./form-control.component";
import {LdaHintComponent} from "./hint.component";
import {LdaLabel} from "./label.directive";

@NgModule({
  imports: [SharedModule],
  declarations: [FormControlComponent, LdaLabel, LdaHintComponent],
  exports: [FormControlComponent, LdaLabel, LdaHintComponent],
})
export class FormControlModule {}
