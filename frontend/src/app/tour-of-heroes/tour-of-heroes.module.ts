import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { TourOfHeroesRoutingModule } from './tour-of-heroes-routing.module';

@NgModule({
  declarations: [
    TourOfHeroesComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    TourOfHeroesRoutingModule,
    RouterLink,
    RouterOutlet,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  exports: [
    TourOfHeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
})
export class TourOfHeroesModule {}
