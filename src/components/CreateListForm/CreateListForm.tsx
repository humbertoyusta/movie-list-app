import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import {
    ButtonExternalWrapper,
    Form,
} from "@/components/CreateListForm/CreateListForm.styled";
import Button from "@/components/Button";

export default function CreateListForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<{ name: string }>();

    function handleCreateList({ name }: { name: string }) {
        console.log(name);
    }

    return (
        <Form onSubmit={handleSubmit(handleCreateList)}>
            <Input
                label={"List name"}
                errors={errors.name?.message?.toString()}
                {...register("name", { required: true })}
            />
            <ButtonExternalWrapper>
                <Button
                    text="Create List"
                    type="submit"
                    disabled={isSubmitting}
                />
            </ButtonExternalWrapper>
        </Form>
    );
}
