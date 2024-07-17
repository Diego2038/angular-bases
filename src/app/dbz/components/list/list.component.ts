import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  styleUrl: './list.component.css',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    }
  ];
}
