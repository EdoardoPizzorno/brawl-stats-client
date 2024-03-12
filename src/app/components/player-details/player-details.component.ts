import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {

  playerName: string = '';
  playerTag: string = '';
  cookiePlayerName: string = '';
  cookiePlayerTag: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private cookieService: CookieService, public playerService: PlayerService) {
    this.cookiePlayerTag = this.cookieService.get('PLAYER_TAG');
    this.cookiePlayerName = this.cookieService.get('PLAYER_NAME');

    if (this.cookiePlayerTag != '' && this.cookiePlayerName != '') {
      this.playerTag = this.cookiePlayerTag;
      this.playerName = this.cookiePlayerName;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(async (params: any) => {
      this.playerTag = params.tag;

      await this.playerService.getPlayer(this.playerTag);
      await this.playerService.getBattleLog(this.playerTag);
      
      this.playerName = this.playerService.player.name;

      if (this.playerTag != this.cookiePlayerTag || this.playerName != this.cookiePlayerName)
        this.setCookie();
    });
  }

  setCookie() {
    this.cookieService.set('PLAYER_TAG', this.playerTag, 365, '/');
    this.cookieService.set('PLAYER_NAME', this.playerName, 365, '/');
  }

  onClubClick() {
    let clubTag = (this.playerService.player.club.tag).substring(1);
    this.router.navigateByUrl("club/" + clubTag);
  }

}