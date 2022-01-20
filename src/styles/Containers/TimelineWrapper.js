import styled from 'styled-components';

const TimelineWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-row-gap:2rem;
    margin:2rem auto;
    padding:.25rem;
    width:75%;

    & > span{
        display:block;
    }

    & > div:nth-of-type(odd){
        grid-column:1;
    }

    & > div:nth-of-type(even){
        grid-column:2;
    }

    & > div:nth-of-type(even) + span{
        grid-column:1;
    }

    & > div:nth-of-type(odd) + span{
        grid-column:2;
    }


    @media only screen and (max-width:950px){
        grid-template-columns:repeat(1,1fr);
        width:85%;
    
        & > div:nth-of-type(odd){
            grid-column:1;
        }

        & > div:nth-of-type(even){
            grid-column:1;
        }
        & > span{
            display:none;
        }
    }
`

export default TimelineWrapper;