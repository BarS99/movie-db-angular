import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view.component';
import { CardViewRoutingModule } from './card-view-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommentFormComponent } from './components/comment-section/components/comment-form/comment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment-section/components/comment/comment.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { StoreModule } from '@ngrx/store';
import { commentReducer } from './components/comment-section/state/comment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from './components/comment-section/state/comment.effects';

@NgModule({
  declarations: [
    CardViewComponent,
    CommentComponent,
    CommentFormComponent,
    CommentSectionComponent,
  ],
  imports: [
    CommonModule,
    CardViewRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forFeature('comment', commentReducer),
    EffectsModule.forFeature([CommentEffects]),
  ]
})
export class CardViewModule {
  constructor() {}
}
  