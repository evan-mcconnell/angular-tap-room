import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { KegListComponent } from './keg-list/keg-list.component';


@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    KegListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
