import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'error-page/:code',
    component: PageNotFoundComponent
  },
  {
    path: 'detail/:type/:id',
    component: DetailComponent
  }, {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class PagesRoutingModule { }
