import { createAction, props } from "@ngrx/store";
import { CommentInterface } from "../components/comment/comment.model";

export const destroyComments = createAction(
    '[Card View Page -> Comments Section] Destroy Comments'
)

export const loadComments = createAction(
    '[Card View Page -> Comments Section] Load Comments',
    props<{ movieId: number }>()
)

export const loadCommentsSuccess = createAction(
    '[Card View Page -> Comments Section] Load Comments Success',
    props<{ comments: CommentInterface[] }>()
)

export const loadCommentsFailure = createAction(
    '[Card View Page -> Comments Section] Load Comments Failure'
)

export const reloadComments = createAction(
    '[Card View Page -> Comments Section] Reload Comments',
    props<{ movieId: number }>()
)

export const reloadCommentsSuccess = createAction(
    '[Card View Page -> Comments Section] Reload Comments Success',
    props<{ comments: CommentInterface[] }>()
)

export const reloadCommentsFailure = createAction(
    '[Card View Page -> Comments Section] Reload Comments Failure'
)

export const postComment = createAction(
    '[Card View Page -> Comments Section] Post Comment',
    props<{ comment: CommentInterface }>()
)

export const postCommentSuccess = createAction(
    '[Card View Page -> Comments Section] Post Comment Success',
    props<{ comment: CommentInterface }>()
)

export const postCommentFailure = createAction(
    '[Card View Page -> Comments Section] Post Comment Failure'
)