import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  styleUrl: './list.component.css',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    }
  ];

  emitIdCharacter(id: string): void {
    this.onDelete.emit(id);
  }

}
