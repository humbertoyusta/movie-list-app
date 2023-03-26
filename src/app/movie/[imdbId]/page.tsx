import { sdk } from "@/graphql/client";
import Header from "@/components/Header";
import MovieDetails from "@/components/MovieDetails";

export default async function Page({ params }: { params: { imdbId: string } }) {
    const movie = await sdk.getMovie({ imdbId: params.imdbId });

    return (
        <>
            <Header title={movie.searchMovieById?.Title || ""} hasBackButton />
            <MovieDetails movie={movie.searchMovieById} />
        </>
    );
}
