import React from 'react';
import {FormLayout, RegisterForm,} from "@components";

const Register = () => {
    return (
        <FormLayout href={"/login"}  redirectionText={"Вже зарегестровані?"} linkText={"Увійдіть"} header={"Реєстрація"}>
            <RegisterForm/>
        </FormLayout>
    );
};

export default Register;