import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from './coin';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  getCoin(): Observable<Coin>{
    return this.http.get<Coin>('https://api.coindesk.com/v1/bpi/currentprice.json');
  }

}
