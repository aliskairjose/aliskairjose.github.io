import { Movie } from './movie.interface';

export interface SearchResponse {
  page?: number;
  results?: Array<Movie>;
  total_pages?: number;
  total_results?: number;
}