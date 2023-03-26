import { MovieResult } from "@/types/MovieResult";
import { MovieResultsWrapper } from "@/components/MovieResults/MovieResults.styled";
import MovieResultItem from "@/components/MovieResults/MovieResultItem";

interface IMovieResultsProps {
    movieResults: MovieResult[];
    selectedMovies: string[];
    addMovie: (imdbID: string) => void;
    removeMovie: (imdbID: string) => void;
}

export default function MovieResults({
    movieResults,
    selectedMovies,
    addMovie,
    removeMovie,
}: IMovieResultsProps) {
    return (
        <MovieResultsWrapper>
            {movieResults.map((movie) => (
                <MovieResultItem
                    key={movie?.imdbID}
                    movie={movie}
                    selected={selectedMovies.includes(movie?.imdbID || "")}
                    onClick={
                        selectedMovies.includes(movie?.imdbID || "")
                            ? () => removeMovie(movie?.imdbID || "")
                            : () => addMovie(movie?.imdbID || "")
                    }
                />
            ))}
        </MovieResultsWrapper>
    );
}
