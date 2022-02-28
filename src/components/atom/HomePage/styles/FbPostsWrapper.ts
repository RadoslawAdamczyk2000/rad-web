import styled from 'styled-components';
const FbPostsWrapper = styled.section`
    align-items:flex-start;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    margin:4rem 0;
    & > *{
        background-color:#FFFFFF;
        border:none;
        display:flex;
        outline:none;
        transition:.12s linear filter;
        width:100%;
        &:hover{
            filter:brightness(105%);
        }
    }
`
export default FbPostsWrapper;