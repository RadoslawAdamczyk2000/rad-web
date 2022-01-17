import styled from 'styled-components';

const MenuWrapper = styled.menu`
    align-items:center;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:space-evenly;
    
    @media only screen and (max-width:700px){
        margin:.25rem 0;
    }
`

export default MenuWrapper;