import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, withLatestFrom } from "rxjs";
import { selectFilters } from "../components/filters/state/filters.selectors";
import { IndexService } from "../index.service";
import * as FiltersActions from "./index.actions";
import { selectPage } from "./index.selectors";

@Injectable()
export class IndexEffects {
    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(FiltersActions.loadMovies.type),
        withLatestFrom(this.store.select(selectFilters), this.store.select(selectPage), (action, filters, page) => {
            return [action, {...filters, page: page}];
        }),
        mergeMap(
            ([action, storeState]) => this.indexService.getMovies(storeState)
            .pipe(
                map((movies) => FiltersActions.loadMoviesSuccess({ movies: movies.results })),
                catchError(() => of(FiltersActions.loadMoviesFailure()))
            )
        )
    ))

    constructor(private actions$: Actions, private indexService: IndexService, private store: Store) { }
}