"use client";

import { MovieListWrapper } from "@/components/MoviesList/MovieList.styled";
import MovieItem from "@/components/MoviesList/MovieItem";
import { Movie } from "@/types/Movie";
import { useState } from "react";
import { sdk } from "@/graphql/client";
import AddMovieItem from "@/components/MoviesList/AddMovieItem";

interface MovieListProps {
    listId: number;
    initialMovies: Movie[];
}

export default function MovieList({ listId, initialMovies }: MovieListProps) {
    const [movies, setMovies] = useState<Movie[]>(initialMovies);

    async function handleRemoveMovies(movieId: number) {
        if (await sdk.removeMovie({ listId: listId, movieId: movieId }))
            setMovies(movies.filter((movie) => movie.id !== movieId));
    }

    async function refetchMovies() {
        const movieList = await sdk.getMovieList({ id: listId });
        setMovies(movieList.getMovieListItems);
    }

    return (
        <MovieListWrapper>
            {movies.map((movie, index) => (
                <MovieItem
                    key={`${movie.movie.imdbID}-${index}`}
                    movie={movie}
                    index={index}
                    onRemove={() => handleRemoveMovies(movie.id)}
                />
            ))}
            <AddMovieItem
                listId={listId}
                movies={movies}
                refetchMovies={refetchMovies}
            />
        </MovieListWrapper>
    );
}
