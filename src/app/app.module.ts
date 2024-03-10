import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrawlerDetailsComponent } from './components/brawler-details/brawler-details.component';
import { CookieService } from 'ngx-cookie-service';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { ClubComponent } from './components/club/club.component';
import { BattlesComponent } from './components/battles/battles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BrawlerDetailsComponent,
    PlayerDetailsComponent,
    ClubComponent,
    BattlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
