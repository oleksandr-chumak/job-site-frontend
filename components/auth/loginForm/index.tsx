import React from 'react';
import {Wrapper,Header,Title,Decor,Separator,Redirection,CustomLink,ResetPassword} from "./styled"
import {CustomInput,AuthButton} from "@UI"
import {GoogleAuthButton} from "../../UI/googleAuthButton";

export const LoginForm = () => {
    return (
        <Wrapper>
            <Header>Авторизація</Header>
            <Title>Email</Title>
            <CustomInput/>
            <Title>Password</Title>
            <CustomInput/>
            <AuthButton>УВІЙТИ</AuthButton>
            <ResetPassword>Забули пароль?</ResetPassword>
            <Decor>
                <Separator>OR</Separator>
            </Decor>
            <GoogleAuthButton/>
            <Redirection>Ще не зарегестровані?<CustomLink href={"/register"}>Зарегеструйтеся</CustomLink></Redirection>
        </Wrapper>
    );
};

