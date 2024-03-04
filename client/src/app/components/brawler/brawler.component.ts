import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrl: './brawler.component.css'
})
export class BrawlerComponent {

  constructor() { }

  @Input() brawler: any;

}
