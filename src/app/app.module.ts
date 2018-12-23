import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { PerfectPageModule } from './perfect-page/perfect-page.module';
// a$1M1$p4@@n
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ProductModule,
    PerfectPageModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
