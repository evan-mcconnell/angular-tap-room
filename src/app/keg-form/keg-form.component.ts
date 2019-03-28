import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/kegModel';

@Component({
  selector: 'app-keg-form',
  templateUrl: './keg-form.component.html',
  styleUrls: ['./keg-form.component.css']
})
export class KegFormComponent{
  newKeg = {}

  @Output() clickSender = new EventEmitter();

  addKeg(){
    console.log("addkeg", this.newKeg)
    this.clickSender.emit(this.newKeg);
    this.newKeg={};
  }
  
}
