"use client";

import styled from "styled-components";
import Link from "next/link";

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    flex-wrap: wrap;
    gap: 4vw;
    margin-left: 16vw;
    margin-right: 2vw;
    width: 76vw;
    padding: 2vw 3vw;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;
