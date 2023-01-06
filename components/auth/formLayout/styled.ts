import styled from "styled-components";
import Link from "next/link";
import {Props} from "@ThemeType";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
  overflow: auto;

`

export const Form = styled.div`
  background-color: white;
  width: 320px;
  color: ${(props) => props.theme.colors.mainFontColor};
  padding: 30px;
  min-height: 450px;

`
export const Redirection = styled.p`
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
`
export const CustomLink = styled(Link)`
  color: ${props => props.theme.colors.secondFontColor};
`
export const Header = styled.h2`
  text-align: center;
  margin: 0 0 30px 0;
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