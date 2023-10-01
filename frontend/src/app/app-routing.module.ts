import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/toh',
    pathMatch: 'full', //means path needs to be full match with what has been configured.
  },
  {
    path: 'toh',
    loadChildren: () => TourOfHeroesModule,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
