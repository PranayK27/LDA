import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Component, ContentChild, HostBinding, Input } from "@angular/core";

import { LdaFormControlAbstraction } from "./form-control.abstraction";

@Component({
  selector: "lda-form-control",
  templateUrl: "form-control.component.html",
})
export class FormControlComponent {
  @Input() label: string | undefined;

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

  @ContentChild(LdaFormControlAbstraction) protected formControl: LdaFormControlAbstraction | undefined;

  @HostBinding("class") get classes() {
    return []
      .concat(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.inline ? ["tw-inline-block", "tw-mr-4"] : ["tw-block"])
      .concat(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.disableMargin ? [] : ["tw-mb-6"]);
  }

  constructor() { /* TODO document why this constructor is empty */ }

  protected get labelClasses() {
    return [
      "tw-transition",
      "tw-select-none",
      "tw-mb-0",
      "tw-inline-flex",
      "tw-items-baseline",
    ].concat(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.formControl.disabled ? "tw-cursor-auto" : "tw-cursor-pointer");
  }

  protected get labelContentClasses() {
    return ["tw-inline-flex", "tw-flex-col", "tw-font-semibold"].concat(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.formControl.disabled ? "tw-text-muted" : "tw-text-main",
    );
  }

  get required() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.formControl.required;
  }

  get hasError() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.formControl.hasError;
  }

  get error() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.formControl.error;
  }

  get displayError() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    switch (this.error[0]) {
      case "required":
        return "inputRequired";
      default:
        // Attempt to show a custom error message.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (this.error[1]?.message) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return this.error[1]?.message;
        }

        return this.error;
    }
  }
}
