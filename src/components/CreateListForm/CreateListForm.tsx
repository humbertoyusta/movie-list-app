import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import {
    ButtonExternalWrapper,
    Form,
} from "@/components/CreateListForm/CreateListForm.styled";
import Button from "@/components/Buttons/Button";
import { sdk } from "@/graphql/client";
import { MY_EMAIL_KEY } from "@/constants";
import { useRouter } from "next/navigation";

export default function CreateListForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<{ name: string }>();
    const router = useRouter();

    async function handleCreateList({ name }: { name: string }) {
        const {
            createList: { id },
        } = await sdk.createList({
            name: name,
            email: MY_EMAIL_KEY,
        });
        router.push(`/lists/${id}`);
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
