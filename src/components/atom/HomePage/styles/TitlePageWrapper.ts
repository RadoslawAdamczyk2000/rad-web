import styled from 'styled-components';
const TitlePageWrapper = styled.div`
    color:${({theme}) => theme.colors.page.background};
    font-size:${({theme}) => theme.fonts.size.page.title.mobile};
    padding:.25rem .75rem;
    text-shadow:0 0 .75rem ${({theme}) => theme.colors.page.title},0 0 1rem ${({theme}) => theme.colors.page.title};
    -webkit-text-stroke-color:${({theme}) => theme.colors.page.title};
    -webkit-text-stroke-width:.1rem;
`
export default TitlePageWrapper;