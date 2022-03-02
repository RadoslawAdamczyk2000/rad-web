import styled from 'styled-components';
const ExcerptWrapper = styled.div`
    color:${({theme}) => theme.colors.page.title};
    font-size:2.5rem;
    font-weight:500;
    line-height:3.9rem;
    margin:1.5rem auto;
    text-align:start;
`
export default ExcerptWrapper;