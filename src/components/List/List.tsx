"use client";

import { ListWrapper, StyledLink } from "@/components/List/List.styled";
import ListItem from "@/components/List/ListItem";
import AddListItem from "@/components/List/AddListItem";
import { sdk } from "@/graphql/client";
import { MY_EMAIL_KEY } from "@/constants";
import useAsync from "@/hooks/useAsync";

export default function List() {
    const {
        data: movieLists,
        loading,
        error,
        reCall: refetch,
    } = useAsync(async () => {
        const movieLists = await sdk.getMovieLists({
            email: MY_EMAIL_KEY,
        });
        return movieLists.getMovieLists;
    });

    async function handleRemoveList(movieListId: number) {
        await sdk.removeList({ id: movieListId });
        refetch();
    }

    return (
        <ListWrapper>
            {movieLists?.map((movieList) => (
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
