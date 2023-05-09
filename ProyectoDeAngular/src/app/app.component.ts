import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkThemeActive = false;
  title = 'ProyectoDeAngular';
  flagDelHijo: boolean = false;

  buttonColor = 'accent';
  onchance(newValue: boolean): void { //onchance: ejecutar cuando una situación ocurre.
  if(newValue){
    this.buttonColor ='accent'
  } else {
    this.buttonColor = 'primary'
  }
  }
}
