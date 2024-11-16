import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lda-relay-on',
  template: `
    <div class="row m-t-30">
      <!-- Column -->
      @for (relay of relayOn; track relay.field) {
      <div class="col-md-4 wrap-feature1-box">
        <div class="card card-shadow" data-aos="fade-right" data-aos-duration="1200">
          <div class="card-body p-40 text-center">
            <div class="icon-space display-5">
              <i [class]="relay.icon"></i>
            </div>
            <h5 class="font-medium">{{relay.field}}</h5>
            <p class="m-t-20">
              {{relay.fieldText}}
            </p>
          </div>
        </div>
      </div>
      }

    </div>
  `,
  styles: [``]
})
export class RelayOnComponent  {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: 'Retargeting Market',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Fruitful Results',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: 'Instant Solutions',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

}
