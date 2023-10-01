import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppComponent } from '../app.component';

describe('TourOfHeroesComponent', () => {
  let component: TourOfHeroesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        HeroSearchComponent,
        MessagesComponent,
        TourOfHeroesComponent,
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(TourOfHeroesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });
});
