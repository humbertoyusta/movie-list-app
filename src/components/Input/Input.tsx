"use client";

import { forwardRef } from "react";
import { ErrorTextStyled, InputStyled, LabelStyled } from "./Input.styled";

type InputProps = {
    name: string;
    label: string;
    errors?: string;
    rest?: any;
};

function Input({ name, label, errors, ...rest }: InputProps, ref: any) {
    return (
        <div>
            <LabelStyled htmlFor={name}></LabelStyled>
            <InputStyled
                ref={ref}
                name={name}
                placeholder={label}
                hasError={Boolean(errors)}
                {...rest}
            />
            {errors && <ErrorTextStyled>{errors}</ErrorTextStyled>}
        </div>
    );
}

export default forwardRef(Input);
