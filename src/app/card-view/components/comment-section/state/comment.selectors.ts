import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommentStateInterface } from "../comment-section.model";

export const selectCommentFeature = createFeatureSelector<CommentStateInterface>('comment');

export const selectComments = createSelector(
    selectCommentFeature,
    (state: CommentStateInterface) => {
        return state.comments;
    },
)

export const selectPostSuccess = createSelector(
    selectCommentFeature,
    (state: CommentStateInterface) => {
        return state.postSuccess;
    },
)

export const selectPostFailure = createSelector(
    selectCommentFeature,
    (state: CommentStateInterface) => {
        return state.postFailure;
    },
)