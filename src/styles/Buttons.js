import { Link } from "react-router-dom";
import styled from "styled-components";
import { RuthColor } from "./ColorStyles";

export const mainButton = styled.button`
max-width: 160px;
height: 56px;
width: 100%;
background: ${RuthColor.primary};
border-radius: 10px;
outline: none;
border: none;
font-size: 18px;
font-weight: 600;
transition: 0.3s ease-in;
display: flex;
justify-content: center;
align-items: center;
color: ${RuthColor.white};
:hover{
    background: ${RuthColor.white};
    color: ${RuthColor.primary};
    border: 2px solid  ${RuthColor.primary};
}
`


export const linkButton = styled(Link)`
max-width: 160px;
height: 56px;
width: 100%;
background: ${RuthColor.primary};
border-radius: 10px;
outline: none;
border: none;
font-size: 18px;
font-weight: 600;
transition: 0.3s ease-in;
display: flex;
justify-content: center;
align-items: center;
color: ${RuthColor.white};
:hover{
    background: ${RuthColor.white};
    color: ${RuthColor.primary};
    border: 2px solid  ${RuthColor.primary};
}
`