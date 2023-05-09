import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-component',
  template: `
    <div class="red">{{ title }}</div>
    <div *ngFor="let elemento of listado" class="listItem">
      {{ elemento.name }}
    </div>
    <div *ngIf="flag">hola</div>
    <button (click)="toggle()">dale click</button>
  `,
  styles: [
    `
      .red {
        color: red;
      }
      .listItem {
        font-size: 11px;
        font-weight: bold;
        color: blue;
      }
    `,
  ],
})

export class HeaderComponent {
  @Input() title: string = 'header component';
  @Output() onClickEvent = new EventEmitter<boolean>();

  flag = true;
  listado = [
    { id: 1, name: 'pepito' },
    { id: 2, name: 'roberto' },
    { id: 3, name: 'alex' },
    { id: 4, name: 'meli' },
    { id: 5, name: 'abi' },
  ];

  toggle() {
    this.flag = !this.flag;
    this.onClickEvent.emit(this.flag);
  }
}

