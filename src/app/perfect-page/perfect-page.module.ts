import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectPageComponent } from './perfect-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'perfect', component: PerfectPageComponent },
      { path: 'perfect/:id', component: PerfectPageComponent },
    ])
  ],
  declarations: [
    PerfectPageComponent
  ]
})
export class PerfectPageModule { }
