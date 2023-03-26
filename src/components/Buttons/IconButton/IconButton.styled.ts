"use client";

import styled from "styled-components";
import { theme } from "@/theme";

export const IconButtonWrapper = styled.button<{
    color?: "gray";
    noPadding?: boolean;
}>`
    background-color: ${({ color }) =>
        color && color === "gray" ? theme.colors.gray : "#fff"};
    border: 1px solid
        ${({ color }) =>
            color && color === "gray" ? theme.colors.gray : "#fff"};
    padding: ${({ noPadding }) => (noPadding ? "0" : "6px 12px")};

    :hover {
        border: 1px solid ${theme.colors.gray};
        border-radius: 30%;
    }
`;
