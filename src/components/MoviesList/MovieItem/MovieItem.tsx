import {
    MovieCard,
    MovieGenres,
    MovieInfo,
    MovieInfoCard,
    MovieLink,
    MovieRating,
    MovieYear,
    RemoveButtonWrapper,
} from "./MovieItem.styled";
import Image from "next/image";
import { Movie } from "@/types/Movie";
import RemoveButton from "@/components/Buttons/RemoveButton";

interface IMovieItemProps {
    movie: Movie;
    index: number;
    onRemove?: () => void;
}

export default function MovieItem({ movie, index, onRemove }: IMovieItemProps) {
    return (
        <MovieCard
            key={`${movie.movie.imdbID}-${index}`}
            initial={{ opacity: 0, rotate: -5, x: -15, y: -15 }}
            animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
            exit={{ opacity: 0, rotate: -5, x: -15, y: -15 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <MovieLink
                href={`/movie/${movie.movie.imdbID}`}
                key={`${movie.movie.imdbID}-${index}`}
            >
                {onRemove && (
                    <RemoveButtonWrapper>
                        <RemoveButton onRemove={onRemove} />
                    </RemoveButtonWrapper>
                )}
                {movie.movie.Poster && movie.movie.Title && (
                    <Image
                        src={movie.movie.Poster}
                        alt={movie.movie.Title}
                        fill
                        sizes="100% 100%"
                    />
                )}
                <MovieInfoCard>
                    <MovieInfo>
                        <div>{movie.movie.Title}</div>
                        <MovieRating>
                            Rating: {movie.movie.imdbRating}
                        </MovieRating>
                        <MovieYear>Year: {movie.movie.Year}</MovieYear>
                        <MovieGenres>Genres: {movie.movie.Genre}</MovieGenres>
                    </MovieInfo>
                </MovieInfoCard>
            </MovieLink>
        </MovieCard>
    );
}
