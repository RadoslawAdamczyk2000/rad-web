import styled from 'styled-components';
const StackWrapper = styled.ul`
    align-items:center;
    column-gap:1.5rem;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:start;
    padding:.7rem;
    row-gap:1rem;
    width:100%;
    & > li{
        align-items:center;
        color:${({theme}) => theme.colors.page.buttons};
        display:flex;
        font-size:3rem;
        height:4.5rem;
        justify-content:center;
        width:4.5rem;
    }
`
export default StackWrapper;