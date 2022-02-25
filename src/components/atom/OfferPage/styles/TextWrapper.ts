import styled from 'styled-components';
const TextWrapper = styled.div`
    color:${({theme}) => theme.colors.page.subTitle};
    font-size:${({theme}) => theme.fonts.size.page.content};
    padding:1.5rem;
    text-align:justify;
    & > ol{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        gap:2rem;
    }
`
export default TextWrapper;