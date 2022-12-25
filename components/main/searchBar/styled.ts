import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 10px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  @media(max-width: ${props => props.theme.constants.display.TABLE_MEDIUM}px){
    flex-direction: column;
    height: auto;
  }

`
export const FieldWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 50px;
`
export const LocationDecor = styled(LocationOnIcon)`
  flex: 0 0 auto;
  font-size: 25px;


`
export const SearchDecor = styled(SearchIcon)`
  flex: 0 0 auto;
  font-size: 25px;
`
export const Field = styled.input`
  border: 0;
  outline: none;
  font-size: 16px;
  padding-right: 10px;
  flex: 1 1 auto;
  @media(max-width: ${props => props.theme.constants.display.TABLE_MEDIUM}px){
    font-size: 13px;
  }
  
`
export const SearchBtn = styled.div`
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: normal;
  cursor: pointer;
  font-size: 15px;
  border-radius: 20px;
  height: 40px;
  
  background-color: ${props => props.theme.colors.mainColor};
`