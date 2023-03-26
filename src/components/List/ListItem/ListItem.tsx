import IMovieList from "@/interfaces/IMovieList";
import {
    IconWrapper,
    ListItemInnerWrapper,
    ListItemWrapper,
    MovieListName,
    RemoveButtonWrapper,
} from "@/components/List/ListItem/ListItem.styled";
import { BiImageAdd } from "react-icons/bi";
import RemoveButton from "@/components/Buttons/RemoveButton";

interface IListItemProps {
    movieList: IMovieList;
    onRemove?: () => void;
}

export default function ListItem({ movieList, onRemove }: IListItemProps) {
    return (
        <ListItemWrapper>
            {onRemove && (
                <RemoveButtonWrapper>
                    <RemoveButton onRemove={onRemove} />
                </RemoveButtonWrapper>
            )}
            <ListItemInnerWrapper>
                <IconWrapper>
                    <BiImageAdd size={48} />
                </IconWrapper>
                <MovieListName>{movieList.name}</MovieListName>
            </ListItemInnerWrapper>
        </ListItemWrapper>
    );
}
