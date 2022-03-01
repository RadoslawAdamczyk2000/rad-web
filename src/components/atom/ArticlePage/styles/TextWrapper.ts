import styled from 'styled-components';
const TextWrapper = styled.article`
    color:${({theme}) => theme.colors.page.subTitle};
    font-size:1.8rem;
    font-weight:300;
    text-align:justify;
    margin:1.8rem auto;
    & > b,
    & > strong{
        
        font-weight:800;
    }
    & > a{
        color:${({theme}) => theme.colors.page.buttons};
        text-decoration:underline;
        transition:.12s linear filter;
        &:hover {
            filter:brightness(120%);
        }
    }
`
export default TextWrapper;