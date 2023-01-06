import styled from 'styled-components';
import {Props} from "@ThemeType"
import Link from "next/link";



export const Title = styled.h3`
  font-weight: 300;
  font-size: 13px;
  margin: 0 0 5px 0;
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

