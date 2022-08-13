import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../interfaces/stores.interface';


@Injectable({
    providedIn: 'root'
})

export class DataService{
    private apiURL = 'http://localhost:4200';
    constructor(private http: HttpClient){}

    getStores():Observable<Store[]>{
        return this.http.get<Store[]>(`${this.apiURL}/stores`)
    }
}
