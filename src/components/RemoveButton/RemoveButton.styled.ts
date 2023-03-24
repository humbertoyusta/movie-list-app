"use client";

import styled from "styled-components";
import { IoMdRemoveCircleOutline } from "react-icons/io";

export const ButtonWrapper = styled.button`
    background: transparent;
    position: relative;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
`;

export const IconStyled = styled(IoMdRemoveCircleOutline)`
    position: relative;
    background: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
`;

export const Example = styled.div`
    position: relative;
    background: white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
`;
