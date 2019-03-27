import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/kegModel';

@Component({
  selector: 'app-keg-form',
  templateUrl: './keg-form.component.html',
  styleUrls: ['./keg-form.component.css']
})
export class KegFormComponent{
  newKeg:Keg;
  @Output() clickSender = new EventEmitter();
  addKeg(keg){

    this.clickSender.emit(keg);

  }
}
