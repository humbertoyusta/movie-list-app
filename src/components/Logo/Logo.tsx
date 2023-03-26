import { LogoStyled } from "./Logo.styled";
import Link from "next/link";

export default function Logo({ withLink }: { withLink?: boolean }) {
    return (
        <>
            {withLink && (
                <Link href={"/"}>
                    <LogoStyled src="/logo.png" alt="Logo" />
                </Link>
            )}
            {!withLink && <LogoStyled src="/logo.png" alt="Logo" />}
        </>
    );
}
