export type Cast = {
  name: string;
  role: string;
  gender: "male" | "female";
  image: string;
}

export type Movie = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  cast: Cast[];
  release_year: number;
  rating: number;
  genres: string[];
  duration?: number;
};

export type Episode = {
  episode_number: number;
  title: string;
  description: string;
  thumbnail: string;
  duration?: number;
};

export type Season = {
  season_number: number;
  total_episodes: number;
  episodes: Episode[];
}

export type Series = {
  details: Movie;
  total_seasons: number;
  seasons: Season[];
}