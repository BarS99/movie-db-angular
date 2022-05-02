import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieViewInterface } from 'src/app/shared/components/card/card.model';
import { CommentInterface } from './components/comment/comment.model';
import { loadComments, destroyComments } from './state/comment.actions';
import { selectComments } from './state/comment.selectors';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit, OnDestroy {
  @Input() movie!: MovieViewInterface;
  comments$: Observable<CommentInterface[]> = this.store.select(selectComments);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadComments({movieId: this.movie.id}));
  }

  ngOnDestroy(): void {
    this.store.dispatch(destroyComments());
  }
}
