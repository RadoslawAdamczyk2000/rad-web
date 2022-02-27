import styled from 'styled-components';
const BlogWrapper = styled.section`
    display:grid;
    grid-template-columns:1.5fr 2.75fr;
    margin:5rem auto;
    & > .head{
        align-items:start;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
        justify-content:center;
    }
    & > .cards{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        gap:.75rem;
        margin:auto;
        & > *{
            margin:auto;
        }
    }
    @media only screen and (max-width:1250px){
        display:flex;
        flex-direction:column;
        & > .head{
            padding:1rem .25rem;
        }
        & > .cards{
            margin:2rem auto;
        }
    }
`
export default BlogWrapper;