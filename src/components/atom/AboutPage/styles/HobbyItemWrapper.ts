import styled from 'styled-components';
const HobbyItemWrapper = styled.div`
    align-items:center;
    color:${({theme}) => theme.colors.page.subTitle};
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:13rem;
    transition:.12s linear color;
    width:13rem;
    & > span{
        font-size:5rem;
    }
    & > p{
        font-size:1.8rem;
    }
    &:hover{
        color:${({theme}) => theme.colors.page.title};
    }
`
export default HobbyItemWrapper;