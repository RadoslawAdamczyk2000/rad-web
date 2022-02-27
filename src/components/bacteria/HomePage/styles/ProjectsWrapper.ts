import styled from 'styled-components';
const ProjectsWrapper = styled.section`
    display:grid;
    grid-template-columns:2.75fr 1.5fr;
    margin:1.5rem auto;
    & > .cards{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap:.75rem;
        justify-content:center;
        margin:auto;
        padding:.45rem;
    }
    & > .head{
        align-items:center;
        display:flex;
        flex-direction:column;
        justify-content:center;
        row-gap:1.75rem;
    }
    @media only screen and (max-width:1150px){
        align-items:center;
        display:flex;
        flex-direction:column-reverse;
        justify-content:center;
        row-gap:3rem;
    }
`
export default ProjectsWrapper;