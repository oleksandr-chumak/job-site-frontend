import styled from "styled-components";

export const SelectionWrapper = styled.ul`
  display: flex;
  height: 45px;
  position: relative;
  margin-bottom: 20px;
`
export const Underline = styled.div`
  width: 50%;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: ${props => props.translate === "yes" && "translate(100%,0)"};
  transition: all 0.3s ease 0s;
  background-color: ${props => props.theme.colors.secondFontColor };
  border-radius: 5px;
`
export const Selection = styled.li`
  flex: 1 1 50%;  
  display: flex;
  transition: all 0.3s ease 0s;
  color: ${(props => props.color?.length && props.theme.colors.secondFontColor)};
  justify-content: center;
  align-items: center;
  cursor: pointer;

`