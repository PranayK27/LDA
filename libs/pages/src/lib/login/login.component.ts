import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../services/loginService";
import {Observable} from "rxjs";
import {Login} from "./login";

@Component({
  selector: 'lda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  displayCred = false;

  constructor(private loginService: LoginService) {
  }

  logins= this.loginService.getDataList();
// {
//     "id": 1,
//     "username": "admin",
//     "password": "pranay"
// }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

}
