import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//material
import { MaterialModule } from './material'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports:[
  BrowserModule, 
  FormsModule,
  BrowserAnimationsModule,
  MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

 