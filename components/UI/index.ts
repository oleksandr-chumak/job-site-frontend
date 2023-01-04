import styled from "styled-components";
import {Props} from "@ThemeType"
export const CustomInput = styled.input`
  width: 100%;
  color: ${(props) => props.theme.colors.thirdFontColor};
  height: 35px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.mainFontColor};
  border-radius: 5px;
  font-size: 16px;
  padding-left: 20px;
  font-weight: 200;
  margin: 0 0 20px 0;
`
export const  AuthButton = styled.button<Props>`
  height: 35px;
  display: flex;
  border: 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.mainColor};
  font-weight: 500;
  cursor: pointer;
  color: #eeeeee;
  letter-spacing: 1px;
  transition: all 0.3s ease 0s ;
  &:hover{
    background-color: ${props => props.theme.colors.secondFontColor} ;
  }
`
