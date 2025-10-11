import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ListApiService} from "../../../../technologies/src/lib/service/list-api.service";
import {LoginService} from "../services/loginService";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import ButtonComponent from "../../../../taskbox/src/button/button.component";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'lda-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ButtonComponent,
    ReactiveFormsModule
  ],
  standalone: true
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
              protected readonly auth: AuthService,
              private readonly store: Store) {
    this.store.subscribe((store) => console.log(store));
    console.log(auth.getToken());
  }

  ngOnInit() {
    this.loginForm = new UntypedFormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      console.log(this.loginForm.value.username, this.loginForm.value.password);
      this.auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: res => {
          this.auth.saveToken(res.token);
          this.router.navigate(["/tech/dashboard"]);
        },
        error: err => alert("Invalid Credentials!")
      });
    } else {
      this.router.navigate(["/tech/internalserver"]);
    }
  }

}
