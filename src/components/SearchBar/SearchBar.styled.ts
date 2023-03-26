"use client";

import styled from "styled-components";

export const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 500px;
    border-radius: 30px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SearchBarInput = styled.input`
    border: none;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    font-size: 16px;
    width: 500px;
    margin-right: 0;
    height: 42px;
    &:focus {
        outline: none;
    }
`;

export const SearchBarIcon = styled.div`
    border: none;
    border-radius: 30px;
    margin-left: 0;
    padding: 0;
    background: white url("/search-icon.svg") no-repeat 10px 50%;
    background-size: 30px 30px;
    height: 42px;
    width: 54px;
`;
