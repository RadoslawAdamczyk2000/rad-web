import styled from 'styled-components';
const HeadingWrapper = styled.div`
    align-items:center;
    display:flex;
    justify-content:start;
    margin:2.1rem 0;
    padding-left:2rem;
    width:100%;
    & > h2{
        color:${({theme}) => theme.colors.page.titile};
        font-size:2.4rem;
    }
`
export default HeadingWrapper;