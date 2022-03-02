import styled from 'styled-components';
const TextWrapper = styled.div`
    color:${({theme}) => theme.colors.page.subTitle};
    font-size:${({theme}) => theme.fonts.size.page.content};
    line-height:3.2rem;
    padding:1.5rem;
    text-align:justify;
`
export default TextWrapper;