import styled from 'styled-components';
const TitleSectionWrapper = styled.div`
    color:${({theme}) => theme.colors.page.title};
    font-size:${({theme}) => theme.fonts.size.page.subTitle};
    font-weight:400;
    margin:.5rem auto;
    padding:.25rem .8rem;
    & > h5{
        align-items:center;
        border-bottom:.25rem solid ${({theme}) => theme.colors.page.buttons};
        color:${({theme}) => theme.colors.page.buttons};
        display:flex;
        font-size:1.8rem;
        justify-content:center;
        height:5rem;
        text-align:center;
    }
    
`
export default TitleSectionWrapper;