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
        <MovieResultItemWrapper onClick={() => onClick()}>
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
