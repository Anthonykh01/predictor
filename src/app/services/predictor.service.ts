import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { DogResponse } from '../tab1/tab1.module';


@Injectable({
  providedIn: 'root'
})


export class PredictorService {
  
  public getDog(): Observable<DogResponse> {
    return this.httpClient.get<DogResponse>('https://dog.ceo/api/breeds/image/random');
  }
  constructor(private httpClient: HttpClient) { }

  
  }
  

