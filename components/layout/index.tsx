import React from 'react';
import {Header} from "./header";
import Container from "../../styled-components/Container";

interface IProps {
    children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({children}) => {
    return (
        <>
            <Header/>
            <section>
                <Container>
                    {children}
                </Container>
            </section>

        </>
    );
};
