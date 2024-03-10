import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrl: './battles.component.css'
})
export class BattlesComponent {
  @Input() battle: any;
  @Input() index: number = 0;
  isOpen: boolean = false;
}
