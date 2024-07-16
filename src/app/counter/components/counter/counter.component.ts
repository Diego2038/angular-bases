import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hello Counter</h1>
    <h6>Hi {{title}} </h6>
    <p> {{hello}} </p>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseCounter(-1)" >--</button>
    <button (click)="resetCounter()" >Reset</button>
    <button (click)="increaseCounter(1)" >++</button>
  `
})

export class CounterComponent {
  constructor() { }

  public title: string = 'Boss';
  public hello: string = 'World';
  public counter: number = 10;

  increaseCounter(num: number): void {
    this.counter += num;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
