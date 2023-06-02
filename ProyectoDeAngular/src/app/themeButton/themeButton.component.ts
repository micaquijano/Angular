import { Component } from '@angular/core';

const darkTheme = { tooltip: 'modo oscuro', icon: 'dark_mode' };
const lightTheme = { tooltip: 'modo claro', icon: 'sunny' };

@Component({
  selector: 'themeButton-component',
  templateUrl: './themeButton.component.html',
  styleUrls: ['./themeButton.component.scss'],
})
export class ThemeButtonComponent {
/*   theme = true; */
  themeObj = darkTheme;

  constructor() {}

/*   changeTheme() {
    console.log(this.theme);
    this.theme = !this.theme;
  }

  tooltipName() {
    return this.theme ? 'modo oscuro' : 'modo claro';
  } */

  changeThemeRefactor() {
    this.themeObj = this.themeObj.icon !=  darkTheme.icon  ? darkTheme : lightTheme;
  }
}
