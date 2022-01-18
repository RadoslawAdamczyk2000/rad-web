import styled from 'styled-components';

const ProjectsWrapper = styled.div`
    & > .content {
        align-items:center;
        display:flex;
        flex-direction:column;
        margin: 10rem 0;

        & > h1{
            margin:4rem 0;
            width:100%;
        }
    }

    & > .cards{
        display:grid;
        grid-template-columns:repeat( 3, 1fr);
        margin:5rem 0;

        @media only screen{
            /* @media (max-width:600px) */
            @media (max-width:1000px){
                grid-template-columns:repeat( 2, 1fr);
            }

            @media (max-width:700px){
                grid-template-columns:repeat( 1, 1fr);
            }
        }
    }

`

export default ProjectsWrapper;