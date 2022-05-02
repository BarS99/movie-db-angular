import { createReducer, on } from "@ngrx/store";
import { CommentStateInterface } from "../comment-section.model";
import * as CommentActions from "./comment.actions";

const initialState: CommentStateInterface = {
    comments: [],
    postSuccess: false,
    postFailure: false,
}

export const commentReducer = createReducer(
    initialState,
    on(CommentActions.destroyComments, (state) => {
        return {
            ...state,
            postSuccess: false,
            postFailure: false,
            comments: [],
        }
    }),
    on(CommentActions.loadComments, (state) => {
        return {
            ...state
        }
    }),
    on(CommentActions.loadCommentsSuccess, (state, {comments}) => {
        return {
            ...state,
            comments: [...comments].reverse(),
        }
    }),
    on(CommentActions.loadCommentsFailure, (state) => {
        return {
            ...state,
            comments: []
        }
    }),
    on(CommentActions.reloadComments, (state) => {
        return {
            ...state
        }
    }),
    on(CommentActions.reloadCommentsSuccess, (state, {comments}) => {
        return {
            ...state,
            comments: [...comments].reverse(),
        }
    }),
    on(CommentActions.reloadCommentsFailure, (state) => {
        return {
            ...state,
            comments: []
        }
    }),
    on(CommentActions.postComment, (state) => {
        return {
            ...state
        }
    }),
    on(CommentActions.postCommentSuccess, (state, {comment}) => {
        return {
            ...state,
            postSuccess: true,
            comments: [comment, ...state.comments],
        }
    }),
    on(CommentActions.postCommentFailure, (state) => {
        return {
            ...state,
            postSuccess: true,
        }
    }),
)