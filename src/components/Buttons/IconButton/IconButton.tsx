import { IconButtonWrapper } from "@/components/Buttons/IconButton/IconButton.styled";
import { TiArrowBack } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/all";

interface IButtonProps {
    kind: "back" | "close" | "add";
    onClick?: () => void;
    color?: "gray";
    noPadding?: boolean;
    disabled?: boolean;
}

export default function IconButton({
    kind,
    onClick,
    color,
    noPadding,
    disabled,
}: IButtonProps) {
    return (
        <IconButtonWrapper
            color={color}
            onClick={onClick}
            noPadding={noPadding}
            disabled={disabled}
        >
            {kind === "back" && <TiArrowBack size={28} />}
            {kind === "close" && <AiOutlineClose size={noPadding ? 20 : 28} />}
            {kind === "add" && <MdPlaylistAdd size={24} />}
        </IconButtonWrapper>
    );
}
