import { GetMovieListQuery } from "@/generated/graphql";

export type Movie = GetMovieListQuery["getMovieListItems"][0];
