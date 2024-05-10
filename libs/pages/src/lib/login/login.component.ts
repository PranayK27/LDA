import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ListApiService} from "../../../../technologies/src/lib/service/list-api.service";
import {LoginService} from "../services/loginService";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

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
  @Output() userLoggedIn: string | undefined;

  constructor(private readonly router: Router,
              private readonly listService: ListApiService,
              private readonly loginService: LoginService,
              private readonly store: Store) {
    this.store.subscribe((store) => console.log(store));
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.username, this.loginForm.value.password);
    } else {
      this.router.navigate(["/tech/internalserver"]);
    }
  }

}
