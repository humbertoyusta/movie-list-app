"use client";

import {
    ImageWrapper,
    MovieDetailsInfo,
    MovieDetailsInfoWrapper,
    MovieDetailsWrapper,
} from "@/components/MovieDetails/MovieDetails.styled";
import NextImage from "@/components/NextImage";
import { MovieWithDetails } from "@/types/MovieWithDetails";

export default function MovieDetails({ movie }: { movie: MovieWithDetails }) {
    return (
        <MovieDetailsWrapper>
            <ImageWrapper>
                {movie?.Poster !== "N/A" && (
                    <NextImage
                        src={movie?.Poster || ""}
                        alt={movie?.Title || "Movie Title"}
                    />
                )}
            </ImageWrapper>
            <MovieDetailsInfoWrapper>
                <MovieDetailsInfo>Rating: {movie?.imdbRating}</MovieDetailsInfo>
                <MovieDetailsInfo>Year: {movie?.Year}</MovieDetailsInfo>
                <MovieDetailsInfo>Genre: {movie?.Genre}</MovieDetailsInfo>
                <MovieDetailsInfo>Actors: {movie?.Actors}</MovieDetailsInfo>
                <MovieDetailsInfo>Director: {movie?.Director}</MovieDetailsInfo>
            </MovieDetailsInfoWrapper>
        </MovieDetailsWrapper>
    );
}
