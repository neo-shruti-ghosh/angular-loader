import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GenericLoaderComponent } from './generic-loader/generic-loader.component';
/*---------SETTINGS---------*/
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GenericLoaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
