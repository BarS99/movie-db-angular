export interface SearchHttpInterface {
    page: number,
    results: SearchInterface[],
    total_results: number,
    total_pages: number, 
}

export interface SearchInterface {
    poster_path: string|null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    title: string,
    backdrop_path: string|null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}