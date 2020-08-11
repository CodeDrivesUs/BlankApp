import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsidePage } from './inside.page';

const routes: Routes = [
  {
    path: '',  
    component: InsidePage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../tabs/home/home.module').then( m => m.HomePageModule)
      }, 
       {
        path: 'cart',
        loadChildren: () => import('../../tabs/cart/cart.module').then( m => m.CartPageModule)
      },    
      {
        path: '',
        redirectTo: '/inside/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inside/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsidePageRoutingModule {}
