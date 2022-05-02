import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, takeUntil } from "rxjs";
import { CommentService } from "../components/comment/comment.service";
import { loadComments, loadCommentsFailure, loadCommentsSuccess, postComment, postCommentFailure, postCommentSuccess, destroyComments } from "./comment.actions";

@Injectable()
export class CommentEffects {
    loadComments$ = createEffect(() => this.actions$.pipe(
        ofType(loadComments.type),
        mergeMap(
            ({movieId}) => this.commentService$.getComments(movieId)
            .pipe(
                map(comments => loadCommentsSuccess({comments})),
                catchError(() => of(loadCommentsFailure())),
            )
        )
    ))

    postComment$ = createEffect(() => this.actions$.pipe(
        ofType(postComment.type),
        mergeMap(
            ({comment}) => this.commentService$.postComment(comment)
            .pipe(
                map(() => postCommentSuccess()),
                catchError(() => of(postCommentFailure()))
            )
        )
    ))

    constructor(private actions$: Actions, private commentService$: CommentService) {}
}