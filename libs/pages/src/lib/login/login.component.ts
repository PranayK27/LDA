import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ListApiService} from "../../../../technologies/src/lib/service/list-api.service";
import {LoginService} from "../services/loginService";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'lda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  displayCred = false;
  logins= this.loginService.getDataList();
  values: Subscription | undefined;

  constructor(private fb: FormBuilder,
              private readonly router: Router,
              private readonly listService: ListApiService,
              private readonly loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Implement your login logic here
      this.router.navigate(['tech/list']);
      this.listService.getDataList();
      console.log('Login successful!', this.loginForm.value);
    } else {
      console.log('Invalid form');
    }
  }

}
