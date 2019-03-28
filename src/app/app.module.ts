import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegFormComponent } from './keg-form/keg-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    KegListComponent,
    KegFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
