import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
`

export const Form = styled.div`
  background-color: white;
  width: 320px;
  color: ${(props) => props.theme.colors.mainFontColor};
  padding: 30px;
  min-height: 450px;
  
`