import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FiltersStateInterface } from "../filters.model";

export const selectFiltersFeature = createFeatureSelector<FiltersStateInterface>('filters');

export const selectFilters = createSelector(
    selectFiltersFeature,
    (state: FiltersStateInterface) => state.filters
)