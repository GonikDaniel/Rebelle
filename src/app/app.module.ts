import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { WikiModule } from './wiki/wiki.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCoreModule,
  MdInputModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdIconModule
} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCoreModule,
    MdInputModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
