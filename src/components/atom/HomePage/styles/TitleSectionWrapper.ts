import styled from 'styled-components';
const TitleSectionWrapper = styled.div`
    color:${({theme}) => theme.colors.page.title};
    font-size:${({theme}) => theme.fonts.size.page.subTitle};
    font-weight:400;
    margin:.5rem auto;
    padding:.25rem .8rem;
    
`
export default TitleSectionWrapper;