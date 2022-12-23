import React from 'react';
import {Header} from "./header";

interface IProps {
    children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({children}) => {
    return (
        <>
            <Header/>
            <section>
                <div className="container">
                    {children}
                </div>
            </section>

        </>
    );
};
