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

  constructor(public homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.homeService.getBrawlers();
  }

  onBrawlerClick(id: string) {
    this.router.navigateByUrl("brawler/" + id);
  }
}