import { MovieResult } from "@/types/MovieResult";
import { MovieResultsWrapper } from "@/components/MovieResults/MovieResults.styled";
import MovieResultItem from "@/components/MovieResults/MovieResultItem";

export default function MovieResults({
    movieResults,
}: {
    movieResults: MovieResult[];
}) {
    console.log(movieResults.length);
    return (
        <MovieResultsWrapper>
            {movieResults.map((movie) => (
                <MovieResultItem key={movie?.imdbID} movie={movie} />
            ))}
        </MovieResultsWrapper>
    );
}
