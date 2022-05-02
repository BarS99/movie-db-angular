import { createReducer, on } from "@ngrx/store";
import { FiltersStateInterface } from "../filters.model";
import * as FiltersActions from "./filters.actions";

const initialState: FiltersStateInterface = {
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