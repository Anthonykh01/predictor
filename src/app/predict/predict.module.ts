import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredictPageRoutingModule } from './predict-routing.module';

import { PredictPage } from './predict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredictPageRoutingModule
  ],
  declarations: [PredictPage]
})
export class PredictPageModule {}
export interface Country {
  country_id: string,
  probability: number,
}

export interface CountryResponse {
  country: Country[],
  name: string,
}
export interface Age {
  age: number,
}

export interface AgeResponse {
  count: number,
  age: number,
  name: string,
}
export interface Gender {
  gender: string,
  probability: number,
}

export interface GenderResponse {
  count: number,
  gender: string,
  name: string,
  probability:number,
}
