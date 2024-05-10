import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lda-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrl: './sub-heading.component.css'
})
export class SubHeadingComponent {
  @Input() showTechUsage: boolean | null = false;
  @Output() toggleTechUsage = new EventEmitter<void>();

  constructor() {
  }

}
