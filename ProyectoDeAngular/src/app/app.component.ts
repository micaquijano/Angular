import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkThemeActive = false;
  onchance(newValue: boolean): void{
    console.log(newValue)
  }
  title = 'ProyectoDeAngular';
  flagDelHijo: boolean = false;
}
