import { createAction, props } from "@ngrx/store";
import { MovieInterface } from "src/app/shared/components/card/card.model";
import { GetMoviesInterface } from "../index.model";

export const resetMovies = createAction('[Index Action] Reset Movies')

export const initMovies = createAction(
    '[Index Page] Init Movies'
)

export const initMoviesSuccess = createAction(
    '[Index Page] Init Movies Success',
    props<{ movies: MovieInterface[] }>(),
)

export const initMoviesFailure = createAction(
    '[Index Page] Load Movies Failure',
)

export const fetchMovies = createAction(
    '[Index Page] Load Movies',
    props<{ params?: GetMoviesInterface }>(),
)

export const fetchMoviesSuccess = createAction(
    '[Index Page] Load Movies Success',
    props<{ movies: MovieInterface[] }>(),
)

export const fetchMoviesFailure = createAction(
    '[Index Page] Load Movies Failure',
)

export const reloadMovies = createAction(
    '[Index Page] Reload Movies',
)

export const reloadMoviesSuccess = createAction(
    '[Index Page] Reload Movies Success',
    props<{ movies: MovieInterface[] }>(),
)

export const reloadMoviesFailure = createAction(
    '[Index Page] Reload Movies Failure'
)