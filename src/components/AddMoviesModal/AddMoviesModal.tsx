import { AddMoviesModalWrapper } from "@/components/AddMoviesModal/AddMoviesModal.styled";
import AddMoviesModalHeader from "@/components/AddMoviesModal/AddMoviesModalHeader";
import { useState } from "react";
import { sdk } from "@/graphql/client";
import useAsync from "@/hooks/useAsync";
import LoadingAnimation from "@/components/LoadingAnimation";
import { MovieResult } from "@/types/MovieResult";
import MovieResults from "@/components/MovieResults";

export default function AddMoviesModal({ close }: { close: () => void }) {
    const [searchValue, setSearchValue] = useState<string>("make");

    const {
        data: movies,
        loading,
        error,
    } = useAsync(async () => sdk.searchMovieByTitle({ title: searchValue }));

    if (!loading) console.log(movies?.searchMovieByTitle as MovieResult[]);

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
            {movies && movies.searchMovieByTitle && (
                <MovieResults movieResults={movies.searchMovieByTitle} />
            )}
        </AddMoviesModalWrapper>
    );
}
