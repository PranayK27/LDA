import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8081/tech/api/auth';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(username: string, password: string): Observable<{ token: string }> {
    const loginData= {username, password};
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, loginData).pipe(
      tap({
        next: (response) => {
          console.log('✅ Backend response:', response);
          if (response && response.token) {
            console.log('✅ Saving token to sessionStorage:', response.token);
            sessionStorage.setItem('token', response.token);
          } else {
            console.error('❌ No token found in response');
          }
        },
        error: (err) => console.error('❌ Login failed:', err)
      })
    );
  }

  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.clear();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
