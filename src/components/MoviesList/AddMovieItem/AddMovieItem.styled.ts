"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const AddMovieItemWrapper = styled(motion.div)`
    width: calc(22% - 20px);
    height: 40vh;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
`;

export const IconWrapper = styled.div`
    position: relative;
    margin-top: 40%;
`;

export const AddMovieText = styled.p`
    font-size: 1em;
    font-weight: 400;
    margin-top: 6px;
`;
