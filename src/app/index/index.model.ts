import { MovieInterface } from "../shared/components/card/card.model";

export interface IndexInterface {
    movies: MovieInterface[],
    error: boolean,
    loading: boolean,
    nextPage: number,
    displayFetchButton: boolean,
}

export interface GetMoviesInterface {
    page?: number,
    year?: string,
    genreId?: string,
  }