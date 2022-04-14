import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'movie/:id', 
    loadChildren: () => import('./card-view/card-view.module').then(m => m.CardViewModule)
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
