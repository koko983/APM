import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/covert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiveComponent } from './dashboard/dive.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    DashboardComponent,
    DiveComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: DashboardComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
