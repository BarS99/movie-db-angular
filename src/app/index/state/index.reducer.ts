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
            ...state
        }
    }),
    on(IndexActions.resetMoviesSuccess, IndexActions.resetMoviesFailure, (state) => {
        return {
            ...state,
            movies: [],
            nextPage: 1,
        }
    }),
    on(IndexActions.initMovies, IndexActions.reloadMovies, (state) => {
        return {
            ...state, 
            movies: [],
            loading: true,
            displayFetchButton: false,
            nextPage: 1,
        }
    }),
    on(IndexActions.fetchMovies, (state) => {
        return {
            ...state, 
            loading: true,
            displayFetchButton: false,
        }
    }),
    on(IndexActions.initMoviesSuccess, IndexActions.reloadMoviesSuccess, (state, {movies}) => {
        return {
            ...state,
            movies: movies,
            error: false,
            loading: false,
            displayFetchButton: true,
            nextPage: state.nextPage + 1
        }
    }),
    on(IndexActions.fetchMoviesSuccess, (state, {movies}) => {
        return {
            ...state,
            movies: [...state.movies, ...movies],
            error: false,
            loading: false,
            displayFetchButton: true,
            nextPage: state.nextPage + 1
        }
    }),
    on(IndexActions.fetchMoviesFailure, IndexActions.initMoviesFailure, IndexActions.reloadMoviesFailure, (state) => {
        return {
            ...state,
            error: true,
            loading: false,
            nextPage: 1,
        }
    })
) 