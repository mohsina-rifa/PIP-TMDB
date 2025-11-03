export type Show = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  cast: Cast[];
  release_year: number;
  rating: number;
  genres: string[];
};

export type Cast = {
  name: string;
  role: string;
  gender: "male" | "female";
  image: string;
}