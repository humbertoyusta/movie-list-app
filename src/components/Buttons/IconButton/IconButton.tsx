import { IconButtonWrapper } from "@/components/Buttons/IconButton/IconButton.styled";
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

interface IButtonProps {
    kind: "back" | "close";
    onClick?: () => void;
}

export default function IconButton({ kind, onClick }: IButtonProps) {
    return (
        <IconButtonWrapper onClick={onClick}>
            {kind === "back" && <TiArrowBack size={28} />}
            {kind === "close" && <AiOutlineClose size={28} />}
        </IconButtonWrapper>
    );
}
