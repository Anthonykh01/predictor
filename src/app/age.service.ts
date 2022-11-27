import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgeResponse } from './predict/predict.module';


@Injectable({
  providedIn: 'root'
})
export class AgeService {

  

  public getAge(name: string): Observable<AgeResponse> {
    return this.httpClient.get<AgeResponse>('https://api.agify.io/?name='+ name);
  }
  constructor(private httpClient: HttpClient) { }
}
