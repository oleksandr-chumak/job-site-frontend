import React from 'react';
import {Title} from "../../loginForm/styled";
import {CustomInput} from "@UI";

export const EmployeeForm = () => {
    return (
        <>
            <Title>Ім'я</Title>
            <CustomInput/>
            <Title>Прізвище</Title>
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

