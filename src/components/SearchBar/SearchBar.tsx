import {
    SearchBarIcon,
    SearchBarInput,
    SearchBarWrapper,
} from "./SearchBar.styled";
import { useState } from "react";

interface ISearchBarProps {
    setSearchValue: (value: string) => void;
}

export default function SearchBar({ setSearchValue }: ISearchBarProps) {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        // Clear the previous timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Create a new timeout
        const newTimeoutId = setTimeout(() => {
            setSearchValue(value);
        }, 300);

        setTimeoutId(newTimeoutId);
    }

    return (
        <SearchBarWrapper>
            <SearchBarIcon />
            <SearchBarInput onChange={handleChange} />
        </SearchBarWrapper>
    );
}
