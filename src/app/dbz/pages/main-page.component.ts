
import { Component } from '@angular/core';
import { type Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor() { }

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 500,
    },
    {
      name: 'Goku',
      power: 9500,
    },
    {
      name: 'Vegetta',
      power: 7777,
    }
  ];

  onNewCharacter( character: Character): void {
    this.characters.unshift({...character});
  }

  onDeleteIdCharacter( idCharacter: number): void {
    // this.characters = this.characters.filter(char => char !== idCharacter);
    this.characters.splice(idCharacter, 1);
  }
}
