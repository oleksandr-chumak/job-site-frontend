import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Wrapper = styled.nav`
  width: 100%;
  height: 70px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 3px 0px ${props => props.theme.colors.shadowColor};

`
export const RouteList = styled.ul`
  display: flex;
  gap: 30px;
  flex: 1 1 auto;
  height: 20px;
  @media (max-width: ${props =>props.theme.constants.display.TABLE_MEDIUM}px) {
    flex: 0 0 100px;

    flex-direction: column;

  }

`

export const Logo = styled(Image)`
  flex: 0 0 120px;
  max-height: 70px;
  @media (max-width: ${props =>props.theme.constants.display.TABLE_MEDIUM}px) {
    flex: 0 0 100px;
  }
`
    export const Route = styled(Link)`
  transition: all 0.3s ease 0s;

  &:hover {
    color: ${props => props.theme.colors.mainColor};
  }

`
export const Nav = styled.div`
  gap: 20px;
  display: flex;
  height: 70px;
  align-items: center;
  width: 100%;
  
`
export const BurgerMenuWrapper = styled.div`
  justify-content: end;
  display: flex;
  flex: 1 1 auto;
`
export const BurgerMenu = styled(MenuIcon)`
  display: none;
  cursor: pointer;
  font-size: 40px;
  @media (max-width: ${props =>props.theme.constants.display.TABLE_MEDIUM}px) {
    display: block;
  }
`
export const RouteWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 2 2 auto;
  transition: all 0.3s ease 0s;
  @media (max-width: ${props =>props.theme.constants.display.TABLE_MEDIUM}px) {
    position: fixed;
    flex-direction: column;
    padding-top: 80px;
    top: 0;
    right: 0;
    transform: translate(100%);
    background-color: ${props => props.theme.colors.backgroundColor};
    height: 100vh;
    width: 300px;
    box-shadow: -4px 2px 6px 0px ${props => props.theme.colors.shadowColor};
  }
  @media (max-width: ${props =>props.theme.constants.display.TELEPHONE}px){
    width: 100%;
  }
`
export const Close = styled(CloseIcon)`
  display: none;
  cursor: pointer;
  @media (max-width: ${props =>props.theme.constants.display.TABLE_MEDIUM}px) {
    display: block;
    position: absolute;
    font-size: 40px;
    top: 15px;
    right: 15px;
  }

`
export const Auth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex: 0 0 auto;
  @media (max-width: ${props =>props.theme.constants.display.TABLE_MEDIUM}px) {
    flex: 0 0 auto;
    flex-direction: column;
  }

`
export const SignUpBtn = styled(Link)`
  width: 150px;
  color: ${props => props.theme.colors.mainColor};
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.mainColor};
  border-radius: 20px;
  height: 40px;
`