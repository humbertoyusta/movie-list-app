import { ListWrapper } from "@/components/List/List.styled";
import ListItem from "@/components/List/ListItem";
import AddListItem from "@/components/List/AddListItem";
import IMovieList from "@/interfaces/IMovieList";

export default function List({ movieLists }: { movieLists: IMovieList[] }) {
    return (
        <ListWrapper>
            {movieLists.map((movieList) => (
                <ListItem key={movieList.id} movieList={movieList} />
            ))}
            <AddListItem />
        </ListWrapper>
    );
}
