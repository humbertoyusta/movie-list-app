"use client";

import styled from "styled-components";

export const LogoStyled = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
    top: 50%;
    left: 50%;
    // add two transforms in the same line, transforms translate(-50%, -50%), opacity 0.3s ease-in-out
    transform: translate(-50%, -50%);
    opacity: 0.9;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`;
