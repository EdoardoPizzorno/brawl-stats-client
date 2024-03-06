import { Component } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {

  constructor(public clubService: ClubService, public homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clubService.getClub(params["tag"]);
    });
  }

}
