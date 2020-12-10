import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import( './pages/pages.module' ).then( m => m.PagesModule )
  },
  {
    path: '**', // Navigate to Home Page if not found any page
    redirectTo: '',
  },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, {
    initialNavigation: 'enabled',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  } ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
