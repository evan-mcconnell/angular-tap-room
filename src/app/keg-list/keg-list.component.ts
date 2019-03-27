import { Component, OnInit } from '@angular/core';
import { Keg } from '../models/kegModel';
// import { KegComponent } from '../keg/keg.component';
import { kegData } from '../keg/keg-data';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  public kegs= kegData;
  constructor() { }
  ngOnInit() {
    // this.getKegs();
    console.log(this.kegs);
  }
  // getKegs() {
  //   for ( let keg of kegData) {
  //     this.kegs.push(new KegComponent(keg));
  //   }
  // }

}
