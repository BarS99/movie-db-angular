import { createAction, props } from "@ngrx/store";

export const updateGenre = createAction('[Filters Component] Update Genre', props<{genre: number}>());
export const updateYear = createAction('[Filters Component] Update Year', props<{year: number}>());