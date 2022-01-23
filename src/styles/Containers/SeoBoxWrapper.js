import styled from 'styled-components';

const SeoBoxWrapper = styled.div`
    align-items:baseline;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    @media only screen{
        @media (max-width:1000px){
            grid-template-columns:repeat(2,1fr);
        }
        @media (max-width:850px){
            grid-template-columns:repeat(1,1fr);
            text-align:center;
        }
    }
    & > ul{
        font-size:${({theme}) => theme.fonts.size.page.button};
        margin:.75rem auto;
        width:100%;
    }
`

export default SeoBoxWrapper;