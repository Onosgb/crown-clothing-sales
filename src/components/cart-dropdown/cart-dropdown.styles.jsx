import styled from 'styled-components';
const buttonStyles = styled.button`
margin-top: auto;
`
export const CardDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
${buttonStyles}
`;

export const EmptyMessageContainer = styled.span`
font-size: 18px;
margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
`;

