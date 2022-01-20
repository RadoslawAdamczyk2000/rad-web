import styled from 'styled-components';

const TechnologiesWrapper = styled.div`
    & > .charts{
        background-color:${({theme}) => theme.colors.article.background};
        border-bottom-right-radius:10rem;
        border-top-left-radius:10rem;
        display:grid; 
        height:auto;
        grid-template-columns:repeat(2,1fr);
        margin:4rem 0;
        padding:3rem;

        @media only screen and (max-width:1250px){
            display:flex;
            flex-direction:column;
        }
    }
`

export default TechnologiesWrapper;