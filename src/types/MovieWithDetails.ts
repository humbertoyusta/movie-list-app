import { GetMovieQuery } from "@/generated/graphql";

export type MovieWithDetails = GetMovieQuery["searchMovieById"];
