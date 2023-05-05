import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkThemeActive = true;
  title = 'ProyectoDeAngular';
  flagDelHijo: boolean = false;
  buttonColor = 'accent';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add('theme-dark');
  }

  onchance(newValue: boolean): void {
    //ejecutar cuando una situación ocurre.
    this.isDarkThemeActive = !this.isDarkThemeActive;
    if (newValue) {
      this.buttonColor = 'accent';
      this.document.body.classList.add('theme-dark');
      this.document.body.classList.remove('theme-light');
    } else {
      this.buttonColor = 'primary';
      this.document.body.classList.add('theme-light');
      this.document.body.classList.remove('theme-dark');
    }
  }
}
