import styled from 'styled-components';

const AboutBanerWrapper = styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin:5rem 0;
    min-height:80rem;

    & > .head{
        display:grid;
        grid-template-columns:repeat(2,1fr);

        @media only screen and (max-width:950px){
            grid-template-columns:repeat(1,1fr);
        }

        & > .head__content{
            align-items:center;
            display:flex;
            flex-direction:column;
            justify-content:space-evenly;
            min-height:55rem;
            padding:2rem 1rem;
        }

        & > .head__image{
            overflow:hidden;
            max-height:65rem;
        }
    }

    & > .content{

        & > .content__item{
            margin:1.5rem 0;
            padding:2rem;
        }
    }
`

export default AboutBanerWrapper;