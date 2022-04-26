import { createAction, props } from "@ngrx/store";

export const updateGenre = createAction(
    '[Filters Component] Update genre',
    props<{ genreId: string }>()
)

export const updateYear = createAction(
    '[Filters Component] Update year',
    props<{ year: string }>()
)
