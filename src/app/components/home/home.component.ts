import { Component, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cookiePlayerTag: string = '';

  constructor(public homeService: HomeService, private router: Router) { }

  async ngOnInit() {
    this.homeService.getBrawlers();
    await this.homeService.getPlayerChronology();
  }

  onBrawlerClick(id: string) {
    this.router.navigateByUrl("brawler/" + id);
  }

}