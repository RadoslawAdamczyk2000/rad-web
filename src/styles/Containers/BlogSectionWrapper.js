import styled from 'styled-components';

const BlogSectionWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 2fr;
    grid-row-gap:5rem;
    margin:10rem auto;

    & > .content {
        padding:1.5rem;

        & > p{
            font-size:1.75rem;
            line-height:2.5rem;
        }

        & > a{
            margin:5rem auto;
        }
    }

    & > .articles{
        display:grid;
        grid-column-gap:2rem;
        grid-row-gap:2rem;
        grid-template-columns:repeat(2, 1fr);
        
        @media only screen and (min-width:1050px) and (max-width:1300px){
            grid-template-columns:repeat(1, 1fr);
        }
        @media only screen and (max-width:900px){
            grid-template-columns:repeat(1, 1fr);
        }
    }

    @media only screen and (min-width:900px) and (max-width:1300px){
            grid-template-columns:repeat(2, 1fr);
    }

    @media only screen and (max-width:1150px){
        grid-template-columns:1fr;
    }
`

export default BlogSectionWrapper;