import styled from 'styled-components';
const MainPosterWrapper = styled.figure`
    align-items:center;
    display:flex;
    height:60rem;
    justify-content:center;
    width:100%;
    & > img{
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`
export default MainPosterWrapper;