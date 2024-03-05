import { Component, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() playerTag: string = '';
  cookiePlayerTag: string = '';

  constructor(public homeService: HomeService, private router: Router, private cookieService: CookieService) {
    this.homeService.getBrawlers();
    this.playerTag = this.cookieService.get('PLAYER_TAG');
  }

  onBrawlerClick(id: string) {
    this.router.navigateByUrl("brawler/" + id);
  }

}