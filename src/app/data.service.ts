import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('service is working');
  }

  getData(currencyFrom, currencyTo, amount) {
    console.log('method getData');
    return this.httpClient.get<string>('http://localhost:8080/exchange/'+amount+'/from/'+currencyFrom+'/to/'+currencyTo);
  }
}
