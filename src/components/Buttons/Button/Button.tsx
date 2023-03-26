import { ButtonHTMLAttributes } from "react";
import { ButtonWrapper } from "@/components/Buttons/Button/Button.styled";

interface IButtonProps {
    text: string;
}

export default function Button({
    text,
    ...rest
}: IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
    return <ButtonWrapper {...rest}>{text}</ButtonWrapper>;
}
