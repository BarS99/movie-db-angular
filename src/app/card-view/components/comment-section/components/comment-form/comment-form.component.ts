import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Actions, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil} from 'rxjs';
import { MovieViewInterface } from 'src/app/shared/components/card/card.model';
import { postComment, postCommentFailure, postCommentSuccess} from '../../state/comment.actions';
import { selectPostFailure, selectPostSuccess } from '../../state/comment.selectors';
import { CommentFormService } from './comment-form.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @ViewChild('formWrapper') formWrapper!: ElementRef;
  form: FormGroup;
  formDisplayErrors: boolean = false;
  isFormCollapsed: boolean = true;

  formDisplaySuccess$: Observable<boolean> = this.store.select(selectPostSuccess);
  formDisplayFailure$: Observable<boolean> = this.store.select(selectPostFailure);
  callbackDestroyed$: Subject<boolean> = new Subject<boolean>();

  @Input() movie!: MovieViewInterface;

  constructor(private library: FaIconLibrary, private formBuilder: FormBuilder, private commentFormService: CommentFormService, private store: Store, private actions$: Actions) {
    this.library.addIcons(faMinus, faPlus);

    this.form = this.formBuilder.group(this.commentFormService.getFormConfig());
  }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType(postCommentFailure, postCommentSuccess),
      takeUntil(this.callbackDestroyed$)
    ).subscribe(() => {
      this.isFormCollapsed = false;
      this.form.reset();
      this.formDisplayErrors = false;
      window.scrollTo(0, this.formWrapper.nativeElement.offsetTop - 110);
    })
  }

  ngOnDestroy(): void {
    this.callbackDestroyed$.next(true);
    this.callbackDestroyed$.complete();
  }

  onSubmit(value: any) {
    if (!this.form.valid) {
      this.formDisplayErrors = true;
      return;
    }

    this.store.dispatch(postComment({
      comment: {
        createdAt: new Date().getTime(),
        name: value.commentName,
        value: value.commentValue,
        parentId: this.movie.id,
      }
    }))

    // this.commentService.postComment({
    //   createdAt: new Date().getTime(),
    //   name: value.commentName,
    //   value: value.commentValue,
    //   parentId: this.movie.id,
    // }).subscribe({
    //   next: () => {
    //     this.formDisplaySuccess = true;
    //   },
    //   error: () => {
    //     this.formDisplayFailure = true;
    //   },
    //   complete: () => {

    //   }
    // })
  }

  toggleForm() {
    this.isFormCollapsed = !this.isFormCollapsed;
  }
}
