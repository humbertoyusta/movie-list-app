import styled from "styled-components";
import { theme } from "@/theme";

export const MovieResultItemWrapper = styled.div`
    width: calc(16% - 20px);
    height: 28vh;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s ease-in-out;
    background-color: ${theme.colors.gray};

    &:hover {
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
        scale: 1.05;
    }
`;

export const MovieResultItemInnerWrapper = styled.div<{ selected: boolean }>`
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    scale ${({ selected }) => (selected ? 0.85 : 1)}
`;

export const MovieResultItemPosterWrapper = styled.div`
    position: relative;
    width: 10vw;
    height: 100%;
`;

export const MovieResultItemTitle = styled.h2`
    font-size: 1.2em;
    font-weight: 400;
`;
