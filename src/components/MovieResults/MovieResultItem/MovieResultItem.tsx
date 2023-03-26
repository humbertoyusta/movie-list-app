import { MovieResult } from "@/types/MovieResult";
import {
    MovieResultItemInnerWrapper,
    MovieResultItemTitle,
    MovieResultItemWrapper,
} from "@/components/MovieResults/MovieResultItem/MovieResultItem.styled";
import Image from "next/image";

interface IMovieResultItemProps {
    movie: MovieResult;
    selected: boolean;
    onClick: () => void;
}

export default function MovieResultItem({
    movie,
    selected,
    onClick,
}: IMovieResultItemProps) {
    return (
        <MovieResultItemWrapper
            onClick={() => onClick()}
            key={`${movie?.imdbID}`}
            initial={{ opacity: 0, rotate: -5, x: -15, y: -15 }}
            animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
            exit={{ opacity: 0, rotate: -5, x: -15, y: -15 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <MovieResultItemInnerWrapper selected={selected}>
                {movie &&
                    movie.Poster &&
                    movie.Poster !== "N/A" &&
                    movie.Title && (
                        <Image
                            src={movie?.Poster}
                            alt={movie?.Title}
                            fill
                            sizes="100%"
                        />
                    )}
                <MovieResultItemTitle>{movie?.Title}</MovieResultItemTitle>
            </MovieResultItemInnerWrapper>
        </MovieResultItemWrapper>
    );
}
