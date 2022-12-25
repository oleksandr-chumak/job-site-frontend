import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 150px;
  flex-direction: column;
  height: calc(100vh - 70px);
  gap: 80px;
  @media (max-width: ${props => props.theme.constants.display.TABLET}px) {
    padding-top: 120px;
    gap: 70px;
  }
  @media (max-width: ${props => props.theme.constants.display.TABLE_MEDIUM}px) {
    padding-top: 80px;
    gap: 50px;
  }
  @media (max-width: ${props => props.theme.constants.display.TELEPHONE}px) {
    padding-top: 50px;
    gap: 30px;
  }
`
export const Title = styled.h1`
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 40px;
  @media (max-width: ${props => props.theme.constants.display.TABLET}px) {
    font-size: 32px;
  }
  @media (max-width: ${props => props.theme.constants.display.TABLE_MEDIUM}px) {
    font-size: 30px;
  }
  @media (max-width: ${props => props.theme.constants.display.TELEPHONE}px) {
    font-size: 6vw;
  }
`
export const Span = styled.span`
  color: ${props => props.theme.colors.mainColor};
`