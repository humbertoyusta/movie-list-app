import {
    SelectedMoviesBarWrapper,
    SelectedMoviesCounter,
} from "@/components/AddMoviesModal/SelectedMoviesBar/SelectedMoviesBar.styled";
import IconButton from "@/components/Buttons/IconButton";
import useKeypress from "@/hooks/useKeypress";

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

    return (
        <SelectedMoviesBarWrapper>
            <IconButton
                kind="add"
                color="gray"
                noPadding
                onClick={() => syncMovies()}
            />
            <SelectedMoviesCounter>
                {count} movies selected
            </SelectedMoviesCounter>
            <IconButton kind="close" color="gray" onClick={onClose} noPadding />
        </SelectedMoviesBarWrapper>
    );
}
