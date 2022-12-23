import React, {useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/logo.svg'
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 3px 0px rgba(226, 207, 207, 0.75);

`
const RouteList = styled.ul`
  display: flex;
  gap: 30px;
  flex: 1 1 auto;
  height: 20px;
  @media (max-width: 768px) {
    flex: 0 0 100px;

    flex-direction: column;

  }

`

const Logo = styled(Image)`
  flex: 0 0 120px;
  max-height: 70px;
  @media (max-width: 768px) {
    flex: 0 0 100px;
  }
`
const Route = styled(Link)`
  transition: all 0.3s ease 0s;

  &:hover {
    color: rgb(107, 42, 217);
  }

`
const Nav = styled.div`
  gap: 20px;
  display: flex;
  height: 70px;
  align-items: center;
  width: 100%;
  
`
const BurgerMenuWrapper = styled.div`
  justify-content: end;
  display: flex;
  flex: 1 1 auto;
`
const BurgerMenu = styled(MenuIcon)`
  display: none;
  cursor: pointer;
  font-size: 40px;
  @media (max-width: 768px) {
    display: block;
  }
`
const RouteWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 2 2 auto;
  transition: all 0.3s ease 0s;
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    padding-top: 80px;
    top: 0;
    right: 0;
    transform: translate(100%);
    background-color: rgb(241, 242, 246)  ;
    height: 100vh;
    width: 300px;
    box-shadow: -4px 2px 6px 0px rgba(226,207,207,0.75);
  }
  @media (max-width: 479px){
    width: 100%;
  }
`
const Close = styled(CloseIcon)`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    font-size: 40px;
    top: 15px;
    right: 15px;
  }

`
const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 0 0 auto;
  @media (max-width: 768px) {
    flex: 0 0 auto;
    flex-direction: column;
  }

`
const SignUpBtn = styled(Link)`
  width: 150px;
  color: rgb(107, 42, 217);
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  border: 1px solid rgb(107, 42, 217);
  border-radius: 20px;
  height: 40px;
`
export const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    return (
        <Wrapper>
            <div className="container">
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
                            <SignUpBtn href={'/signup'}>Зареєструватися</SignUpBtn>
                        </Auth>
                    </RouteWrapper>
                    <BurgerMenuWrapper>
                        <BurgerMenu onClick={() => setIsMenuOpen(true)}/>
                    </BurgerMenuWrapper>
                </Nav>
            </div>
        </Wrapper>
    );
};

