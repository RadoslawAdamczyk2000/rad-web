import styled from 'styled-components';

const BlogWrapper = styled.div`
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
        grid-gap:1rem;
        grid-template-columns:repeat(4,1fr);
        margin: 10rem 0;

        @media only screen{
            /* @media (max-width) */
            @media (max-width:1400px){
                grid-template-columns:repeat(3,1fr);
            }
            @media (max-width:1200px){
                grid-template-columns:repeat(2,1fr);
            }
            @media (max-width:850px){
                grid-template-columns:repeat(1,1fr);
            }
        }
    }
`

export default BlogWrapper;