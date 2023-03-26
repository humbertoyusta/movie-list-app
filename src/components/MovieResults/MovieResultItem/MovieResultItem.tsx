import { MovieResult } from "@/types/MovieResult";
import {
    MovieResultItemTitle,
    MovieResultItemWrapper,
} from "@/components/MovieResults/MovieResultItem/MovieResultItem.styled";
import Image from "next/image";

export default function MovieResultItem({ movie }: { movie: MovieResult }) {
    return (
        <MovieResultItemWrapper>
            {movie && movie.Poster && movie.Poster !== "N/A" && movie.Title && (
                <Image
                    src={movie?.Poster}
                    alt={movie?.Title}
                    fill
                    sizes="100%"
                />
            )}
            <MovieResultItemTitle>{movie?.Title}</MovieResultItemTitle>
        </MovieResultItemWrapper>
    );
}
