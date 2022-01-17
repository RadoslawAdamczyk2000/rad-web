import styled from 'styled-components';

const NavigationWrapper = styled.nav`
    background-color:${({theme}) => theme.colors.page.background };
    display:grid;
    grid-template-columns:2fr 5fr;
    min-height:4rem;
    position:sticky;
    top:0;
    z-index:9999;
`

export default NavigationWrapper;