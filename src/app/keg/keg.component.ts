import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../models/kegModel';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})

export class KegComponent implements OnInit {
  // public pints: number = 124;
  public name: string;
  public brand: string;
  public price: number;
  public alcoholContent: number;
  public type: string;
  @Input() data:Keg;
  constructor() {
  }

  ngOnInit() {
  }

}
