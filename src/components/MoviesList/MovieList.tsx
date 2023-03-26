"use client";

import { MovieListWrapper } from "@/components/MoviesList/MovieList.styled";
import MovieItem from "@/components/MoviesList/MovieItem";
import { sdk } from "@/graphql/client";
import AddMovieItem from "@/components/MoviesList/AddMovieItem";
import useAsync from "@/hooks/useAsync";

interface MovieListProps {
    listId: number;
}

export default function MovieList({ listId }: MovieListProps) {
    const {
        data: movies,
        loading,
        error,
        reCall: refetch,
    } = useAsync(async () => {
        const movieList = await sdk.getMovieList({ id: listId });
        return movieList.getMovieListItems;
    });

    async function handleRemoveMovies(movieId: number) {
        await sdk.removeMovie({ listId: listId, movieId: movieId });
        refetch();
    }

    return (
        <MovieListWrapper>
            {movies &&
                movies.map((movie, index) => (
                    <MovieItem
                        key={`${movie.movie.imdbID}-${index}`}
                        movie={movie}
                        index={index}
                        onRemove={() => handleRemoveMovies(movie.id)}
                    />
                ))}
            {movies && (
                <AddMovieItem
                    listId={listId}
                    movies={movies}
                    refetchMovies={refetch}
                />
            )}
        </MovieListWrapper>
    );
}
