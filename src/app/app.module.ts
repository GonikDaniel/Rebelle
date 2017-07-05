import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCoreModule,
  MdInputModule,
  MdCardModule,
  MdButtonModule,
  MdProgressSpinnerModule,
  MdIconModule
} from '@angular/material';

import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';
import { SearchService } from './_services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCoreModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdIconModule
  ],
  providers: [
    // AppConfig,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (config: AppConfig) => () => config.load(),
    //   deps: [AppConfig],
    //   multi: true
    // },
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
