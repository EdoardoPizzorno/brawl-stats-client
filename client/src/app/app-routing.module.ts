import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrawlerDetailsComponent } from './components/brawler-details/brawler-details.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { ClubComponent } from './components/club/club.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'brawler/:id', component: BrawlerDetailsComponent },
  { path: 'links', component: HomeComponent },
  { path: 'player/:tag', component: PlayerDetailsComponent },
  { path: 'club/:tag', component: ClubComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }