import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rely-on',
  templateUrl: './rely-on.component.html',
  styleUrls: ['./rely-on.component.css']
})
export class RelyOnComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
