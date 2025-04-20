import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from '../shared/User';
import ButtonComponent from "../button/button.component";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'lda-storybook-header',
  template: `
    <header>
      <div class="storybook-header">
        <div (click)="redirect.emit($event)">
          <h1>LDA</h1>
        </div>
        <div>
          <div *ngIf="user">
          <span class="welcome">
            Welcome, <b>{{ user.name }}</b
          >!
          </span>
<!-- TODO: show logout if user is available so remove the negation on log out when login module is done.-->
<!-- TODO: move to taskbox and discard this module -->
            <lda-storybook-button
              *ngIf="!user"
              size="small"
              (onClick)="onLogout.emit($event)"
              label="Log out"
            ></lda-storybook-button>
          </div>
          <div *ngIf="!user">
            <lda-storybook-button
              *ngIf="!user"
              size="small"
              class="margin-left"
              (onClick)="onLogin.emit($event)"
              label="Log in"
            ></lda-storybook-button>
            <lda-storybook-button
              *ngIf="!user"
              size="small"
              class="margin-left"
              (onClick)="onCreateAccount.emit($event)"
              label="Sign up"
            ></lda-storybook-button>
          </div>
        </div>
      </div>
    </header>`,
  styleUrls: ['./header.css'],
  imports: [
    ButtonComponent,
    NgIf,
    ButtonComponent
  ]
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  redirect = new EventEmitter<Event>();

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
