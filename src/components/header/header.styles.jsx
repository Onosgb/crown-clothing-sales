import styled from 'styled-components';

import {Link} from 'react-router-dom';



export const HeaderContainer = styled.div({
    height: '70px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px'
});


export const LogoContainer = styled(Link)`
height: 100%;
width: 70px';
padding: '25px
`;


export const OptionsContainer = styled.div({
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
});


export const OptionContainer = styled.div({
    padding: '10px 15px',
    cursor: 'pointer'
});

export const OptionLink = styled(Link) `
padding: 10px 15px;
cursor: pointer;
`;

