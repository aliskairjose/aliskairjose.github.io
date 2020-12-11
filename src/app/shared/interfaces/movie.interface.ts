export interface Movie {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Array<number>;
  genres?: Array<Genres>;
  media_type?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  popularity?: number;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Genres {
  id?: number;
  name?: string;
}
