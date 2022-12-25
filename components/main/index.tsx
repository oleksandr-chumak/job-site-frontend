import React from 'react';
import { Wrapper,Title,Span } from './styled';
import {SearchBar} from "./searchBar";

export const Main = () => {
    return (
        <Wrapper>
            <Title>
                Знайдіть <Span>Улюблену Роботу</Span><br/>
                Яку Заслуговуєте
            </Title>
            <SearchBar/>
        </Wrapper>
    );
};

