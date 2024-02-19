import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  private baseUrl = 'http://localhost:8081/tech/api/v1/list';

  constructor(public http: HttpClient) { }

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(data: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateData(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number | undefined): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDataList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
