import {
    SelectedMoviesBarWrapper,
    SelectedMoviesCounter,
} from "@/components/AddMoviesModal/SelectedMoviesBar/SelectedMoviesBar.styled";
import IconButton from "@/components/Buttons/IconButton";
import useKeypress from "@/hooks/useKeypress";
import { useState } from "react";

interface ISelectedMoviesBarProps {
    count: number;
    syncMovies: () => void;
    onClose: () => void;
}

export default function SelectedMoviesBar({
    count,
    syncMovies,
    onClose,
}: ISelectedMoviesBarProps) {
    useKeypress("Enter", syncMovies);
    const [isSyncing, setIsSyncing] = useState(false);

    return (
        <SelectedMoviesBarWrapper>
            <IconButton
                kind="add"
                color="gray"
                noPadding
                onClick={() => {
                    setIsSyncing(true);
                    syncMovies();
                    setIsSyncing(false);
                }}
                disabled={isSyncing}
            />
            <SelectedMoviesCounter>
                {count} movies selected
            </SelectedMoviesCounter>
            <IconButton kind="close" color="gray" onClick={onClose} noPadding />
        </SelectedMoviesBarWrapper>
    );
}
