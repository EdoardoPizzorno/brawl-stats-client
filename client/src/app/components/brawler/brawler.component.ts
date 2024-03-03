import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrl: './brawler.component.css'
})
export class BrawlerComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const param1 = params['parametro1'];
      const param2 = params['parametro2'];
  
      console.log('Parametro 1:', param1);
      console.log('Parametro 2:', param2);
    });
  }

}
