import { SearchMovieByTitleQuery } from "@/generated/graphql";

export type MovieResult = NonNullable<
    SearchMovieByTitleQuery["searchMovieByTitle"]
>[0];
