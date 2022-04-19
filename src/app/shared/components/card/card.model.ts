export interface MovieInterface {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface MovieHttpInterface {
    page: number,
    results: MovieInterface[],
    total_pages: number,
    total_results: number
}

export interface MovieViewInterface {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: GenreInterface[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompanyInterface[]
    production_countries: ProductionCountryInterface[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguageInterface[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  
  export interface GenreInterface {
    id: number
    name: string
  }

  export interface GenreHttpInterface {
    genres: GenreInterface[];
  }
  
  export interface ProductionCompanyInterface {
    id: number
    logo_path?: string
    name: string
    origin_country: string
  }
  
  export interface ProductionCountryInterface {
    iso_3166_1: string
    name: string
  }
  
  export interface SpokenLanguageInterface {
    english_name: string
    iso_639_1: string
    name: string
  }