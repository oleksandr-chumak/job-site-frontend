import React from 'react';
import {Wrapper,Form} from './styled'
interface Props{
    children:React.ReactNode
}

export const FormWrapper:React.FC<Props> = ({children}) => {
    return (
        <Wrapper>
            <Form>
                {children}
            </Form>
        </Wrapper>
    );
};

