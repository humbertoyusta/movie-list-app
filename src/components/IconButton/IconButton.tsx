import Image from "next/image";
import { IconButtonWrapper } from "@/components/IconButton/IconButton.styled";

interface IButtonProps {
    kind: "back";
    onClick?: () => void;
}

export default function IconButton({ kind, onClick }: IButtonProps) {
    return (
        <IconButtonWrapper onClick={onClick}>
            {kind === "back" && (
                <Image src={"/back.svg"} width={20} height={20} alt="go-back" />
            )}
        </IconButtonWrapper>
    );
}
