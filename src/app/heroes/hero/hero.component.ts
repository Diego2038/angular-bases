import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {


  public name: string = 'ironman';
  public age: number = 45;
  public isChangeName: boolean = false;
  public isChangeAge: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.isChangeName = true;
    this.name = 'Oveja Free Fire';
  }

  changeAge(): void {
    this.isChangeAge = true;
    this.age = 31;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
    this.isChangeAge = false;
    this.isChangeName = false;

    document.querySelectorAll('h1').forEach(
      element => element.innerHTML = '<h1>Since Angular</h1>'
    );
  }
}
