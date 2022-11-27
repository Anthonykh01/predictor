import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CountryResponse } from './predict/predict.module';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  public getCountry(name: string): Observable<CountryResponse> {
    return this.httpClient.get<CountryResponse>('https://api.nationalize.io/?name='+ name);
  }
  constructor(private httpClient: HttpClient) { }
}
