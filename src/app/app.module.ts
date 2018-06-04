import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MdModule } from '@angeeks/md';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    MdModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
