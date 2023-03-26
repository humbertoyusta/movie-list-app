import { NavbarItem, NavbarWrapper } from "./Navbar.styled";

export default function Navbar() {
    return (
        <NavbarWrapper>
            <NavbarItem key="movies" href={"/"}>
                Movies
            </NavbarItem>
        </NavbarWrapper>
    );
}
