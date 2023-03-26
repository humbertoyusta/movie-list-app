"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const MovieDetailsWrapper = styled.div`
    width: 68vw;
    margin-left: 22vw;
    margin-right: 10vw;
    margin-top: 8vh;
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const ImageWrapper = styled.div`
    width: 30vw;
    height: 36vw;
    position: relative;
`;

export const MovieDetailsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    margin-right: 2vw;
    position: relative;
    width: 24vw;
`;

export const MovieDetailsInfo = styled.p`
    color: ${theme.colors.light_black};
    font-size: 1.2rem;
    font-weight: 300;
    font-style: italic;
    padding: 4px;
    margin: 4px;
`;
