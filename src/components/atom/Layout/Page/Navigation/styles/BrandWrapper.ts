import styled from 'styled-components';
const BrandWrapper = styled.div`
    align-items:center;
    display:flex;
    height:100%;
    justify-content:center;
    position:relative;
    width:100%;
    & > a{
        color:${({theme}) => theme.colors.page.buttons} !important;
        font-size:3rem;
        font-weight:${({theme}) => theme.fonts.weight.page.secondary};
        transition:.12s linear filter;
        &:hover {
            filter:brightness(120%);
        }
    }
`
export default BrandWrapper;