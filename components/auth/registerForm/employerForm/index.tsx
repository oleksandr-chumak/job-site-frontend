import React from 'react';
import {Title} from "../../loginForm/styled";
import {CustomInput} from "@UI";

export const EmployerForm = () => {
    return (
        <>
            <Title>Назва компії</Title>
            <CustomInput/>
            <Title>Email</Title>
            <CustomInput/>
            <Title>Password</Title>
            <CustomInput/>
            <Title>Confirm password</Title>
            <CustomInput/>
        </>
    );
};

