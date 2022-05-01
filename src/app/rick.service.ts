import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private http: HttpClient) { }


  getcharacters(): Observable<any> {
    const url = environment.characters;
    return this.http.get(url);
  }
  getlocations(): Observable<any> {
    const url = environment.locations;
    return  this.http.get(url);
  }
}
