import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrawlerComponent } from './components/brawler/brawler.component';
import { BrawlerDetailsComponent } from './components/brawler-details/brawler-details.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'brawler/:id', component: BrawlerDetailsComponent },
  { path: 'links', component: HomeComponent },
  { path: 'player/:tag', component: PlayerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }