import { AddMoviesModalHeaderWrapper } from "@/components/AddMoviesModal/AddMoviesModalHeader/AddMoviesModalHeader.styled";
import SearchBar from "@/components/SearchBar";
import IconButton from "@/components/Buttons/IconButton";
import { MdPlaylistAdd } from "react-icons/all";

export default function AddMoviesModalHeader({
    setSearchValue,
    close,
}: {
    setSearchValue: (value: string) => void;
    close: () => void;
}) {
    return (
        <AddMoviesModalHeaderWrapper>
            <MdPlaylistAdd size={28} />
            <SearchBar setSearchValue={setSearchValue} />
            <IconButton kind={"close"} onClick={() => close()} />
        </AddMoviesModalHeaderWrapper>
    );
}
