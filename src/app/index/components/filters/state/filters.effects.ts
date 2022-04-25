import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, of, pipe, EMPTY, Observable, tap } from "rxjs";
import * as IndexActions from "src/app/index/state/index.actions";
import * as FiltersActions from "./filters.actions";

@Injectable()
export class FiltersEffects {
    updateGenre$ = createEffect(() => this.actions$.pipe(
        ofType(FiltersActions.updateGenre.type),
        map(() => FiltersActions.refreshFilters()),
        catchError(() => of(FiltersActions.refreshFilters()))
    ))

    updateYear$ = createEffect(() => this.actions$.pipe(
        ofType(FiltersActions.updateYear.type),
        map(() => FiltersActions.refreshFilters()),
        catchError(() => of(FiltersActions.refreshFilters()))
    ))

    // refreshFilters$ = createEffect(() => this.actions$.pipe(
    //     ofType(FiltersActions.refreshFilters.type),
    //     map(() => {
    //         return IndexActions.resetMovies();
    //     }),
    // ))
 
    constructor(private actions$: Actions) {}
}