import styled from "styled-components";
import { theme } from "@/theme";

export const ButtonWrapper = styled.button`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.light_gray};
    color: ${theme.colors.dark_gray};
    padding: 6px 12px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    :hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
`;
