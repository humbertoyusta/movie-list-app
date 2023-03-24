import { ListWrapper, StyledLink } from "@/components/List/List.styled";
import ListItem from "@/components/List/ListItem";
import AddListItem from "@/components/List/AddListItem";
import IMovieList from "@/interfaces/IMovieList";

export default function List({ movieLists }: { movieLists: IMovieList[] }) {
    return (
        <ListWrapper>
            {movieLists.map((movieList) => (
                <StyledLink href={`/lists/${movieList.id}`} key={movieList.id}>
                    <ListItem key={movieList.id} movieList={movieList} />
                </StyledLink>
            ))}
            <AddListItem />
        </ListWrapper>
    );
}
