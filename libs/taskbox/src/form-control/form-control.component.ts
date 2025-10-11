// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { NgClass } from "@angular/common";
import { Component, ContentChild, HostBinding, Input } from "@angular/core";
import { FormControlAbstraction } from '../models/FormControlAbstraction';

@Component({
  selector: "lda-form-control",
  templateUrl: "form-control.component.html",
  standalone: true,
  imports: [NgClass],
})
export class FormControlComponent {
  @Input() label: string;

  private _inline = false;
  @Input() get inline() {
    return this._inline;
  }
  set inline(value: boolean | "") {
    this._inline = coerceBooleanProperty(value);
  }

  private _disableMargin = false;
  @Input() set disableMargin(value: boolean | "") {
    this._disableMargin = coerceBooleanProperty(value);
  }
  get disableMargin() {
    return this._disableMargin;
  }

  @ContentChild(FormControlAbstraction) protected formControl: FormControlAbstraction;

  @HostBinding("class") get classes() {
    return []
      .concat(this.inline ? ["tw-inline-block", "tw-mr-4"] : ["tw-block"])
      .concat(this.disableMargin ? [] : ["tw-mb-4"]);
  }

  constructor() {}

  get required() {
    return this.formControl.required;
  }

  get hasError() {
    return this.formControl.hasError;
  }

  get error() {
    return this.formControl.error;
  }

  get displayError() {
    switch (this.error[0]) {
      case "required":
        return this.formControl.required;
      default:
        // Attempt to show a custom error message.
        if (this.error[1]?.message) {
          return this.error[1]?.message;
        }

        return this.error;
    }
  }
}
