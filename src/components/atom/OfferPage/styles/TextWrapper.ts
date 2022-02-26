import styled from 'styled-components';
const TextWrapper = styled.div`
    color:${({theme}) => theme.colors.page.subTitle};
    font-size:${({theme}) => theme.fonts.size.page.content};
    padding:1.5rem;
    text-align:justify;
    & > ol {
        align-items:center;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        gap:2rem;
        justify-content:center;
        list-style:circle;
        margin:2rem auto;
        text-align:center;
        width:85%;
        & > li{
            list-style:circle;
        }
    }
    & > ul{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        gap:2rem;
    }
`
export default TextWrapper;