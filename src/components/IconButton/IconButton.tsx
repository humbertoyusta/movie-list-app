import { IconButtonWrapper } from "@/components/IconButton/IconButton.styled";
import { TiArrowBack } from "react-icons/ti";

interface IButtonProps {
    kind: "back";
    onClick?: () => void;
}

export default function IconButton({ kind, onClick }: IButtonProps) {
    return (
        <IconButtonWrapper onClick={onClick}>
            {kind === "back" && <TiArrowBack size={28} />}
        </IconButtonWrapper>
    );
}
