import { createAction, props } from "@ngrx/store";
import { MovieInterface } from "src/app/shared/components/card/card.model";
import { GetMoviesInterface } from "../index.model";

export const resetMovies = createAction('[Index Action] Reset Movies')

export const loadMovies = createAction(
    '[Index Action] Load Movies',
    props<{ params?: GetMoviesInterface }>(),
)

export const loadMoviesSuccess = createAction(
    '[Index Action] Load Movies Success',
    props<{ movies: MovieInterface[] }>(),
)

export const loadMoviesFailure = createAction(
    '[Index Action] Load Movies Failure',
)