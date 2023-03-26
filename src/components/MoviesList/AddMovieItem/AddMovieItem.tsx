"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { GrAddCircle } from "react-icons/gr";
import {
    AddMovieItemWrapper,
    AddMovieText,
    IconWrapper,
} from "@/components/MoviesList/AddMovieItem/AddMovieItem.styled";
import AddMoviesModal from "@/components/AddMoviesModal";

export default function AddMovieItem() {
    const [showAddMoviesModal, setShowAddMoviesModal] = useState(false);

    return (
        <>
            <AddMovieItemWrapper
                onClick={() => setShowAddMoviesModal(true)}
                initial={{ opacity: 0, rotate: -5, x: -15, y: -15 }}
                animate={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
                exit={{ opacity: 0, rotate: -5, x: -15, y: -15 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <IconWrapper>
                    <GrAddCircle size={42} />
                </IconWrapper>
                <AddMovieText>Add a movie</AddMovieText>
            </AddMovieItemWrapper>
            {showAddMoviesModal && (
                <Modal onClose={() => setShowAddMoviesModal(false)}>
                    <AddMoviesModal
                        close={() => setShowAddMoviesModal(false)}
                    />
                </Modal>
            )}
        </>
    );
}
