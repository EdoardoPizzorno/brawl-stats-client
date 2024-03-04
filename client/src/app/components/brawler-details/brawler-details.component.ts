import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrawlerService } from '../../services/brawler.service';

@Component({
  selector: 'app-brawler-details',
  templateUrl: './brawler-details.component.html',
  styleUrl: './brawler-details.component.css'
})
export class BrawlerDetailsComponent {

  constructor(private route: ActivatedRoute, private router: Router, public brawlerService: BrawlerService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.brawlerService.getBrawler(params.id);
    });
  }

}
