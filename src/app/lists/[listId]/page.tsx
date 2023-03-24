import { sdk } from "@/graphql/client";
import Header from "@/components/Header";
import MovieList from "@/components/MoviesList";

export default async function Page({
    params: { listId },
}: {
    params: { listId: string };
}) {
    const movieList = await sdk.getMovieList({ id: parseInt(listId) });
    console.log("movieList", movieList);

    return (
        <>
            <Header title={movieList.getMovieList.name} hasBackButton />
            <MovieList
                listId={parseInt(listId) || 0}
                initialMovies={movieList.getMovieListItems}
            />
        </>
    );
}
