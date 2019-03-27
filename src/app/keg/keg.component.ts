import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/kegModel';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})

export class KegComponent implements OnInit {
  public pints: number = 124;
  @Input() data: Keg;
  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }

  sellPint(){
    this.pints--;
  }
  displayFill(){
    if (this.pints===124){
      return 'new-keg';
    } else if(this.pints>=124*0.75){
      return 'full-keg';
    } else if(this.pints>=124*0.25){
      return 'med-keg';
    } else if (this.pints>=124*0.05){
      return 'low-keg';
    } else {
      return 'empty-keg';
    }
  }
  drinkIcon() {
    if (this.data.type === "IPA") {
      return '../assets/hop.jpeg';
    } else if (this.data.type === "Stout") {
      return '../assets/stout.jpg';
    } else if (this.data.type === "Kombucha") {
      return '../assets/Kombucha.jpg';
    }
  }
}
