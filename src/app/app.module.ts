import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegFormComponent } from './keg-form/keg-form.component';


@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    KegListComponent,
    KegFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
