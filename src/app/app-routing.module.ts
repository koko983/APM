import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PerfectPageComponent } from './perfect-page/perfect-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', component: WelcomeComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
