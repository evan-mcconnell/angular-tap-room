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
  }

  

}
