import { AddMoviesModalWrapper } from "@/components/AddMoviesModal/AddMoviesModal.styled";
import AddMoviesModalHeader from "@/components/AddMoviesModal/AddMoviesModalHeader";
import { useCallback, useState } from "react";
import { sdk } from "@/graphql/client";
import useAsync from "@/hooks/useAsync";
import LoadingAnimation from "@/components/Animations/LoadingAnimation";
import MovieResults from "@/components/MovieResults";
import SelectedMoviesBar from "@/components/AddMoviesModal/SelectedMoviesBar";
import { Movie } from "@/types/Movie";
import SearchForSomethingAnimation from "@/components/Animations/SearchForSomethingAnimation";

interface IAddMoviesModalProps {
    listId: number;
    close: () => void;
    movies: Movie[];
    refetchMovies: () => void;
}

export default function AddMoviesModal({
    listId,
    movies,
    close,
    refetchMovies,
}: IAddMoviesModalProps) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedMovies, setSelectedMovies] = useState<string[]>([]);
    const movieIds = movies.map((movie) => movie.movie?.imdbID || "");

    const syncMovies = useCallback(async () => {
        await Promise.all(
            selectedMovies.map((imdbId) =>
                sdk.addMovie({ listId: listId, imdbId: imdbId })
            )
        );
        refetchMovies();
        close();
    }, [selectedMovies, refetchMovies, close, listId]);

    const {
        data: resultMovies,
        loading,
        error,
    } = useAsync(
        useCallback(
            async () => sdk.searchMovieByTitle({ title: searchValue }),
            [searchValue]
        )
    );

    if (error) {
        console.error(error.message);
        return <p>Something went wrong</p>;
    }

    return (
        <AddMoviesModalWrapper>
            <AddMoviesModalHeader
                setSearchValue={setSearchValue}
                close={close}
            />
            {loading && <LoadingAnimation />}
            {resultMovies && !resultMovies?.searchMovieByTitle && (
                <SearchForSomethingAnimation />
            )}
            {resultMovies && resultMovies.searchMovieByTitle && (
                <MovieResults
                    movieResults={resultMovies.searchMovieByTitle.filter(
                        (movie) => !movieIds.includes(movie?.imdbID || "")
                    )}
                    selectedMovies={selectedMovies}
                    addMovie={(imdbID) =>
                        setSelectedMovies([...selectedMovies, imdbID])
                    }
                    removeMovie={(imdbID) =>
                        setSelectedMovies(
                            selectedMovies.filter((movie) => movie !== imdbID)
                        )
                    }
                />
            )}
            {selectedMovies.length > 0 && (
                <SelectedMoviesBar
                    count={selectedMovies.length}
                    syncMovies={syncMovies}
                    onClose={() => setSelectedMovies([])}
                />
            )}
        </AddMoviesModalWrapper>
    );
}
