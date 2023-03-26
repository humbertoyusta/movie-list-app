import styled from "styled-components";
import { theme } from "@/theme";

export const SelectedMoviesBarWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.gray};
    padding: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const SelectedMoviesCounter = styled.span`
    text-align: center;
    flex-grow: 1;
`;
