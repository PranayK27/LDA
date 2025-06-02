import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  // Needs to be a different name to the CLI template button
  selector: 'lda-storybook-button',
  imports: [],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [class]="classes"
      [style]="{ 'background-color': backgroundColor }"
    >
      @if(icon){
      <i class="ti-arrow-left"></i>
      }
      {{ label }}
    </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Button with icon
   *
   */
  @Input()
  icon = false

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
