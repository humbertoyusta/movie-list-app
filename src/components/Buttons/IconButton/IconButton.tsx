import { IconButtonWrapper } from "@/components/Buttons/IconButton/IconButton.styled";
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/all";

interface IButtonProps {
    kind: "back" | "close" | "add";
    onClick?: () => void;
    color?: "gray";
    noPadding?: boolean;
}

export default function IconButton({
    kind,
    onClick,
    color,
    noPadding,
}: IButtonProps) {
    return (
        <IconButtonWrapper
            color={color}
            onClick={onClick}
            noPadding={noPadding}
        >
            {kind === "back" && <TiArrowBack size={28} />}
            {kind === "close" && <AiOutlineClose size={noPadding ? 20 : 28} />}
            {kind === "add" && <MdPlaylistAdd size={24} />}
        </IconButtonWrapper>
    );
}
