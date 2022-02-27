import styled, { css } from 'styled-components';
const TextWrapper = styled.div`
    color:${({theme}) => theme.colors.page.subTitle};
    font-size:${({theme}) => theme.fonts.size.page.content};
    padding:1.5rem;
    text-align:start;
    & > p.main{
        line-height:3.2rem;
    }
`
export default TextWrapper;