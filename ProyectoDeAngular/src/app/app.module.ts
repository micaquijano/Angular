import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { HeaderModule } from 'src/header/header.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports:[
  BrowserModule,
  HeaderModule, 
  MatSlideToggleModule,
  FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

 