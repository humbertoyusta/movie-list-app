import {
    SearchBarIcon,
    SearchBarInput,
    SearchBarWrapper,
} from "./SearchBar.styled";

export default function SearchBar({
    setSearchValue,
}: {
    setSearchValue: (value: string) => void;
}) {
    return (
        <SearchBarWrapper>
            <SearchBarIcon />
            <SearchBarInput onChange={(e) => setSearchValue(e.target.value)} />
        </SearchBarWrapper>
    );
}
