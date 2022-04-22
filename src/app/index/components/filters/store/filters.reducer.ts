import { createReducer, on } from "@ngrx/store"
import { updateGenre, updateYear } from "./filters.actions"

export interface FiltersStoreInterface {
    genre: number | null,
    year: number | null,
}

export const initialState: FiltersStoreInterface = {
    genre: null,
    year: null,
}

export const filtersReducer = createReducer(
    initialState,
    on(updateGenre, (state, action) => {
        return {
            ...state, 
            genre: action.genre
        }
    }),
    on(updateYear, (state, action) => {
        return {
            ...state, 
            year: action.year
        }
    }),
)