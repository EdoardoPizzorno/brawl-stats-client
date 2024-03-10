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

  playerTag: string = '';
  cookiePlayerTag: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private cookieService: CookieService, public playerService: PlayerService) {
    this.cookiePlayerTag = this.cookieService.get('PLAYER_TAG');

    if (this.cookiePlayerTag != '') {
      this.playerTag = this.cookiePlayerTag;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.playerTag = params.tag;
      
      this.playerService.getPlayer(this.playerTag);
      this.playerService.getBattleLog(this.playerTag);
      
      if (this.playerTag != this.cookiePlayerTag)
        this.setCookie();
    });
  }

  setCookie() {
    this.cookieService.set('PLAYER_TAG', this.playerTag, 365, '/');
  }

  onClubClick() {
    let clubTag = (this.playerService.player.club.tag).substring(1);
    this.router.navigateByUrl("club/" + clubTag);
  }

}