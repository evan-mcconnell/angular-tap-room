import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/kegModel';
// import { KegComponent } from '../keg/keg.component';
import { kegData } from '../keg-data';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent{
  public kegs: Keg[] = kegData;
  constructor() {
  }
  addKegToList(newKeg){
    this.kegs.push(newKeg)
    console.log("addKegToList", this.kegs)
  }
}
