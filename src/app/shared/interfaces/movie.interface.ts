export interface Movie {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Array<number>;
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
  vote_count: number;
}