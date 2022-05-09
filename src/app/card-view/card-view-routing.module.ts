import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view.component';
import { CardViewGuard } from './card-view.guard';

const routes: Routes = [
  {
    path: '', 
    component: CardViewComponent,
    canDeactivate: [CardViewGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardViewRoutingModule { }
