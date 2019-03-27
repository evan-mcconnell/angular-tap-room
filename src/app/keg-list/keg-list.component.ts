import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/kegModel';
// import { KegComponent } from '../keg/keg.component';
import { kegData } from '../keg/keg-data';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent{
  public kegs: Keg[] = kegData;
  constructor() {
  }
  addKeg(){
    this.kegs.push({
      name: "Hoppathon",
      brand: "Brew Hop",
      price: 5,
      alcoholContent: 5.5,
      type: "IPA"
    })
  }
}
