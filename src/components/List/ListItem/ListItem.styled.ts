"use client";

import styled from "styled-components";

export const ListItemWrapper = styled.div`
    color: black;
    width: 16vw;
    height: 12vw;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 2vw;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-8px);
    }
`;

export const MovieListName = styled.h2`
    font-size: 1em;
    font-weight: 400;
    margin-top: 6px;
    text-decoration: none;
`;

export const IconWrapper = styled.div`
    margin-top: 3vw;
`;
