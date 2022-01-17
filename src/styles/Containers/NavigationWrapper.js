import styled from 'styled-components';

const NavigationWrapper = styled.nav`
    background-color:${({theme}) => theme.colors.page.background };
    display:grid;
    grid-template-columns:2fr 5fr;
    min-height:4rem;
    padding:.5rem 0;
    position:sticky;
    top:0;
    z-index:9999;

    @media only screen and (max-width:700px){
        grid-template-columns:1fr;
    }
`

export default NavigationWrapper;