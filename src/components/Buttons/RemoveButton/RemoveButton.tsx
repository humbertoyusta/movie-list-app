import { ButtonWrapper } from "@/components/Buttons/RemoveButton/RemoveButton.styled";
import { MdDeleteForever } from "react-icons/md";

export default function RemoveButton({ onRemove }: { onRemove: () => void }) {
    return (
        <ButtonWrapper
            onClick={(e) => {
                e.preventDefault();
                onRemove();
            }}
        >
            <MdDeleteForever size={36} color={"#e04141"} />
        </ButtonWrapper>
    );
}
