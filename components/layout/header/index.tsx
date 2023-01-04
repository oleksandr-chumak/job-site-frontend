import React, {useState} from 'react';
import logo from '../../../public/logo.svg'
import {Wrapper,Nav,Logo,RouteWrapper,Route,RouteList,BurgerMenuWrapper,BurgerMenu,Close,Auth,SignUpBtn} from './styled'
import Container from "../../../styled-components/Container";


export const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    return (
        <Wrapper>
            <Container>
                <Nav>
                    <Logo src={logo} alt='logo' width={120} height={60}></Logo>
                    <RouteWrapper  style={isMenuOpen ? {transform:'translate(0)'} : {}}>
                        <Close onClick={() => setIsMenuOpen(false)}/>
                        <RouteList>
                            <Route href={'/'}>Головна сторінка</Route>
                            <Route href={'/jobs'}>Знайти роботу</Route>
                        </RouteList>
                        <Auth>
                            <Route href={'/login'}>Увійти</Route>
                            <SignUpBtn href={'/register'}>Зареєструватися</SignUpBtn>
                        </Auth>
                    </RouteWrapper>
                    <BurgerMenuWrapper>
                        <BurgerMenu onClick={() => setIsMenuOpen(true)}/>
                    </BurgerMenuWrapper>
                </Nav>
            </Container>
        </Wrapper>
    );
};

