import {
    EmptyDiv,
    GrayLine,
    HeaderTitle,
    HeaderWrapper,
} from "@/components/Header/Header.styled";
import BackButton from "@/components/BackButton";

interface IHeaderProps {
    title: string;
    hasBackButton?: boolean;
}

export default function Header({ title, hasBackButton }: IHeaderProps) {
    return (
        <>
            <HeaderWrapper>
                {hasBackButton && <BackButton />}
                {!hasBackButton && <EmptyDiv key="empty-div-1" />}
                <HeaderTitle>{title}</HeaderTitle>
                <EmptyDiv key="empty-div-2" />
            </HeaderWrapper>
            <GrayLine />
        </>
    );
}
