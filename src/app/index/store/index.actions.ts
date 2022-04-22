import { createAction, props } from "@ngrx/store";
import { MovieInterface } from "src/app/shared/components/card/card.model";

export const updateMovies = createAction('[Index Component] Update Movies', props<{movies: MovieInterface[]}>());
export const resetMovies = createAction('[Index Component] Reset Movies');