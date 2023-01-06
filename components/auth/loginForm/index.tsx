import React from 'react';
import {Title,ResetPassword} from "./styled"
import {CustomInput,AuthButton} from "@UI"

export const LoginForm = () => {
    return (
        <>
            <Title>Email</Title>
            <CustomInput/>
            <Title>Password</Title>
            <CustomInput/>
            <AuthButton>УВІЙТИ</AuthButton>
            <ResetPassword>Забули пароль?</ResetPassword>
        </>
    );
};

