import React from 'react';
import {GoogleAuthButton} from "./googleAuthButton";
import {CustomLink, Header, Separator, Decor, Redirection, Form, Wrapper} from "./styled";

interface Props {
    children: React.ReactNode;
    redirectionText: string;
    linkText: string;
    href: string;
    header: string;


}

export const FormLayout: React.FC<Props> = ({children, linkText,
                                                href, redirectionText, header}) => {
    return (
        <Wrapper>
            <Form>
                <Header>{header}</Header>
                <>
                    {children}
                </>
                <Decor>
                    <Separator>OR</Separator>
                </Decor>
                <GoogleAuthButton/>
                <Redirection>{redirectionText}<CustomLink href={href}>{linkText}</CustomLink></Redirection>
            </Form>
        </Wrapper>
    );
};

