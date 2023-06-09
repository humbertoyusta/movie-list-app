import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const MovieCard = styled(motion.div)`
    width: calc(22% - 20px);
    height: 40vh;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieLink = styled(Link)`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const MovieInfo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 8px;
`;

export const MovieInfoCard = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
    &:hover {
        opacity: 1;
    }
`;

export const MovieRating = styled.div`
    font-size: 14px;
`;

export const MovieYear = styled.div`
    font-size: 14px;
`;

export const MovieGenres = styled.div`
    font-size: 14px;
`;

export const RemoveButtonWrapper = styled.div`
    position: absolute;
    z-index: 20;
`;
