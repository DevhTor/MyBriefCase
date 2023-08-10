import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { BlueButton2Component } from './blue-button2/blue-button2.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueButtonComponent,
    BlueButton2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
