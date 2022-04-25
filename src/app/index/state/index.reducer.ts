import { createReducer, on } from "@ngrx/store";
import { IndexInterface } from "../index.model";
import * as IndexActions from "./index.actions";

const initialState: IndexInterface = {
    movies: [],
    loading: false,
    error: false,
    nextPage: 1,
    displayFetchButton: false,
};

export const indexReducer = createReducer(
    initialState,
    on(IndexActions.resetMovies, (state) => {
        return {
            ...state,
            movies: [],
            nextPage: 1,
        }
    }),
    on(IndexActions.loadMovies, (state) => {
        return {
            ...state,
            loading: true,
            displayFetchButton: false,
        }
    }),
    on(IndexActions.loadMoviesSuccess, (state, {movies}) => {
        return {
            ...state,
            movies: [...state.movies, ...movies],
            error: false,
            loading: false,
            displayFetchButton: true,
            nextPage: state.nextPage + 1
        }
    }),
    on(IndexActions.loadMoviesFailure, (state) => {
        return {
            ...state,
            error: true,
            loading: false,
            nextPage: 1,
        }
    })
) 