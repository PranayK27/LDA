import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ApiMapperService} from "./api-mapper.service";

@Injectable({
  providedIn: 'root'
})
export class ListApiService {

  constructor(public http: HttpClient, public apiMapper: ApiMapperService) { }

  // private baseUrl = 'http://localhost:8081/tech/api/v1/list'; // for LDA backend

  private baseUrl= "https://api.mockae.com/fakeapi/products"; //this.apiMapper.getData();

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

  async getDataList(){
    return await this.apiMapper.getData();
  }
}
