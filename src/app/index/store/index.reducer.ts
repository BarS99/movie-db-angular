import { createReducer, on } from "@ngrx/store"
import { resetMovies, updateMovies } from "./index.actions"
import { MovieInterface } from "src/app/shared/components/card/card.model"

interface IndexStoreInterface {
    movies: MovieInterface[],
}

const initialState: IndexStoreInterface = {
    movies: [],
}

export const indexReducer = createReducer(
    initialState,
    on(updateMovies, (state, action) => {
        return {
            ...state,
            movies: action.movies
        }
    }),
    on(resetMovies, () => {
        return {
            movies: [],
        }
    }),
)