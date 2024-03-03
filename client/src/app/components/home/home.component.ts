import { Component, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() playerTag: string = '';

  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getBrawlers();
  }
}
