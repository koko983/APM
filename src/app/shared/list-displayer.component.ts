import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export interface Dick {
  id: number;
  length: number,
  radius: number,
  color: string
}

@Component({
  selector: 'pm-list-displayer',
  templateUrl: './list-displayer.component.html',
  styleUrls: ['./list-displayer.component.css']
})
export class ListDisplayerComponent implements OnInit, OnChanges {
  @Input() dicks: Observable<Dick[]>;
  finalDicks: Dick[];
  @Input() id: number;
  dickId: number;
  @Output() dicksFilterChanged: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.dickId = this.id;
  }

  updateDicks() {
    this.dicksFilterChanged.emit(this.dickId);
  }

  //fires when any of the input properties change its value
  ngOnChanges() {
    console.log("on changes fired");
    this.dicks.subscribe(
      result => {
        this.finalDicks = [];
        result.forEach(dick => {
          this.finalDicks.push(dick)
        });
      }
    )
  }
}
