import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

const darkTheme = { tooltip: 'modo oscuro', icon: 'dark_mode' };
const lightTheme = { tooltip: 'modo claro', icon: 'sunny' };

@Component({
  selector: 'themeButton-component',
  templateUrl: './themeButton.component.html',
  styleUrls: ['./themeButton.component.scss'],
})
export class ThemeButtonComponent {
  @Input('contador') contador = 0;
  @Output('incremented') incremented = new EventEmitter<number>();
  /*   theme = true; */
  isDarkThemeActive = true;
  themeObj = darkTheme;
  buttonColor = 'accent';

  /*   changeTheme() {
    console.log(this.theme);
    this.theme = !this.theme;
  }

  tooltipName() {
    return this.theme ? 'modo oscuro' : 'modo claro';
  } */

  changeThemeRefactor() {
    /*this.themeObj = this.themeObj.icon !=  darkTheme.icon  ? darkTheme : lightTheme;*/
    this.themeObj =
      this.themeObj.icon != darkTheme.icon ? darkTheme : lightTheme;
    this.incremented.emit(this.contador+1);
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add('theme-dark');
  }

  onchange(newValue: boolean): void {
    //ejecutar cuando una situación ocurre.
    this.isDarkThemeActive = !this.isDarkThemeActive;
    this.changeThemeRefactor();
    if (newValue) {
      this.themeObj = darkTheme;
    } else {
      this.themeObj == lightTheme;
    }
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
