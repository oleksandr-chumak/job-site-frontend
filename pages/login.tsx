import React from 'react';
import {FormLayout, LoginForm} from "@components";


const Login = () => {
    return (
        <FormLayout href={"/register"} redirectionText={"Ще не зарегестровані?"} linkText={"Зарегеструйтеся"}
                    header={"Авторизація"}>
            <LoginForm/>
        </FormLayout>
    );
};

export default Login;