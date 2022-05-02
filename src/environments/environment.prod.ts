export const domain: string = '';

export const environment = {
  production: true
};

interface ApiInterface {
  key: string,
  url: string,
  poster: string,
  posterLg: string,
}

export const Api: ApiInterface = {
  key: "e003527dc120ac9c047140a2d1870a10",
  url: "https://api.themoviedb.org",
  poster: "https://image.tmdb.org/t/p/w500",
  posterLg: "https://image.tmdb.org/t/p/w780",
};

export const assets: string = "/movie-db-angular/assets";
interface CommentsApiInterface {
  url: string,
}

export const commentsApi: CommentsApiInterface = {
  url: "https://620c09d9b57363259385646b.mockapi.io/data",
}