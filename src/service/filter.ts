import axios from "./api";

export interface GenreMapping {
  movieGenres: Record<string, number>;
  tvGenres: Record<string, number>;
}

export const filterService = {
  async fetchGenreMappings(): Promise<GenreMapping> {
    try {
      const [movieResponse, tvResponse] = await Promise.all([
        axios.get("/genre/movie/list"),
        axios.get("/genre/tv/list"),
      ]);

      const movieGenres: Record<string, number> = {};
      const tvGenres: Record<string, number> = {};

      movieResponse.data.genres.forEach((genre: any) => {
        movieGenres[genre.name] = genre.id;
      });

      tvResponse.data.genres.forEach((genre: any) => {
        tvGenres[genre.name] = genre.id;
      });

      return { movieGenres, tvGenres };
    } catch (error) {
      console.error("Error fetching genres:", error);
      return { movieGenres: {}, tvGenres: {} };
    }
  },

  getGenreIds(
    genreName: string,
    movieGenres: Record<string, number>,
    tvGenres: Record<string, number>
  ): number[] {
    const ids: number[] = [];

    if (movieGenres[genreName]) {
      ids.push(movieGenres[genreName]);
    }

    if (tvGenres[genreName]) {
      ids.push(tvGenres[genreName]);
    }

    if (genreName === "Action" && tvGenres["Action & Adventure"]) {
      ids.push(tvGenres["Action & Adventure"]);
    }
    if (genreName === "Adventure" && tvGenres["Action & Adventure"]) {
      ids.push(tvGenres["Action & Adventure"]);
    }
    if (genreName === "Science Fiction" && tvGenres["Sci-Fi & Fantasy"]) {
      ids.push(tvGenres["Sci-Fi & Fantasy"]);
    }
    if (genreName === "Fantasy" && tvGenres["Sci-Fi & Fantasy"]) {
      ids.push(tvGenres["Sci-Fi & Fantasy"]);
    }
    if (genreName === "War" && tvGenres["War & Politics"]) {
      ids.push(tvGenres["War & Politics"]);
    }

    return ids;
  },
};
