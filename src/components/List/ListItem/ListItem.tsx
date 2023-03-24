import IMovieList from "@/interfaces/IMovieList";
import {
    IconWrapper,
    ListItemWrapper,
    MovieListName,
} from "@/components/List/ListItem/ListItem.styled";
import { BiImageAdd } from "react-icons/bi";

export default function ListItem({ movieList }: { movieList: IMovieList }) {
    return (
        <ListItemWrapper>
            <IconWrapper>
                <BiImageAdd size={48} />
            </IconWrapper>
            <MovieListName>{movieList.name}</MovieListName>
        </ListItemWrapper>
    );
}
