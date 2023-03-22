import { GrAddCircle } from "react-icons/all";
import {
    AddListItemWrapper,
    AddListText,
    IconWrapper,
} from "@/components/List/AddListItem/AddListItem.styled";

export default function AddListItem() {
    return (
        <AddListItemWrapper>
            <IconWrapper>
                <GrAddCircle size={42} />
            </IconWrapper>
            <AddListText>Add a list</AddListText>
        </AddListItemWrapper>
    );
}
