import React from 'react';
import {Wrapper,SearchBtn,FieldWrapper,SearchDecor,LocationDecor,Field} from "./styled";

export const SearchBar = () => {
    return (
        <Wrapper>
            <FieldWrapper>
                <SearchDecor/>
                <Field placeholder="Посада або ключові слова"/>
            </FieldWrapper>
            <FieldWrapper>
               <LocationDecor/>
                <Field placeholder="Київ"/>
            </FieldWrapper>
            <SearchBtn>Пошук</SearchBtn>
        </Wrapper>
    );
};

