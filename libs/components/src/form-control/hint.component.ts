import { Directive, HostBinding } from "@angular/core";

// Increments for each instance of this component
let nextId = 0;

@Directive({
  selector: "lda-hint",
  host: {
    class: "tw-text-muted tw-font-normal tw-inline-block tw-mt-1",
  },
})
export class LdaHintComponent {
  @HostBinding() id = `lda-hint-${nextId++}`;
}
