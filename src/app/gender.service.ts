import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenderResponse } from './predict/predict.module';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  public getGender(name: string): Observable<GenderResponse> {
    return this.httpClient.get<GenderResponse>('https://api.genderize.io/?name='+ name);
  }
  constructor(private httpClient: HttpClient) { }
}
