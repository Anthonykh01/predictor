import { Component } from '@angular/core';
import { PredictorService } from '../services/predictor.service';
import { HttpClient } from '@angular/common/http';
import { Dog,DogResponse} from './tab1.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public loaded = false;
  public name = '';
  public dog : Dog = {
    image_url: '',
  };

  constructor(private dogService : PredictorService, private router: Router) {}
  ionViewDidEnter() {
    this.getDog();
  }

  getDog(){
    this.loaded = false;
    this.dogService.getDog().subscribe((response: DogResponse) => {
      
      this.dog = {
        image_url: response.message,
      };
      this.loaded = true;
    });
  }


}