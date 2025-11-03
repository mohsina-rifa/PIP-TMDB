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
};

export type Episode = {
  episode_number: number;
  title: string;
  description: string;
  duration: number;
};

export type Season = {
  season_number: number;
  episodes: Episode[];
}

export type Series = {
  details: Movie;
  seasons: Season[];
}