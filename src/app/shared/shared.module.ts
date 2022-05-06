import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    LoaderComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoaderComponent,
    RatingComponent
  ]
})
export class SharedModule { }
