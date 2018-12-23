import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dick } from '../shared/list-displayer.component';

@Component({
  selector: 'pm-perfect-page',
  templateUrl: './perfect-page.component.html',
  styleUrls: ['./perfect-page.component.css']
})
export class PerfectPageComponent implements OnInit {
  id: number;
  dicks: Observable<Dick[]>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.setDicks();
  }

  filterUpdated(id: number) {
    this.id = id;
    this.setDicks();
  }

  private setDicks() {
    if (this.id % 2 == 0)
      this.dicks = this.http.get<Dick[]>("api/dicks1.json");
    else
      this.dicks = this.http.get<Dick[]>("api/dicks2.json");
  }
}
