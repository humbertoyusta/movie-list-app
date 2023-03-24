"use client";

import { ListWrapper, StyledLink } from "@/components/List/List.styled";
import ListItem from "@/components/List/ListItem";
import AddListItem from "@/components/List/AddListItem";
import IMovieList from "@/interfaces/IMovieList";
import { useState } from "react";
import { sdk } from "@/graphql/client";

interface IListProps {
    initialMovieLists: IMovieList[];
}

export default function List({ initialMovieLists }: IListProps) {
    const [movieLists, setMovieLists] = useState(initialMovieLists);

    async function handleRemoveList(movieListId: number) {
        if (await sdk.removeList({ id: movieListId }))
            setMovieLists(
                movieLists.filter((movieList) => movieList.id !== movieListId)
            );
    }

    return (
        <ListWrapper>
            {movieLists.map((movieList) => (
                <StyledLink href={`/lists/${movieList.id}`} key={movieList.id}>
                    <ListItem
                        key={movieList.id}
                        movieList={movieList}
                        onRemove={() => handleRemoveList(movieList.id)}
                    />
                </StyledLink>
            ))}
            <AddListItem />
        </ListWrapper>
    );
}
