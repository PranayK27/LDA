import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import ButtonComponent from '../../../../taskbox/src/button/button.component';

@Component({
  selector: 'lda-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [
    ButtonComponent
  ],
  standalone: true
})
export class RegistrationComponent {
  user = { username: '', email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register(this.user).subscribe({
      next: () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: err => alert('Registration failed')
    });
  }

}
