import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
//  private apiURL = 'http://localhost:4200/products'; // when the backend api will be ready

  private apiURL = 'apps/lda-e2e/src/server/data/users/json/db.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
}
