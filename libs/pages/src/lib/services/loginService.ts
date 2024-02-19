import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {Login} from "../login/login";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8081/tech/api/v2';

  constructor(public http: HttpClient, private readonly router: Router) { }

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  login(username: string, password: string): void {
    // Send login request to backend
    this.http.post(`${this.baseUrl}/login`, {username, password})
      .pipe(
        retry(3), // Retry the request up to 3 times
        catchError((error) => {
          this.router.navigate(["/tech/internalserver"]);
          console.error('Error:', error);
          return throwError(error);
        }),
        )
      .subscribe((res) => {
      if (res === "OK"){
        this.router.navigate(["/tech/list"]);
      }
      // else {
      //   this.router.navigate(["/tech/pagenotfound"]);
      // }

    });
  }

  updateUser(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number | undefined): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDataList(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.baseUrl}/cred`);
  }
}
