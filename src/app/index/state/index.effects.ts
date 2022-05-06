import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { selectFilters } from "../components/filters/state/filters.selectors";
import { IndexService } from "../index.service";
import { fetchMovies, fetchMoviesFailure, fetchMoviesSuccess, initMovies, initMoviesFailure, initMoviesSuccess, reloadMovies, reloadMoviesFailure, reloadMoviesSuccess, resetMovies, resetMoviesFailure, resetMoviesSuccess } from "./index.actions";
import { selectPage } from "./index.selectors";

@Injectable()
export class IndexEffects {
    initMovies$ = createEffect(() => this.actions$.pipe(
        ofType(initMovies.type),
        withLatestFrom(this.store.select(selectFilters), this.store.select(selectPage), (action, filters, page) => {
            return [action, { ...filters, page: page }];
        }),
        mergeMap(
            ([action, storeState]) => this.indexService.getMovies(storeState)
                .pipe(
                    map((movies) => initMoviesSuccess({ movies: movies.results })),
                    catchError(() => of(initMoviesFailure()))
                )
        )
    ))

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(fetchMovies.type),
        withLatestFrom(this.store.select(selectFilters), this.store.select(selectPage), (action, filters, page) => {
            return [action, { ...filters, page: page }];
        }),
        mergeMap(
            ([action, storeState]) => this.indexService.getMovies(storeState)
                .pipe(
                    map((movies) => fetchMoviesSuccess({ movies: movies.results })),
                    catchError(() => of(fetchMoviesFailure()))
                )
        )
    ))

    reloadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(reloadMovies.type),
        withLatestFrom(this.store.select(selectFilters), this.store.select(selectPage), (action, filters, page) => {
            return [action, { ...filters, page: page }];
        }),
        mergeMap(
            ([action, storeState]) => this.indexService.getMovies(storeState)
                .pipe(
                    map((movies) => reloadMoviesSuccess({ movies: movies.results })),
                    catchError(() => of(reloadMoviesFailure()))
                )
        )
    ))

    resetMovies$ = createEffect(() => this.actions$.pipe(
        ofType(resetMovies.type),
        map(() => resetMoviesSuccess()),
        catchError(() => of(resetMoviesFailure()))
    ))

    constructor(private actions$: Actions, private indexService: IndexService, private store: Store) {}
}