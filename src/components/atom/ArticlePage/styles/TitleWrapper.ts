import styled from 'styled-components';
const TitleWrapper = styled.div`
    color:${({theme}) => theme.colors.page.background};
    font-size:4.5rem;
    max-width:85vw;
    padding:.25rem .75rem;
    text-align:start;
    text-shadow:0 0 .75rem ${({theme}) => theme.colors.page.title},0 0 1rem ${({theme}) => theme.colors.page.title};
    -webkit-text-stroke-color:${({theme}) => theme.colors.page.title};
    -webkit-text-stroke-width:.15rem;
    @media only screen and (max-width:950px){
        font-size:3.5rem;
    }
    @media only screen and (max-width:750px){
        font-size:3rem;
    }
`
export default TitleWrapper;