import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FiltersFeatureInterface, FiltersInterface } from "../filters.model";

export const selectFiltersFeature = createFeatureSelector<FiltersFeatureInterface>('filters');

export const selectFilters = createSelector(
    selectFiltersFeature,
    (state: FiltersFeatureInterface) => state.filters
)