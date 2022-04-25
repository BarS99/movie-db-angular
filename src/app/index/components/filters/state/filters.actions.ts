import { createAction, props } from "@ngrx/store";

export const updateGenre = createAction(
    '[Filters Action] Update genre',
    props<{ genreId: string }>()
)

export const updateYear = createAction(
    '[Filters Action] Update year',
    props<{ year: string }>()
)

export const refreshFilters = createAction(
    '[Filters Action] Refresh filters',
)