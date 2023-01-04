import styled from 'styled-components';
import {Props} from "@ThemeType"
import Link from "next/link";

export const Wrapper = styled.div`
`
export const Header = styled.h2`
  text-align: center;
  margin: 0 0 30px 0;
`
export const Title = styled.h3`
  font-weight: 300;
  font-size: 13px;
  margin: 0 0 5px 0;
`
export const SelectionWrapper = styled.div`
`
export const Selection = styled.div`
`
export const Decor = styled.div<Props>`
  position: relative;
  border-bottom: 0.5px solid ${props => props.theme.colors.mainFontColor};
  margin: 30px 0;
`
export const Separator = styled.div`
  border: 0.5px solid ${props => props.theme.colors.mainFontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 2px 4px;
  border-radius: 5px;
  background-color: white;
  font-size: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const ResetPassword = styled.p`
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
  text-align: end;
  transition: all 0.3s ease 0s;
  &:hover{
    color: ${props => props.theme.colors.secondFontColor};
  }
`
export const Redirection = styled.p`
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
`
export const CustomLink = styled(Link)`
  color: ${props => props.theme.colors.secondFontColor};
`

