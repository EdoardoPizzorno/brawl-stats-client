import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {

  playerTag: string = '';
  cookiePlayerTag: string = '';

  constructor(private route: ActivatedRoute, private cookieService: CookieService, public playerService: PlayerService) {
    this.cookiePlayerTag = this.cookieService.get('PLAYER_TAG');

    if (this.cookiePlayerTag != '') {
      this.playerTag = this.cookiePlayerTag;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.playerService.getPlayer(params.tag);
      this.playerTag = params.tag;
      
      if (this.playerTag != this.cookiePlayerTag)
        this.setCookie();
    });
  }

  setCookie() {
    this.cookieService.set('PLAYER_TAG', this.playerTag, 365, '/');
  }

}