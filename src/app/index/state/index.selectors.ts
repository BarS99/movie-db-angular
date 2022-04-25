import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IndexInterface } from "../index.model";

export const selectIndexFeature = createFeatureSelector<IndexInterface>('index');

export const selectMovies = createSelector(
    selectIndexFeature,
    (state: IndexInterface) => state.movies,
)

export const selectLoading = createSelector(
    selectIndexFeature,
    (state: IndexInterface) => state.loading,
)

export const selectError = createSelector(
    selectIndexFeature,
    (state: IndexInterface) => state.error,
)

export const selectDisplayFetchButton = createSelector(
    selectIndexFeature,
    (state: IndexInterface) => state.displayFetchButton,
)

export const selectPage = createSelector(
    selectIndexFeature,
    (state: IndexInterface) => state.nextPage,
)