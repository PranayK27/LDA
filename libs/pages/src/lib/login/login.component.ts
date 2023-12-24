import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../services/loginService";
import {Observable, Subscription} from "rxjs";
import {Login} from "./login";

@Component({
  selector: 'lda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  displayCred = false;
  logins= this.loginService.getDataList();
  values: Subscription | undefined;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }



  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
    this.displayCred = true;
    this.logins.subscribe(value => value[0]);
  }

}
