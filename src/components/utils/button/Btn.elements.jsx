import styled from 'styled-components';


export const LinkButton = styled.button`
font-weight: bold;
 margin: 1rem;
 width: 120px;
 height:48px;
 font-size: 1.2rem;
 background-color:${bgColor => bgColor ?"#ecea7a": bgColor  } ;
 cursor:pointer;
 border-radius:10px;
 outline: none;

 &:hover{
     background-color: white;
 }
`