import styled from 'styled-components';
const SocialsWrapper = styled.div`
    color:${({theme}) => theme.colors.article.background};
    padding:1rem .75rem;
    width:100%;
    & > ul{
        align-items:center;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
    }
`
export default SocialsWrapper;