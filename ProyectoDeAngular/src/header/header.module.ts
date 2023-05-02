import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
