import styled from 'styled-components';
const ExcerptWrapper = styled.div`
    color:${({theme}) => theme.colors.page.subTitle};
    font-size:2.5rem;
    font-weight:500;
    margin:1.5rem auto;
    text-align:start;
`
export default ExcerptWrapper;