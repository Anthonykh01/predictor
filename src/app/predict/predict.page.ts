import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Age } from './predict.module';
import { Country } from './predict.module';
import { Gender } from './predict.module';
import { AgeService } from '../age.service';
import { GenderService } from '../gender.service';
import { NationalityService } from '../nationality.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.page.html',
  styleUrls: ['./predict.page.scss'],
})
export class PredictPage implements OnInit {

  public name='';

  
  public gender: Gender | undefined;

 
  public age: Age | undefined;

  public country: Country | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private genderService: GenderService,
    private ageService: AgeService, private countryService: NationalityService) { }

  ngOnInit() {

  }

  predict() {

    const name = this.name.replace(/\s/g, '');
    this.genderService.getGender(this.name).subscribe((response) => {
      this.gender = {
        probability: response.probability * 100,
        gender: response.gender,
      };
    });

    this.ageService.getAge(this.name).subscribe((response) => {
      this.age = {
        age: response.age,
      }
    });

    this.countryService.getCountry(this.name).subscribe((response) => {
      this.country = {
        country_id: response.country[0].country_id,
        probability: response.country[0].probability *100,
      }
    });

  }



}
