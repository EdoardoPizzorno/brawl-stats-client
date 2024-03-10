import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { ParseService } from '../../services/parser.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrl: './battles.component.css'
})
export class BattlesComponent {
  @Input() battle: any;

  constructor(private parseService: ParseService) { }

  showBattleDetails() {
    console.log(this.battle.battle)

    Swal.fire({
      title: 'RANK #' + this.battle.battle.rank,
      html: this.parseService.parseHtml(this.battle),
      confirmButtonText: 'COOL!',
      confirmButtonColor: 'var(--primary-color)',
      showCloseButton: true
    });
  }
  
}
