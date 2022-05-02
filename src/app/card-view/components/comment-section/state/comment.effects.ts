import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommentService } from "../components/comment/comment.service";
import { loadComments, loadCommentsFailure, loadCommentsSuccess, postComment, postCommentFailure, postCommentSuccess, reloadComments, reloadCommentsFailure, reloadCommentsSuccess } from "./comment.actions";

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

    reloadComments$ = createEffect(() => this.actions$.pipe(
        ofType(reloadComments.type),
        mergeMap(
            ({movieId}) => this.commentService$.getComments(movieId)
            .pipe(
                map(comments => reloadCommentsSuccess({comments})),
                catchError(() => of(reloadCommentsFailure())),
            )
        )
    ))

    postComment$ = createEffect(() => this.actions$.pipe(
        ofType(postComment.type),
        mergeMap(
            ({comment}) => this.commentService$.postComment(comment)
            .pipe(
                map((comment) => postCommentSuccess({comment})),
                catchError(() => of(postCommentFailure()))
            )
        )
    ))

    constructor(private actions$: Actions, private commentService$: CommentService) {}
}