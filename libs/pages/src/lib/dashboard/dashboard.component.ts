import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {Component} from "@angular/core";

@Component({
  selector: 'lda-dashboard',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h3>Welcome to Dashboard</h3>
      <button class="btn btn-danger" (click)="logout()">Logout</button>
    </div>
  `
})
export class DashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}

