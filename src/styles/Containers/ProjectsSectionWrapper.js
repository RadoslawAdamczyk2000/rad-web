import styled from 'styled-components';

const ProjectsSectionWrapper = styled.div`
    margin:10rem auto;

    & > .content {
        & > h2{
            color:${({theme}) => theme.colors.page.title};
            margin:2.5rem 0;
        }
    }

    & > .projects{
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

export default ProjectsSectionWrapper;