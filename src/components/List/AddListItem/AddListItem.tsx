"use client";

import {
    AddListItemWrapper,
    AddListText,
    IconWrapper,
} from "@/components/List/AddListItem/AddListItem.styled";
import { useState } from "react";
import Modal from "@/components/Modal";
import CreateListForm from "@/components/CreateListForm";
import { GrAddCircle } from "react-icons/gr";

export default function AddListItem() {
    const [createListForm, setCreateListForm] = useState(false);

    return (
        <>
            <AddListItemWrapper onClick={() => setCreateListForm(true)}>
                <IconWrapper>
                    <GrAddCircle size={42} />
                </IconWrapper>
                <AddListText>Add a list</AddListText>
            </AddListItemWrapper>
            {createListForm && (
                <Modal onClose={() => setCreateListForm(false)}>
                    <CreateListForm />
                </Modal>
            )}
        </>
    );
}
