import styled from 'styled-components';

const BrandWrapper = styled.div`
    align-items:center;
    color:${({theme}) => theme.colors.page.special};
    display:flex;
    font-size:3rem;
    font-weight:${({theme}) => theme.fonts.weight.page.secondary};
    height:100%;
    justify-content:center;
    position:relative;
    width:100%;
`

export default BrandWrapper;