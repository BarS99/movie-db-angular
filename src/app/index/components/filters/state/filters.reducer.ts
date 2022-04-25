import { createReducer, on } from "@ngrx/store";
import { FiltersFeatureInterface } from "../filters.model";
import * as FiltersActions from "./filters.actions";

const initialState: FiltersFeatureInterface = {
    filters: {
        genreId: "",
        year: "",
    }
};

export const filtersReducer = createReducer(
    initialState,
    on(FiltersActions.updateGenre, (state, {genreId}) => {
        return {
            filters: {
                ...state.filters,
                genreId: genreId,
            }
        };
    }),
    on(FiltersActions.updateYear, (state, {year}) => {
        return {
            filters: {
                ...state.filters,
                year: year,
            }
        };
    })
)