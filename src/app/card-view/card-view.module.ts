import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view.component';
import { CardViewRoutingModule } from './card-view-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CardViewComponent
  ],
  imports: [
    CommonModule,
    CardViewRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule
  ]
})
export class CardViewModule {
  constructor() {
    
  }
}
  