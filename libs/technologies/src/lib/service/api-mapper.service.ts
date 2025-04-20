import {Injectable} from "@angular/core";
import {List} from "../technologies/model/lists";

@Injectable({
  providedIn: 'root'
})
export class ApiMapperService {
  constructor() {}
  // @ts-ignore
  async getData(): Promise<List[]> {
    const url= "https://api.mockae.com/fakeapi/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
}
