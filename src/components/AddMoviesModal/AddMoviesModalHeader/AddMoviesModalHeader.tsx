import { AddMoviesModalHeaderWrapper } from "@/components/AddMoviesModal/AddMoviesModalHeader/AddMoviesModalHeader.styled";
import SearchBar from "@/components/SearchBar";
import IconButton from "@/components/Buttons/IconButton";
import { MdOutlineLocalMovies } from "react-icons/md";

interface IAddMoviesModalHeaderProps {
    setSearchValue: (value: string) => void;
    close: () => void;
}

export default function AddMoviesModalHeader({
    setSearchValue,
    close,
}: IAddMoviesModalHeaderProps) {
    return (
        <AddMoviesModalHeaderWrapper>
            <MdOutlineLocalMovies size={28} />
            <SearchBar setSearchValue={setSearchValue} />
            <IconButton kind={"close"} onClick={() => close()} />
        </AddMoviesModalHeaderWrapper>
    );
}
